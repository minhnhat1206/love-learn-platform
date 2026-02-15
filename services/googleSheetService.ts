
import { AppState } from '../types';

// Instructions:
// 1. Create a Google Sheet.
// 2. Open Extensions > Apps Script.
// 3. Paste the provided GAS code (see AI response).
// 4. Deploy as Web App > Who can access: Anyone.
// 5. Copy the 'Current web app URL' and paste it below.

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_wFYOwRIWF2aeDSh2cuENIBLMJJ1kdn0Hg0HlfJCviv2iS4FtokejPuvQMn7Eu0k8/exec'; // <--- DÁN URL CỦA BẠN VÀO ĐÂY

export const syncWithGoogleSheets = async (state: AppState): Promise<boolean> => {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) return false;

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'sync',
        userId: state.userId,
        data: state
      })
    });

    if (!response.ok) {
      console.error("Failed to sync with sheets");
      return false;
    }
    return true;

  } catch (error) {
    console.error("Google Sheets Sync Error:", error);
    return false;
  }
};

export const loadFromGoogleSheets = async (userId: string): Promise<AppState | null> => {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) return null;

  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=load&userId=${userId}`);
    const data = await response.json();
    if (data && data.user) {
      return { ...data, userId } as AppState;
    }
    return null;
  } catch (error) {
    console.error("Google Sheets Load Error:", error);
    return null;
  }
};

export const syncTestResult = async (userId: string, result: any): Promise<{ success: boolean, bonusPoints: number }> => {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) return { success: false, bonusPoints: 0 };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'syncTestResult',
        userId: userId,
        data: result
      })
    });

    console.log("Test result synced to cloud for userId:", userId);
    return { success: true, bonusPoints: 0 };

  } catch (error) {
    console.error("Test Result Sync Error:", error);
    return { success: false, bonusPoints: 0 };
  }
};
