import React from 'react';
import { Table } from '../Table';
import styles from './dropdown.module.css';

import { Select } from '../Select/Select';
import { DataType } from '../types/DataType';
import { DropdownType } from '../types/DropdownType';

export const Dropdown: React.FC<DataType & DropdownType> = ({
    isShowLang,
    isSearch,
    isMulty,
    data,
}) => {
    const [arr, setArr] = React.useState(data);
    const [isActive, setIsActive] = React.useState(false);

    const [showCheck, setSowCheck] = React.useState(true);

    React.useEffect(() => {
        const newContent = [...arr];
        setArr(newContent);
    }, []);

    const toogle = (el: number) => {
        const newContent = arr.map((objLang) => {
            const changeCheck = { ...objLang };

            if (objLang.id == el) {
                changeCheck.check = !changeCheck.check;
            }

            return changeCheck;
        });

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
        if (!isMulty) {
            const isOneItem = data.filter((element) => element.check);
            setSowCheck(isOneItem.length < 1);
        }
    }, [isMulty]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.select}>
                    <Select
                        showSelect={showSelect}
                        data={arr}
                        log={log}
                        toogle={toogle}
                        isActive={isActive}
                    />
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
