import { FC } from 'react';
import Image from 'next/image';

import { EMAIL, NEW_SESSION } from 'util/const';
import { Info } from 'util/form';

import Button from 'components/atoms/Button';

import styles from './PaymentStep.module.scss';

type PaymentStepProps = {
  data: Info;
};

const PaymentStep: FC<PaymentStepProps> = ({ data }) => {
  console.log(data.nickname);
  return (
    <>
      <div>
        <h3 className={styles.title}>資料確認</h3>
        <p>
          您已成功繳交第 {NEW_SESSION} 屆資訊種子培訓計畫的書審資料，請至個人信箱查看報名成功信。
          （＊若是不在收件匣，請至垃圾郵件查看。）
        </p>
      </div>
      <div className={styles.divisionLine} />
      <div>
        <h3 className={styles.title}>完成繳費</h3>
        <p>
          完成資料填寫後，請至貝殼集器繳交 100 元報名費 繳交完畢後預計於三個工作天內收到貝殼集器回覆
          若三天內未收到回覆（請記得檢查垃圾信件），請來信至 {EMAIL} 詢問
        </p>
      </div>
      <div className={styles.img}>
        <Image src={'/images/apply/pics/backme.png'} alt="backme" layout="fill" />
      </div>
      <Button>
        <a
          href={`https://itseed20.backme.tw/checkout/2899/24205?locale=zh-TW&transaction[recipient_attributes][name]=${data.nickname}&intl_cellphone_recipient=${data.phone}&transaction[recipient_attributes][contact_email]=${data.email}&transaction[recipient_attributes]&transaction[recipient_attributes][contact_email_confirm]=${data.email}&transaction[recipient_attributes][recipient_subdivision]=TPE&transaction[recipient_attributes][recipient_cityarea]=信義區&transaction[recipient_attributes][recipient_postal_code]=110&transaction[recipient_attributes][recipient_address]=忠孝東路四段516號2樓`}
          target="_blank"
          rel="noreferrer"
        >
          前往繳費
        </a>
      </Button>
    </>
  );
};

export default PaymentStep;
