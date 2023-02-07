import { FC, useState, useRef } from 'react';
import classnames from 'classnames';

import { useOnClickOutside } from 'util/hooks/useOnclickOutside';

import styles from './DropdownInput.module.scss';

type DropdownInputProps = {
  className?: string;
  options: string[];
  index: number;
  onClick: (index: number) => void;
};

const DropdownInput: FC<DropdownInputProps> = ({ className = '', options, index, onClick }) => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setIsSelecting(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      role="button"
      className={classnames(styles.dropdownInput, isSelecting ? styles.focus : styles.default, className)}
      onClick={() => setIsSelecting((v) => !v)}
    >
      <p className={styles.value}>{index >= 0 ? options[index] : '請選擇年級'}</p>
      <div className={classnames(styles.options, isSelecting && styles.isSelecting)}>
        {options.map((option, index) => (
          <div key={option} className={styles.option} role="button" onClick={() => onClick(index)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownInput;
