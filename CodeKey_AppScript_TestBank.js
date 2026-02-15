
// @ts-nocheck
function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        var json = JSON.parse(e.postData.contents);
        var action = json.action;
        var userId = json.userId || 'vo'; // Mặc định là 'vo'

        // 1. ĐỒNG BỘ DỮ LIỆU HỌC TẬP
        if (action === 'sync') {
            saveData(userId, json.data);
            return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // 2. LƯU KẾT QUẢ THI & CỘNG ĐIỂM (CÔNG THỨC MỚI)
        if (action === 'syncTestResult') {
            var result = json.data;

            saveTestResult(userId, result);

            // Công thức mới: dưới 50đ = 0. Trên 50đ = (score - 50) / 2
            var bonusPoints = 0;
            if (result.score > 50) {
                bonusPoints = Math.floor((result.score - 50) / 2);
            }

            if (bonusPoints > 0) {
                addPointsToUser(userId, bonusPoints);
            }

            return ContentService.createTextOutput(JSON.stringify({
                status: 'success',
                bonusPoints: bonusPoints,
                userId: userId
            })).setMimeType(ContentService.MimeType.JSON);
        }

        return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Unknown action' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function doGet(e) {
    if (e.parameter.action === 'load') {
        var userId = e.parameter.userId || 'vo';
        var data = loadData(userId);
        return ContentService.createTextOutput(JSON.stringify(data))
            .setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Unknown GET action' }))
        .setMimeType(ContentService.MimeType.JSON);
}

function getSheet(ss, sheetName) {
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
        sheet = ss.insertSheet(sheetName);
    }
    return sheet;
}

function saveTestResult(userId, result) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getSheet(ss, 'TestResults');
    if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'UserId', 'TestId', 'Score', 'Correct', 'Total']);
    }
    sheet.appendRow([new Date(), userId, result.testId, result.score, result.correctCount, result.totalQuestions]);
}

function addPointsToUser(userId, points) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var userSheet = ss.getSheetByName(userId + '_Users');
    if (userSheet && userSheet.getLastRow() > 1) {
        // Cột 8 (H) là Points
        var pointCell = userSheet.getRange(2, 8);
        var currentPoints = Number(pointCell.getValue()) || 0;
        pointCell.setValue(currentPoints + points);
    }
}

function saveData(userId, data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var userSheet = getSheet(ss, userId + '_Users');
    userSheet.clear();
    userSheet.appendRow(['TotalMinutes', 'Streak', 'LastDate', 'Correct', 'Total', 'Goal', 'Days', 'Points', 'RedeemedJSON']);
    userSheet.appendRow([
        data.user.totalStudyMinutes,
        data.user.streakDays,
        data.user.lastStudyDate,
        data.user.correctAnswers,
        data.user.totalAnswers,
        data.settings.dailyGoalMinutes,
        JSON.stringify(data.settings.studyDays),
        data.user.points || 0,
        JSON.stringify(data.user.redeemedRewardIds || [])
    ]);

    var reviewSheet = getSheet(ss, userId + '_Reviews');
    reviewSheet.clear();
    reviewSheet.appendRow(['LessonID', 'LastReviewed', 'NextReview', 'Interval', 'Ease', 'Repetitions']);
    var reviewRows = [];
    for (var key in data.reviews) {
        var r = data.reviews[key];
        reviewRows.push([r.lessonId, r.lastReviewedAt, r.nextReviewAt, r.interval, r.easeFactor, r.repetitions]);
    }
    if (reviewRows.length > 0) reviewSheet.getRange(2, 1, reviewRows.length, 6).setValues(reviewRows);

    var historySheet = getSheet(ss, userId + '_History');
    historySheet.clear();
    historySheet.appendRow(['Date', 'Minutes', 'Lessons']);
    var historyRows = data.history.map(function (h) { return [h.date, h.minutes, h.lessonsCompleted]; });
    if (historyRows.length > 0) historySheet.getRange(2, 1, historyRows.length, 3).setValues(historyRows);

    if (userId === 'tong' && data.rewards && data.rewards.length > 0) {
        var rewardSheet = getSheet(ss, 'Shared_Rewards');
        rewardSheet.clear();
        rewardSheet.appendRow(['ID', 'Title', 'Desc', 'Points', 'Icon']);
        var rewardRows = data.rewards.map(function (r) { return [r.id, r.title, r.description, r.pointsRequired, r.icon]; });
        if (rewardRows.length > 0) rewardSheet.getRange(2, 1, rewardRows.length, 5).setValues(rewardRows);
    }
}

function loadData(userId) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var userSheet = ss.getSheetByName(userId + '_Users');
    var user = { totalStudyMinutes: 0, streakDays: 0, lastStudyDate: '', correctAnswers: 0, totalAnswers: 0, points: 0, redeemedRewardIds: [] };
    var settings = { dailyGoalMinutes: 15, studyDays: [0, 1, 2, 3, 4, 5, 6] };

    if (userSheet && userSheet.getLastRow() > 1) {
        var data = userSheet.getRange(2, 1, 1, 9).getValues()[0];
        user = {
            totalStudyMinutes: Number(data[0]),
            streakDays: Number(data[1]),
            lastStudyDate: String(data[2]),
            correctAnswers: Number(data[3]),
            totalAnswers: Number(data[4]),
            points: Number(data[7]) || 0,
            redeemedRewardIds: data[8] ? JSON.parse(data[8]) : []
        };
        settings = { dailyGoalMinutes: Number(data[5]), studyDays: JSON.parse(data[6]) };
    }

    var reviewSheet = ss.getSheetByName(userId + '_Reviews');
    var reviews = {};
    if (reviewSheet && reviewSheet.getLastRow() > 1) {
        var rows = reviewSheet.getRange(2, 1, reviewSheet.getLastRow() - 1, 6).getValues();
        rows.forEach(function (r) {
            reviews[r[0]] = { lessonId: r[0], lastReviewedAt: Number(r[1]), nextReviewAt: Number(r[2]), interval: Number(r[3]), easeFactor: Number(r[4]), repetitions: Number(r[5]) };
        });
    }

    var histSheet = ss.getSheetByName(userId + '_History');
    var history = [];
    if (histSheet && histSheet.getLastRow() > 1) {
        var rows = histSheet.getRange(2, 1, histSheet.getLastRow() - 1, 3).getValues();
        history = rows.map(function (r) { return { date: String(r[0]), minutes: Number(r[1]), lessonsCompleted: Number(r[2]) }; });
    }

    var rewardSheet = ss.getSheetByName('Shared_Rewards');
    var rewardsList = [];
    if (rewardSheet && rewardSheet.getLastRow() > 1) {
        var rows = rewardSheet.getRange(2, 1, rewardSheet.getLastRow() - 1, 5).getValues();
        rewardsList = rows.map(function (r) { return { id: String(r[0]), title: String(r[1]), description: String(r[2]), pointsRequired: Number(r[3]), icon: String(r[4]) }; });
    }

    return { user: user, reviews: reviews, history: history, settings: settings, rewards: rewardsList };
}
