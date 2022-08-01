import styles from './search.module.css';
import isearch from '../../assets/icon/search.svg';

type SearchType = {
    onChange: (index: React.InputHTMLAttributes<HTMLInputElement>) => void;
};

export const Search: React.FC<SearchType> = ({ onChange }) => {
    return (
        <div className={styles.search}>
            <img className={styles.searchIcon} width="16" height="16" src={isearch} alt="logo" />
            <input
                className={styles.searchInput}
                type="Search"
                placeholder="Поиск"
                onChange={onChange}
            />
        </div>
    );
};