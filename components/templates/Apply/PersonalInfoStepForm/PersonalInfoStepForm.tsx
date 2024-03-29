import { FC, ChangeEvent } from 'react';
import classnames from 'classnames';

import { Info } from 'util/form';

import DropdownInput from 'components/atoms/DropdownInput';

import styles from './PersonalInfoStepForm.module.scss';

type PersonalInfoStepFormProps = {
  data: Info;
  updateFields: Function;
};

const PersonalInfoStepForm: FC<PersonalInfoStepFormProps> = ({ data, updateFields }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    let value = e.target.value;

    if (fieldName === 'referer') {
      const referer = [...data.referer];
      const index = referer.findIndex((v) => {
        return v.value === value;
      });
      referer[index].selected = !referer[index].selected;

      updateFields({
        info: {
          ...data,
          referer,
        },
      });

      return;
    }

    if (fieldName === 'phone') {
      value = value.replace(/[^0-9]/g, '');
    }

    updateFields({
      info: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const grades = data.grade.map(({ title }) => title);

  return (
    <>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="nickname" className={styles.fieldName}>
            姓名
          </label>
          <input
            value={data.nickname || ''}
            id="nickname"
            placeholder="請輸入您的姓名"
            required
            onChange={(e) => onChangeHandler(e, 'nickname')}
          ></input>
        </div>
        <div className={styles.field}>
          <p className={styles.fieldName}>性別</p>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={data.gender === 'female'}
              onChange={(e) => onChangeHandler(e, 'gender')}
              required
            />
            女性
          </label>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={data.gender === 'male'}
              onChange={(e) => onChangeHandler(e, 'gender')}
            />
            男性
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={data.gender === 'other'}
              onChange={(e) => onChangeHandler(e, 'gender')}
            />
            其他
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="school" className={styles.fieldName}>
            就讀學校
          </label>
          <input
            id="school"
            value={data.school || ''}
            placeholder="例：台灣大學"
            onChange={(e) => onChangeHandler(e, 'school')}
            required
          ></input>
        </div>
        <div className={styles.field}>
          <label htmlFor="department" className={styles.fieldName}>
            科系
          </label>
          <input
            id="department"
            value={data.department || ''}
            placeholder="例：資訊管理學系"
            onChange={(e) => onChangeHandler(e, 'department')}
            required
          ></input>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="grade" className={styles.fieldName}>
            年級（請填入您目前的年級）
          </label>
          <DropdownInput
            className={styles.dropdown}
            options={grades}
            index={data.grade.findIndex(({ selected }) => selected === true)}
            onClick={(index: number) => {
              let gradeUpdated = data.grade.map((item, i) => {
                if (i === index) {
                  return { ...item, selected: true };
                }
                return { ...item, selected: false };
              });
              updateFields({
                info: {
                  ...data,
                  grade: gradeUpdated,
                },
              });
            }}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.fieldName}>
            聯絡電話
          </label>
          <input
            id="phone"
            value={data.phone || ''}
            placeholder="例：091234567"
            onChange={(e) => onChangeHandler(e, 'phone')}
            required
          ></input>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="recommender" className={classnames(styles.fieldName, styles.notRequired)}>
            推薦人
          </label>
          <input
            id="recommender"
            value={data.recommender || ''}
            onChange={(e) => onChangeHandler(e, 'recommender')}
          ></input>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoStepForm;
