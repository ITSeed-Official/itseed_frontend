export type Grade = {
  title: string;
  value: number;
  selected: boolean;
};

export type Referer = {
  title: string;
  value: string;
  selected: boolean;
};

export type Info = {
  nickname: string;
  avatar: string;
  gender: string;
  phone: string;
  school: string;
  department: string;
  grade: Grade[];
  recommender: string;
  referer: Referer[];
};
export type Survey = { number: number; answerNumber: number }[];
export type Answer = { number: number; answer: string }[];
export type Files = {
  resume: {
    file: File | null;
    path: string;
    name: string;
  };
  certification: {
    file: File | null;
    path: string;
    name: string;
  };
};

export type FileType = 'resume' | 'certification';

export type FormDataType = {
  info: Info;
  survey: Survey;
  answer: Answer;
  files: Files;
};

export const INITIAL_DATA: FormDataType = {
  info: {
    // optional
    nickname: '',
    avatar: '',
    gender: '',
    phone: '',
    school: '',
    department: '',
    grade: [
      { title: '大一', value: 1, selected: false },
      { title: '大二', value: 2, selected: false },
      { title: '大三', value: 3, selected: true },
      { title: '大四', value: 4, selected: false },
      { title: '大五', value: 5, selected: false },
      { title: '碩一', value: 6, selected: false },
    ],
    recommender: '',
    referer: [
      { title: '海報', value: 'poster', selected: false },
      { title: '說明會', value: 'conf', selected: false },
    ],
  },
  survey: [
    // optional
    {
      number: 1,
      answerNumber: 1,
    },
  ],
  answer: [
    {
      number: 1,
      answer: '第一題的回答',
    },
    {
      number: 2,
      answer: '第二題的回答',
    },
    {
      number: 3,
      answer: '第三題的回答',
    },
    {
      number: 4,
      answer: '第四題的回答',
    },
    {
      number: 5,
      answer: '第五題的回答',
    },
    {
      number: 6,
      answer: '第六題的回答',
    },
  ],
  files: {
    // optional
    resume: {
      file: null,
      path: '/12312',
      name: '',
    },
    certification: {
      file: null,
      path: '/12312',
      name: '',
    },
  },
};

export const formValidation = (data: FormDataType) => {};
