import React from 'react';
import styles from './table.module.css';
import { Checkbox } from '../Checkbox';
import { Search } from '../Search/Search';
import { TableType } from '../types/TableType';

export const Table: React.FC<TableType> = ({ data, onChange, showLang, showCheck }) => {
    const [filterData, setFilterData] = React.useState(data);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = data.filter((data) => {
            return data.name.toLowerCase().search(value) != -1;
        });
        setFilterData(result);
    };

    return (
        <div>
            <div>
                <Search onChange={handleSearch} />
            </div>
            <div>
                {filterData.map((el) => {
                    return (
                        <div key={el.id} className={styles.wrap}>
                            <div className={styles.split}>
                                <div>
                                    {showLang && (
                                        <img height="24" width="24" src={el.img} alt="lang" />
                                    )}
                                    <div className={styles.name}>{el.name}</div>
                                </div>
                                <div>{showCheck && <Checkbox data={el} onChange={onChange} />}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
