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

const data = [
    { id: 1, name: 'Русский', img: { rus }, check: true },
    { id: 2, name: 'Английский', img: { en }, check: true },
    { id: 3, name: 'Испанский', img: { spain }, check: false },
    { id: 4, name: 'Немецкий', img: { germany }, check: false },
    { id: 5, name: 'Итальянский', img: { italy }, check: false },
    { id: 6, name: 'Польский', img: { poland }, check: false },
];

export const Dropdown = () => {
    const [arr, setArr] = React.useState(data);
    const [isActive, setIsActive] = React.useState(true);

    const openSelect = () => {
        return !setIsActive(!isActive);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.select}>
                    <Select onChange={openSelect} data={arr} setData={setArr} />
                </div>
                {isActive && (
                    <div className={styles.menu}>
                        <Table data={arr} setData={setArr} />
                    </div>
                )}
            </div>
        </>
    );
};
