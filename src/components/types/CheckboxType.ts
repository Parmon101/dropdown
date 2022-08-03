export type CheckboxType = {
    data: { id: number; name: string; img: string; check: boolean };
    onChange: (el: number) => void;
};
