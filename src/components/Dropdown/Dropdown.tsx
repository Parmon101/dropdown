import React from 'react';
import { Table } from '../Table';
import styles from './dropdown.module.css';

import rus from '../../assets/lang/rus.svg';
import en from '../../assets/lang/en.svg';
import germany from '../../assets/lang/germany.svg';
import poland from '../../assets/lang/poland.svg';
import italy from '../../assets/lang/italy.svg';
import spain from '../../assets/lang/spain.svg';
import { Select } from '../Select/Select';
import { DataType } from '../types/DataType';

const data = [
    { id: 1, name: 'Русский', img: { rus }, check: false },
    { id: 2, name: 'Английский', img: { en }, check: false },
    { id: 3, name: 'Испанский', img: { spain }, check: true },
    { id: 4, name: 'Немецкий', img: { germany }, check: true },
    { id: 5, name: 'Итальянский', img: { italy }, check: false },
    { id: 6, name: 'Польский', img: { poland }, check: false },
];

export const Dropdown: React.FC<DataType> = () => {
    const [arr, setArr] = React.useState(data);
    const [isActive, setIsActive] = React.useState(true);

    const [isShowLang, _setIsShowLang] = React.useState(true);

    const [isMulty, _setIsMulty] = React.useState(true);
    const [oneItem, setOneItem] = React.useState({});

    const toogle = (el: number) => {
        const newContent = [...arr];
        newContent[el].check = !newContent[el].check;
        setArr(newContent);
    };

    const log = (el: React.FormEvent<HTMLElement>) => {
        el.stopPropagation();
    };

    const showSelect = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        return setIsActive(!isActive);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.select}>
                    <Select showSelect={showSelect} data={arr} log={log} toogle={toogle} />
                </div>
                {isActive && (
                    <div className={styles.menu}>
                        <Table data={arr} onChange={toogle} showLang={isShowLang} />
                    </div>
                )}
            </div>
        </>
    );
};
