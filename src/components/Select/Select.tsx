import React from 'react';
import styles from './select.module.css';
import iClose from '../../assets/icon/close.svg';
import { DataType } from '../Dropdown/Dropdown';

type SelectType = {
    showSelect: (e: React.FormEvent<HTMLElement>) => void;
    data: DataType;
    log: (e: React.FormEvent<HTMLElement>) => void;
    toogle: (el: number) => void;
};

type OneType = {
    id: number;
    name: string;
    img: string;
    check: boolean;
};

export const Select: React.FC<SelectType> = ({ showSelect, data, log, toogle }) => {
    const filter = data.filter((el) => el.check);
    const [_selectId, setSelectId] = React.useState<DataType | OneType>(data);
    const [_toogleCheck, setToogleCheck] = React.useState({});

    const changeCheck: React.MouseEventHandler<HTMLInputElement> = (el) => {
        const numId = Number(el.currentTarget.id);
        setSelectId(data[numId - 1]);
        setToogleCheck((prev: boolean) => !prev);

        toogle(numId - 1);
    };
    return (
        <>
            <div className={styles.label}>Язык</div>
            <div onClick={showSelect} className={styles.select}>
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
        </>
    );
};
