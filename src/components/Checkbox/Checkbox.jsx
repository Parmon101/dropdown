import React from 'react';

export const Checkbox = ({ label, data }) => {
    const [isChecked, setIsChecked] = React.useState(data.check);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};
