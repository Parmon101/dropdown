import React from 'react';
import styles from './select.module.css';
import iClose from '../../assets/icon/close.svg';

export const Select = ({ onChange, data, setData }) => {
    const filter = data.filter((el) => el.check);
    return (
        <div onClickCapture={onChange} className={styles.container}>
            {filter.map((select) => {
                return (
                    <div key={select.id} className={styles.select}>
                        <span>{select.name}</span>
                        <img src={iClose}></img>
                    </div>
                );
            })}
        </div>
    );
};
