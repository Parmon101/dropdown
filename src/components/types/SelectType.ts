import { DataType } from './DataType';

export type SelectType = {
    showSelect: (e: React.FormEvent<HTMLElement>) => void;
    data: DataType[];
    log: (e: React.FormEvent<HTMLElement>) => void;
    toogle: (el: number) => void;
    isActive: boolean;
};
