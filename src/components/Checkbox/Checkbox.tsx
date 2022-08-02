import React from 'react';
import styles from './checkbox.module.css';

type CheckboxType = {
    data: { id: number; name: string; img: string; check: boolean };
    onChange: (el: number) => void;
};

export const Checkbox: React.FC<CheckboxType> = ({ data, onChange }) => {
    const [_isChecked, setIsChecked] = React.useState(data.check);

    const changeCheck: React.ChangeEventHandler<HTMLInputElement> = () => {
        setIsChecked((prev: boolean) => !prev);
        onChange(data.id - 1);
    };

    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={data.check} onChange={changeCheck} />
            </label>
        </div>
    );
};
