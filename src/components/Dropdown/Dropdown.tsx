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
    { id: 1, name: 'Русский', img: rus, check: false },
    { id: 2, name: 'Английский', img: en, check: false },
    { id: 3, name: 'Испанский', img: spain, check: false },
    { id: 4, name: 'Немецкий', img: germany, check: false },
    { id: 5, name: 'Итальянский', img: italy, check: false },
    { id: 6, name: 'Польский', img: poland, check: false },
];

export const Dropdown: React.FC<DataType> = () => {
    const [arr, setArr] = React.useState(data);
    const [isActive, setIsActive] = React.useState(false);

    const [isShowLang, _setIsShowLang] = React.useState(true);
    const [isSearch, _setIsSearch] = React.useState(true);
    const [isMulty, _setIsMulty] = React.useState(true);
    const [showCheck, setSowCheck] = React.useState(true);

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

    React.useEffect(() => {
        if (isMulty) {
            const isOneItem = data.filter((element) => element.check);
            isOneItem.length < 1 ? setSowCheck(true) : setSowCheck(false);
        }
    });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.select}>
                    <Select showSelect={showSelect} data={arr} log={log} toogle={toogle} />
                </div>
                {isActive && (
                    <div className={styles.menu}>
                        <Table
                            data={arr}
                            onChange={toogle}
                            showLang={isShowLang}
                            showCheck={showCheck}
                            showSearch={isSearch}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
