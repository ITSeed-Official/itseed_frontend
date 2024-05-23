// 此檔案儲存全站通用的常數
import { FAQ } from 'util/hooks/swr/useFAQs';
import { Meta } from 'components/atoms/PageMeta/PageMeta';

export const DEFAULT_META: Meta = {
  title: '資訊種子培訓計畫',
  description:
    '資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。 透過執行 3 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯 方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。',
  og_title: '資訊種子培訓計畫',
  og_description:
    '資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。 透過執行 3 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯 方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。',
  og_url: 'https://www.itseed.tw/',
  og_image: '',
};

export const DEFAULT_FAQ: FAQ = {
  id: 0,
  question: '',
  answer: '',
};

export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_SESSION = 21;
export const NEW_SESSION = CURRENT_YEAR - 2002;
export const EMAIL = `itseed${NEW_SESSION}nd@gmail.com`;
// ISO 8601
export const START_TIME = process.env.START_TIME || `${CURRENT_YEAR.toString()}-05-23T16:00:00.000Z`;
// ISO 8601
export const END_TIME = process.env.END_TIME || `${CURRENT_YEAR.toString()}-06-30T15:59:59.999Z`;
export const FB_PAGE = 'https://www.facebook.com/iloveitseed';
export const IG_PAGE = 'https://www.instagram.com/_itseed/';

export const DOMAIN = process.env.NEXT_PUBLIC_API_ORIGIN;
export const API2_DOMAIN = process.env.NEXT_PUBLIC_API2_ORIGIN;
export const GOOGLE_LOGIN_LINK = `${process.env.NEXT_PUBLIC_API2_ORIGIN}/auth/google/redirect`;
export const DEFAULT_REVALIDATE = Number(process.env.DEFAULT_REVALIDATE) || 60;
export const DEV_MODE = process.env.DEV_MODE || 'DEV_MODE';
