
import { LessonContent, QuestionType } from '../../types';

export const PastSimpleLesson: LessonContent = {
   meta: {
      id: 'grammar-past-simple',
      title: 'Past Simple - Kỷ Niệm Hôm Qua',
      level: 'Beginner',
      category: 'Grammar',
      estimatedTime: 7,
      tags: ['Basic', 'Past'],
      order: 5,
   },
   theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-yellow-100 to-white rounded-3xl border border-yellow-200 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Past Simple</h2>
        <div class="flex items-center gap-2 text-yellow-600 font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Thì Quá Khứ Đơn
        </div>
      </header>

      <!-- Section 1: Usage -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-yellow-50 text-yellow-600 shadow-sm">01</span>
          Cách Dùng (Usage)
        </h3>
        <p class="text-sm text-gray-400 font-medium pl-2">Dùng để kể lại những chuyện đã xảy ra và kết thúc trong quá khứ.</p>
        <div class="grid gap-3">
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-yellow-200 transition-all hover:shadow-md hover:shadow-yellow-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">Hành động đã kết thúc</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Xảy ra tại một thời điểm xác định (I saw a movie yesterday).</p>
             </div>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-yellow-200 transition-all hover:shadow-md hover:shadow-yellow-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">Chuỗi hành động</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Các sự việc xảy ra liên tiếp nhau (I finished work, walked to the beach, and found a nice place).</p>
             </div>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-yellow-200 transition-all hover:shadow-md hover:shadow-yellow-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">Thói quen quá khứ</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Những việc thường làm nay không còn nữa (I played the guitar when I was a child).</p>
             </div>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-yellow-200 transition-all hover:shadow-md hover:shadow-yellow-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">Tình trạng quá khứ</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Dùng với Was/Were (She was very happy last week).</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Signals -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-50 text-orange-500 shadow-sm">02</span>
          Dấu Hiệu Nhận Biết (Signal Words)
        </h3>
        <div class="bg-gray-50/30 p-5 rounded-3xl border border-gray-100 grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <span class="text-[10px] font-black uppercase text-gray-400 tracking-widest block">Mốc thời gian</span>
            <div class="flex flex-wrap gap-2 text-[11px] font-bold text-gray-600">
               <span class="px-2 py-1 bg-white rounded-lg border border-gray-200 shadow-sm">Yesterday</span>
               <span class="px-2 py-1 bg-white rounded-lg border border-gray-200 shadow-sm">Last week</span>
               <span class="px-2 py-1 bg-white rounded-lg border border-gray-200 shadow-sm">2 days ago</span>
               <span class="px-2 py-1 bg-white rounded-lg border border-gray-200 shadow-sm">In 2020</span>
            </div>
          </div>
          <div class="space-y-2">
             <span class="text-[10px] font-black uppercase text-gray-400 tracking-widest block">Ngữ cảnh</span>
             <p class="text-[11px] font-medium text-gray-500 italic">"When I was young..." | "A long time ago..."</p>
          </div>
        </div>
      </section>

      <!-- Section 3: The 3 Forms - To Be -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-yellow-100 text-yellow-700 shadow-sm">03</span>
          Was / Were (Thì Quá khứ của To Be)
        </h3>
        <div class="overflow-hidden rounded-3xl border border-yellow-100 shadow-lg shadow-yellow-50">
          <div class="grid grid-cols-3 bg-yellow-400 text-yellow-900 font-bold p-4 text-center text-xs uppercase tracking-tighter">
            <div>Khẳng định (+)</div>
            <div>Phủ định (-)</div>
            <div>Nghi vấn (?)</div>
          </div>
          <div class="grid grid-cols-3 bg-white p-5 gap-3 text-center border-b border-gray-50">
            <div class="space-y-2">
               <p class="text-[10px] font-bold text-gray-400">I/He/She/It</p>
               <p class="text-sm font-black text-yellow-700">WAS</p>
               <p class="text-[10px] font-bold text-gray-400">You/We/They</p>
               <p class="text-sm font-black text-yellow-700">WERE</p>
            </div>
            <div class="space-y-2 border-x border-gray-50">
               <p class="text-[10px] font-bold text-gray-400">Not</p>
               <p class="text-sm font-black text-red-500 uppercase italic leading-tight">Wasn't <br/> Weren't</p>
            </div>
            <div class="space-y-2">
               <p class="text-[10px] font-bold text-gray-400">Đảo ngữ</p>
               <p class="text-xs font-black text-yellow-700">Was she ...?<br/>Were you ...?</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: The 3 Forms - Action Verbs -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 shadow-sm">04</span>
          Công Thức Động Từ Thường (Did)
        </h3>
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl">
           <!-- Pos -->
           <div class="p-6 border-b border-gray-50 bg-gradient-to-r from-orange-50/20 to-white">
              <div class="flex items-center gap-2 mb-2">
                 <span class="text-xs font-black text-orange-500 tracking-widest">+ KHẲNG ĐỊNH</span>
              </div>
              <p class="text-lg font-black text-gray-800 mb-1">S + V2 / V-ed</p>
              <p class="text-[10px] text-gray-400 italic font-medium">I <strong>cooked</strong> lunch. | They <strong>bought</strong> a car.</p>
           </div>
           <!-- Neg & Ques -->
           <div class="p-6 bg-gray-50/20">
              <div class="grid grid-cols-2 gap-8">
                 <div>
                    <span class="text-xs font-black text-red-500 tracking-widest block mb-1">- PHỦ ĐỊNH</span>
                    <p class="text-sm font-black text-gray-700">S + DID NOT + V(inf)</p>
                    <p class="text-[9px] text-gray-400 mt-1 italic">I <strong>didn't cook</strong></p>
                 </div>
                 <div>
                    <span class="text-xs font-black text-blue-500 tracking-widest block mb-1">? NGHI VẤN</span>
                    <p class="text-sm font-black text-gray-700">DID + S + V(inf)?</p>
                    <p class="text-[9px] text-gray-400 mt-1 italic"><strong>Did</strong> you <strong>buy</strong> it?</p>
                 </div>
              </div>
              <div class="mt-4 p-3 bg-red-50 rounded-xl border border-red-100">
                 <p class="text-[11px] text-red-600 font-bold leading-relaxed">⚠️ CẢNH BÁO CỦA TÒNG: Khi mượn "DID", động từ PHẢI về NGUYÊN MẪU. Không được dùng "Didn't bought" nha vợ!</p>
              </div>
           </div>
        </div>
      </section>

      <!-- Section 5: Pronunciation & Irregular Verbs -->
      <section class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
           <h4 class="font-bold text-gray-800 flex items-center gap-2 tracking-tight">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              Phát âm -ed
           </h4>
           <div class="p-4 bg-white border border-gray-100 rounded-2xl space-y-3">
              <div class="flex justify-between items-center text-xs">
                 <span class="font-bold text-yellow-600">/id/</span>
                 <span class="text-gray-400 italic">Kết thúc: t, d (wanted)</span>
              </div>
              <div class="flex justify-between items-center text-xs">
                 <span class="font-bold text-yellow-600">/t/</span>
                 <span class="text-gray-400 italic">Âm vô thanh (looked)</span>
              </div>
              <div class="flex justify-between items-center text-xs">
                 <span class="font-bold text-yellow-600">/d/</span>
                 <span class="text-gray-400 italic">Còm lại (played)</span>
              </div>
           </div>
        </div>

        <div class="space-y-4">
           <h4 class="font-bold text-gray-800 flex items-center gap-2 tracking-tight">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              Động từ bất quy tắc (V2)
           </h4>
           <div class="overflow-hidden rounded-2xl border border-gray-100 text-[11px]">
              <div class="grid grid-cols-2 bg-gray-50 p-2 font-bold text-gray-500 border-b border-gray-100">
                 <div>Hiện tại (V1)</div>
                 <div>Quá khứ (V2)</div>
              </div>
              <div class="space-y-1 bg-white p-2 text-gray-600">
                 <div class="flex justify-between border-b border-gray-50 pb-1"><span>Go</span><span class="font-black text-yellow-600">Went</span></div>
                 <div class="flex justify-between border-b border-gray-50 pb-1"><span>Eat</span><span class="font-black text-yellow-600">Ate</span></div>
                 <div class="flex justify-between"><span>Drink</span><span class="font-black text-yellow-600">Drank</span></div>
              </div>
           </div>
        </div>
      </section>
    </div>
  `,
   questions: [
      {
         id: 'p1',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "Which word has the '-ed' pronounced as /id/?",
         options: ["Looked", "Played", "Wanted", "Washed"],
         correctAnswer: "Wanted",
         explanation: "Từ kết thúc bằng âm 't' hoặc 'd' thì '-ed' sẽ phát âm là /id/.",
      },
      {
         id: 'p2',
         type: QuestionType.FILL_GAP,
         question: "I _____ (not/be) at the party last night.",
         correctAnswer: "wasn't",
         explanation: "Phủ định của động từ To Be 'was' cho ngôi 'I'. Không dùng 'didn't' với To Be nha vợ.",
      },
      {
         id: 'p3',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "What _____ you _____ (buy) for lunch yesterday?",
         options: ["did/buy", "did/bought", "were/buy", "was/buy"],
         correctAnswer: "did/buy",
         explanation: "Câu hỏi quá khứ dùng 'did' + động từ nguyên mẫu.",
      },
      {
         id: 'p4',
         type: QuestionType.FILL_GAP,
         question: "They _____ (begin) to learn English 3 years ago.",
         correctAnswer: "began",
         explanation: "'Begin' là động từ bất quy tắc, quá khứ là 'began'.",
      },
      {
         id: 'p5',
         type: QuestionType.REWRITE,
         question: "Rewrite: He was tired yesterday. (Change to a question)",
         correctAnswer: "Was he tired yesterday?",
         explanation: "Đảo 'Was' lên trước chủ ngữ để làm câu hỏi với động từ To Be.",
      },
      {
         id: 'p6',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "Which sentence is CORRECT?",
         options: [
            "I didn't went to the market.",
            "I didn't go to the market.",
            "I not go to the market.",
            "I wasn't go to the market."
         ],
         correctAnswer: "I didn't go to the market.",
         explanation: "Sau 'didn't', động từ phải ở dạng nguyên mẫu (go).",
      }
   ]
};
