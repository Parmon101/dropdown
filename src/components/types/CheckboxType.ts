export type CheckboxType = {
    data: { id: number; name: string; img: object; check: boolean };
    onChange: (el: number) => void;
};
