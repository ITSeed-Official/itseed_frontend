import { isValidPhoneNumber } from 'libphonenumber-js';

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
  nickname: string | undefined;
  avatar: string;
  gender: string;
  phone: string;
  school: string;
  department: string;
  grade: Grade[];
  recommender: string;
  referer: Referer[];
  step: number;
  email: string;
};

export type Survey = {
  title: string;
  number: number;
  options: [
    {
      number: number;
      description: string;
    }
  ];
  answer: number;
}[];

export type Answer = { title: string; number: number; answer: string; limit: number }[];

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

export const stepMap = ['DISC', '基本資料', '書審問題', '檔案上傳', '前往繳費'];

export const INITIAL_DATA: FormDataType = {
  info: {
    // optional
    nickname: undefined,
    avatar: '',
    gender: '',
    phone: '',
    school: '',
    department: '',
    email: '',
    grade: [
      { title: '大一', value: 1, selected: false },
      { title: '大二', value: 2, selected: false },
      { title: '大三', value: 3, selected: false },
      { title: '大四', value: 4, selected: false },
      { title: '大五', value: 5, selected: false },
      { title: '碩一', value: 6, selected: false },
    ],
    recommender: '',
    referer: [
      { title: '海報', value: 'poster', selected: false },
      { title: '說明會', value: 'conf', selected: false },
    ],
    step: 0,
  },
  survey: [
    // optional
    {
      title: '請選擇符合您的敘述',
      number: 1,
      options: [
        {
          number: 1,
          description: '',
        },
      ],
      answer: 1,
    },
  ],
  answer: [
    {
      title: '',
      number: 1,
      answer: '第一題的回答',
      limit: 300,
    },
    {
      title: '',
      number: 2,
      answer: '第二題的回答',
      limit: 300,
    },
    {
      title: '',
      number: 3,
      answer: '第三題的回答',
      limit: 300,
    },
    {
      title: '',
      number: 4,
      answer: '第四題的回答',
      limit: 300,
    },
    {
      title: '',
      number: 5,
      answer: '第五題的回答',
      limit: 300,
    },
    {
      title: '',
      number: 6,
      answer: '第六題的回答',
      limit: 300,
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

export const formValidation = (data: FormDataType) => {
  const isInfoValid =
    Object.entries(data.info).find(([key, value]) => {
      console.log(key, value);
      // 非必填
      if (key === 'recommender' || key === 'referer' || key === 'city') return false;

      // 是 null 就一定不給過
      if (value === null) return true;

      if (key === 'grade') {
        const grades = value as Grade[];
        return (
          grades.find(({ selected }) => {
            return selected === true;
          }) === undefined
        );
      }

      if (key === 'phone') {
        return !isValidPhoneNumber(value as string, 'TW');
      }

      return value === '';
    }) === undefined;

  const isAnswerValid =
    Object.values(data.answer).find(({ answer }) => {
      return answer === '';
    }) === undefined;

  const isFilesValid =
    Object.values(data.files).find(({ name, path }) => {
      return name === null || path === null;
    }) === undefined && Object.keys(data.files).length > 0;

  return [isInfoValid, isAnswerValid, isFilesValid];
};
