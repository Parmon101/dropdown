import React from 'react';
import { CheckboxType } from '../types/CheckboxType';
import styles from './checkbox.module.css';

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
