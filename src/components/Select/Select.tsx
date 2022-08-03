import React from 'react';
import styles from './select.module.css';
import iClose from '../../assets/icon/close.svg';
import iArrow from '../../assets/icon/arrow.svg';
import { SelectType } from '../types/SelectType';

export const Select: React.FC<SelectType> = ({ showSelect, data, log, toogle, isActive }) => {
    const filter = data.filter((el) => el.check);

    const changeCheck: React.MouseEventHandler<HTMLInputElement> = (el) => {
        const numId = Number(el.currentTarget.id);
        toogle(numId);
    };
    return (
        <>
            <div className={styles.label}>Язык</div>
            <div>
                <div onClick={showSelect} className={styles.select}>
                    <div className={styles.table}>
                        {filter.map((select) => {
                            return (
                                <div key={select.id} className={styles.tag} onClick={log}>
                                    <span>{select.name}</span>
                                    <div onClick={changeCheck} id={`${select.id}`}>
                                        <img src={iClose} alt="-"></img>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.iArrow}>
                        <img
                            className={isActive ? styles.iShow : styles.iHide}
                            src={iArrow}
                            alt="reverse"></img>
                    </div>
                </div>
            </div>
        </>
    );
};
