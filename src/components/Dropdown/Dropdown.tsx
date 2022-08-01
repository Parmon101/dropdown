import React from 'react';
import { Table } from '../Table';
import styles from './dropdown.module.css';

// import rus from '../../assets/lang/rus.svg';
// import en from '../../assets/lang/en.svg';
// import germany from '../../assets/lang/germany.svg';
// import poland from '../../assets/lang/poland.svg';
// import italy from '../../assets/lang/italy.svg';
// import spain from '../../assets/lang/spain.svg';
import { Select } from '../Select/Select';

const data = [
    { id: 1, name: 'Русский', img: '../../assets/lang/rus.svg', check: false },
    { id: 2, name: 'Английский', img: '../../assets/lang/rus.svg', check: false },
    { id: 3, name: 'Испанский', img: '../../assets/lang/rus.svg', check: false },
    { id: 4, name: 'Немецкий', img: '../../assets/lang/rus.svg', check: false },
    { id: 5, name: 'Итальянский', img: '../../assets/lang/rus.svg', check: false },
    { id: 6, name: 'Польский', img: '../../assets/lang/rus.svg', check: false },
];

type DataType = {
    id: number;
    name: string;
    img: string;
    check: boolean;
};

export const Dropdown: React.FC<DataType> = () => {
    const [arr, setArr] = React.useState(data);
    const [selectArr, setSelectArr] = React.useState(arr);
    const [isActive, setIsActive] = React.useState(true);

    // const selectobj = [{ id: 0, name: '', img: '', check: false }];

    // const [isShowLang, setIsShowLang] = React.useState(true);
    // const [isMulty, setIsMulty] = React.useState(false);

    const toogle = (el: number) => {
        const newContent = [...arr];
        newContent[el].check = !newContent[el].check;
        setArr(newContent);
    };

    const log = (el: React.FormEvent<HTMLFormElement>) => {
        el.stopPropagation();
        console.log(el);
    };

    const openSelect = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return setIsActive(!isActive);
    };

    // const add = (el: any) => {
    //     const newContent = [...arr];
    //     newContent[1].check = !newContent[1].check;
    //     newContent[2].check = !newContent[2].check;
    //     setArr(newContent);
    // };

    // const del = (el) => {
    //     const newContent = [...arr];
    //     newContent[1].check = !newContent[1].check;
    //     setSelectArr(newContent);
    // };

    // const delet = (el) => {
    //     el.stopPropagation();

    //     const newContent = [...arr];
    //     newContent[el].check = !newContent[el].check;
    //     // setArr(newContent);
    //     // id.stopPropagation();
    //     setArr(arr.filter((obj) => (obj.check = !obj.check)));
    // };

    return (
        <>
            <div className={styles.container}>
                {/* <div onClick={add}>1</div> */}
                <div className={styles.select}>
                    <Select onChange={openSelect} data={arr} log={log} />
                </div>
                {/* <div onClick={(e) => delet(1)}>delete</div> */}
                {isActive && (
                    <div className={styles.menu}>
                        <Table
                            data={arr}
                            onChange={toogle}
                            // showLang={isShowLang}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
