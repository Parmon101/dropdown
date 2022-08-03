import { DataType } from './DataType';

export type TableType = {
    data: DataType[];
    onChange: (el: number) => void;
    showLang?: boolean;
    showCheck: boolean;
    showSearch: boolean;
};
