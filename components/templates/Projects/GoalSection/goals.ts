import { Project } from 'util/enum';

export interface GoalType {
  projectDescription: string;
  hint?: string;
  content?: string;
  imagePath?: string;
}

export const goals: { [key in Project]: GoalType } = {
  [Project.ps]: {
    projectDescription:
      '專案全名 — Top up the value ，以組為單位，協助企業進行社會關懷連結，利用問題拆解、設計思考等方式進行討論與產出方案，並規劃 MVP 測試是否可行，以提供企業執行。從中學習團隊建立、養成專案管理、企劃書撰寫、會議、信件等能力。',
  },
  [Project.career]: {
    projectDescription:
      '職涯專案除了豐富的職涯體驗之外，第 20 屆職涯召部團隊也舉辦了一系列的職涯活動，以四大核心價值「分享、回饋、回顧、前瞻」， 來協助學員在不同的產業與職務能有更深入的了解，盡情探索各種未來方向，並成為更具有競爭力的市場人才，以此籌畫了各類型職涯活動！',
    hint: '提供多元的職場體驗機會，幫助學員探索職涯方向與興趣； 提升職場軟硬實力，並增進跨屆交流。',
    content:
      '由資種的學長姐開了各種領域的職缺機會，包含公司實習與個人指導，以 Mentor 的角色帶領資種學員對該職位有更深一層的認識、體驗與了解。 在為期 3 個月的職涯體驗中，除了專注於職務工作外，學員也與 Mentors 之間有許多深度的交流。還沒看過心得嗎？趕快去「職涯體驗」看吧！',
  },
  [Project.recruit]: {
    projectDescription:
      '透過學員共同合作的方式，從中學習團隊合作，增進學員進職場前的挫折容忍力與職場軟實力，創造屬於資種 20 th 的難忘回憶。 透過完成下一屆的資訊種子培訓計畫的招生，傳遞資訊種子理念及內容給大二至碩一的學生，使其認識資訊種子，並使符合資種價值的學生報名參加。',
    hint: '合作、分享與傳承，延續資種核心價值。',
    content:
      '學員透過選擇自己適合的職務，執行如行銷布局、活動規劃、網頁架構、美編設計的工作，讓大二至碩一有興趣加入資種的學生，得以了解資訊種子培訓計畫是一個能讓他們培養實戰力、簡報力、職場就業力、拓展人脈並積極尋找自己生涯方向的地方。 藉此傳遞資訊種子的價值。邀請對資種有興趣的同學們，歡迎加入資訊種子第十九屆，成為資種大家庭的成員！',
    imagePath: '/images/projects/pics/recruit_banner.svg',
  },
};
