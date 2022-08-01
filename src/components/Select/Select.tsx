import React from 'react';
import styles from './select.module.css';
import iClose from '../../assets/icon/close.svg';

type SelectType = {
    onChange: (e: any) => void;
    data: { id: number; name: string; img: string; check: boolean }[];
    log: (e: any) => void;
};

export const Select: React.FC<SelectType> = ({ onChange, data, log }) => {
    const filter = data.filter((el: any) => el.check);
    return (
        <>
            <div className={styles.label}>Язык</div>
            <div onClick={onChange} className={styles.select}>
                {filter.map((select) => {
                    return (
                        <div key={select.id} className={styles.tag} onClick={log}>
                            <span>{select.name}</span>
                            <img src={iClose}></img>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
