import { MentorDetailType } from 'api/careers';

export type Achievement = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  problem: string;
  subject: string;
  solveProcess: string;
  present: string;
  sharingStudent: string;
  sharing: string;
  mentors: MentorDetailType[];
};

export const achievements: Achievement[] = [
  {
    image: '/images/projects/pics/ps_group_one.jpg',
    imageWidth: 414,
    imageHeight: 171,
    alt: 'group_one',
    problem: '如何將超商咖啡消費者轉向到券券即將開發的咖啡聯盟寄杯系統上？',
    subject:
      '券券想聯合其他一千多家獨立咖啡廳做聯盟寄杯，因而開發一套聯盟寄杯系統，專案希望學員能提出一個方案，協助券券聯盟寄盃系統達成題目目標。',
    solveProcess:
      '透過議題樹的分析，收斂成尋找目標受眾及發想行銷方案兩大主軸，最終將行銷方案設定成優惠券、Facebook、咖啡地圖等。',
    present:
      '期末以精準數據分析專案整體報告，量化各項投入項目可能的成本。其中也以一個實際案例作為比較的辦法，評估各個行銷手段及策略。',
    sharingStudent: '1-5 郭咨宜',
    sharing:
      '期末以精準數據分析專案整體報告，量化各項投入項目可能的成本。其中也以一個實際案例作為比較的辦法，評估各個行銷手段及策略。',
    mentors: [
      {
        id: '1',
        name: '陳顥仁',
        image: {
          id: '',
          name: '',
          url: '',
        },
        description: '- 券券文化創辦人 \n - 資訊種子第 2 屆 學員',
        facebook_link: undefined,
        linkedin_url: undefined,
        email_address: undefined,
      },
    ],
  },
  {
    image: '/images/projects/pics/ps_group_two.jpg',
    imageWidth: 414,
    imageHeight: 171,
    alt: 'group_two',
    problem: '提升群眾募資商品的揀貨效率',
    subject: '因出貨速度會受到人力、包貨流程的影響，希望學員能研究題目並提出能讓揀貨效率提升的方案。',
    solveProcess:
      '透過議題樹、實際參訪公司對於 Mixxin 這間公司有更多的認識。 我們最終將其中定位為數據分析、以及專案工作說明書來發展下去。 工讀生有了專案工作說明書將更快上手工作。',
    present:
      '期末專案該組完成了工作說明書，也完成了 Mixxin 與人生百味第一次的合作方案， 透過這次專案組內對於商業簡報的製作上面也有更全面的認識，也了解要如何應對公司內部所要面對的各個細部層面的問題。',
    sharingStudent: '2-7陳熙雯',
    sharing:
      '透過 PS 專案，得以和 Mixxin 合作，藉以一窺新創公司的職場生態，是非常難得的體驗。專案在中途有了意想不到的轉彎， 和一開始預設好的題目不太一樣，也就是加入了人生百味的合作，令我們一時難以招架，不過從中也學習到了，職場上本來就瞬息萬變， 不可能像學校考試題目那樣固定，隨時調整方向是必須的，也算是寶貴的經驗。',
    mentors: [
      {
        id: '1',
        name: '王皓',
        image: {
          id: '',
          name: '',
          url: '',
        },
        description: '- Mixxin 創辦人 \n - 資訊種子第 7 屆 學員',
        facebook_link: undefined,
        linkedin_url: undefined,
        email_address: undefined,
      },
    ],
  },
  {
    image: '/images/projects/pics/ps_group_three.jpg',
    imageWidth: 414,
    imageHeight: 171,
    alt: 'group_three',
    problem: '規劃大學生會有興趣購買的電玩技能',
    subject:
      '開課快手致力透過科技成為傳播知識的幕後推手。協助老師輕鬆架設網站，掌握學生名單、流量、金流、定價機制等， 讓老師擁有自己的線上課程教學品牌網站。此次專案希望了解娛樂領域中，電玩技能線上課程的需求。',
    solveProcess:
      '開發遊戲銷售量這是一門很難得課題，在期中組內應用議題樹到生活之中的各個層面，希望透過這樣找到一個可以幫助公司內部銷售業績的展現， 因為我們是大學生，所以設計一個跟大學生有關的題目給我們，幫業主測試這個想法可行性。',
    present:
      '透過發放問卷以及各項訪問後，組內以開放的心態去面對各項挑戰，最後擬定了課程大綱。最後組內以大學生的社交需求，發想直播及課程的互動平台希望可以因此獲得更多發售機會。',
    sharingStudent: '3-6 施詠閎',
    sharing:
      '我們組的題目比較特別，相對於解決企業問題，我們的任務比較像是做一份市場報告，探討「遊戲」是否可在線上課程平台生存， 因為我們這組對遊戲都剛好很陌生，因此我們做了許多資料查詢與問卷調查，經過層層難關後最終才決定了我們的遊戲， 並發想了許多遊戲外的附加價值期待能找到那 100 個大學生，這也是我認為最有趣的地方，我們最後發想出很酷很特別的提案並在問卷中真的找出部分有興趣的大學生， 雖然結果不如預期，但過程中與組員們的合作與大量的討論真的提升了我許多邏輯思考與軟硬實力，也了解做專案要更注意的地方！',
    mentors: [
      {
        id: '1',
        name: '林宜儒',
        image: {
          id: '',
          name: '',
          url: '',
        },
        description: '- 開課快手 創辦人 \n - 資訊種子第 4 屆 學員',
        facebook_link: undefined,
        linkedin_url: undefined,
        email_address: undefined,
      },
    ],
  },
  {
    image: '/images/projects/pics/ps_group_four.jpg',
    imageWidth: 360,
    imageHeight: 149,
    alt: 'group_four',
    problem: '提升蒙特梭利課程平台會員註冊人數',
    subject:
      '提升蒙特梭利課程平台會員註冊人數。目前蒙特梭利教育發展學會（MEFA）正處於擴張階段， 剛聘用一位新員工負責提升線上課程平台營運。希望學員能協助做市場調查與發想。',
    solveProcess:
      '先從 FB 粉專資料分析問題，發現可分為平台流量不夠及流量夠但轉換率不夠兩個方向。再藉由發放問卷的方式了解受眾需求，發想出吸引他們的內容。',
    present: '製作懶人包、共鳴文，以期能吸引目標客群的關注',
    sharingStudent: '4-7 陳靖汝',
    sharing:
      '跨領域合作，跨領域了解其他產業。 透過 PS 專案，與 MEFA 合作，從一開始拆解問題，到實際運用課程所上的議題樹，經過不斷地收斂問題，訪談業主，並且實際投放問卷、搜集問卷， 近一步針對問卷做數據分析，最後發想到新型的懶人包呈現方式。比起大學，自行發想問題，並且製作相關的報告，透過這次的專案經驗，我實際了解業界真實會有的問題， 在訪談業主過程中了解其中的需求，同時提升解決問題的思維，在面對資訊時能擁有思考能力，並根據事證做決策、執行。',
    mentors: [
      {
        id: '1',
        name: '陳識傑',
        image: {
          id: '',
          name: '',
          url: '',
        },
        description: '- MEFA蒙特梭利教育發展學會 行銷總監 \n - 資訊種子第 7 屆 學員',
        facebook_link: undefined,
        linkedin_url: undefined,
        email_address: undefined,
      },
    ],
  },
  {
    image: '/images/projects/pics/ps_group_five.jpg',
    imageWidth: 360,
    imageHeight: 149,
    alt: 'group_five',
    problem: '提升拾夢家營業額',
    subject:
      '提升拾夢家營業額。拾夢家是盤古銀髮旗下的空間品牌。期望幫助 40+ 以上即將面對退休生活的中老年，讓他們有意識的想像退休生活、找到自己的興趣，避免退休後太快邁入失能。',
    solveProcess: '定義目標客群及需求，發想出符合品牌形象及宗旨的活動內容，並預估活動效益。',
    present: '設計主題月、長期課程、短期主題講座、手工藝等活動。',
    sharingStudent: '5-2 趙熙寧',
    sharing:
      '從結果而論，我對專案的成果並不是非常滿意；從過程來看，這個專案在邏輯建立以及問題解決之上都對我有很大的幫助，也造就了往後我在做其他專案時，清晰的邏輯思維與表達方式。 在做這個專案以前，我從來沒解決過業界的問題，更不知道問題解決的步驟。在初次面對「提升營業額」的問題時，我的想法如同大多數沒有經驗的人一樣，是非常發散的，經過學姐的帶領，我初次知道了拆解議題樹這個方法， 也學會依循問題定義 → 問題拆解 → 蒐集資料 →開始分析 → 產出結果等步驟一步步的找出洞見，雖然最後在成果發表上發現我們還有很多疏忽未盡完善之處，但這也讓我在往後的專案中， 更清楚哪些可能是容易犯錯的地方，並在錯誤發生時，有足夠的能力將之導正！',
    mentors: [
      {
        id: '1',
        name: '曾筱芸',
        image: {
          id: '',
          name: '',
          url: '',
        },
        description: '- 盤古銀髮 共同創辦人／營運長 \n - 資訊種子第 3 屆 學員',
        facebook_link: undefined,
        linkedin_url: undefined,
        email_address: undefined,
      },
    ],
  },
];
