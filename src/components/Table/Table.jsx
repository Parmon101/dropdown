import React from 'react';
import styles from './table.module.css';
import { Checkbox } from '../Checkbox';
import { Search } from '../Search/Search';

export const Table = ({ data, setData }) => {
    const [filterData, setFilterData] = React.useState(data);

    const handleSearch = (event) => {
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
                {filterData.map((el, idx) => (
                    <div key={el.id} className={styles.wrap}>
                        <div className={styles.split}>
                            <div className={styles.split2}>
                                <img src={Object.values(data[idx].img)} alt="lang" />
                                <div className={styles.name}>{el.name}</div>
                            </div>
                            <div>
                                <Checkbox data={el} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
