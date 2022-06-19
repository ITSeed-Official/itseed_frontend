// 此檔案儲存全站通用的常數
import { FAQ } from 'util/hooks/swr/useFAQs';
import { Meta } from 'components/atoms/PageMeta/PageMeta';

export const DEFAULT_META: Meta = {
  title: '資訊種子培訓計畫',
  description:
    '資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。 透過執行 4 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯 方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。',
  og_title: '資訊種子培訓計畫',
  og_description:
    '資訊種子培訓計畫不同於大學一貫的授課方式，讓學員在實踐中學習。 透過執行 4 大專案，參與 10+ 堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯 方向，培養跨領域合作、解決問題的思維等職場必備的能力，成為能踏入職場的人才。',
  og_url: 'https://www.itseed.tw/',
  og_image: '',
};

export const DEFAULT_FAQ: FAQ = {
  id: 0,
  question: '',
  answer: '',
};

export const CURRENT_SESSION = 18;
export const domain = process.env.NEXT_PUBLIC_API_ORIGIN;
