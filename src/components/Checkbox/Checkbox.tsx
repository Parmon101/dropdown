import React from 'react';
import { CheckboxType } from '../types/CheckboxType';
import styles from './checkbox.module.css';

export const Checkbox: React.FC<CheckboxType> = ({ data, onChange }) => {
    const changeCheck: React.ChangeEventHandler<HTMLInputElement> = () => {
        onChange(data.id);
    };

    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={data.check} onChange={changeCheck} />
            </label>
        </div>
    );
};
