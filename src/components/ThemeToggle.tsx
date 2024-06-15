import React, { useState } from "react";

const ThemeToggle: React.FC<{ toggleTheme: () => void }> = ({
    toggleTheme,
}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleChange = () => {
        setIsChecked((prev) => !prev);
        toggleTheme(); 
    };

    return (
        <div className="fixed top-10 right-10">
            <label className="flex items-center cursor-pointer">
                <div className="relative" onChange={handleToggleChange}>
                    <img src="./themebtn.png" className="w-8 hover:border rounded-full"/>
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                    />
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
