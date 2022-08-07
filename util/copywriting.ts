// 此頁面管理全站共用的文案

import { Project, CareerCategory, AlumniCategory } from './enum';

type EnumKey = Project | CareerCategory | AlumniCategory;

type Copywriting = {
  [key in EnumKey]: string;
};

export const COPYWRITING: Copywriting = {
  [Project.ps]: 'PS 專案',
  [Project.career]: '職涯專案',
  [Project.recruit]: '招生專案',
  [Project.technical_media]: '科技媒體專案',
  [CareerCategory.company]: '公司實習',
  [CareerCategory.personalization]: '個人指導',
  [CareerCategory.interview]: '職涯訪談',
  [AlumniCategory.junior]: '學員怎麼看',
  [AlumniCategory.senior]: '學長姐怎麼看',
  [AlumniCategory.leader]: '領導者怎麼看',
};
