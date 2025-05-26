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
  return (
    <>
      <div>
        <h3 className={styles.title}>資料確認</h3>
        <p>
          您已成功繳交第 {NEW_SESSION} 屆資訊種子培訓計畫的書審資料，提醒您繳交報名費 100
          元後，才算完成報名程序，請儘速至貝殼集器繳交。
          <br />
          （＊報名成功信將於繳交報名費後寄出。）
        </p>
      </div>
      <div className={styles.divisionLine} />
      <div>
        <h3 className={styles.title}>完成繳費</h3>
        <p>
          完成資料填寫後，請至貝殼集器繳交 100 元報名費。繳交完畢後預計於三個工作天內收到貝殼集器回覆。
          <br />
          若三天內未收到回覆（請先檢查垃圾信件）請來信至 {EMAIL} 詢問。
        </p>
      </div>
      <div className={styles.img}>
        <Image src={'/images/apply/pics/backme.png'} alt="backme" layout="fill" />
      </div>
      <Button>
        <a
          href={`https://itseed23.backme.tw/checkout/3699/36496?locale=zh-TW&transaction[recipient_attributes][name]=${data.nickname}&intl_cellphone_recipient=${data.phone}&transaction[recipient_attributes][contact_email]=${data.email}&transaction[recipient_attributes]&transaction[recipient_attributes][contact_email_confirm]=${data.email}&transaction[recipient_attributes][recipient_subdivision]=TPE&transaction[recipient_attributes][recipient_cityarea]=信義區&transaction[recipient_attributes][recipient_postal_code]=110&transaction[recipient_attributes][recipient_address]=忠孝東路四段516號2樓`}
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
