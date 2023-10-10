// RadioTabs.tsx
import React, { useState } from "react";
import {
  radioTabsStyle,
  tabInputStyle,
  selectedTabStyle,
  tabLabelStyle,
} from "../styles";
import cx from "classnames";
import { SECTIONS } from "../helpers/const";

interface IRadioTabsProps {
  defaultType: string;
  onChange(val: string): void
}

export const RadioTabs: React.FC<IRadioTabsProps> = ({defaultType, onChange}: IRadioTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultType);


  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const section = event.target.id;
    setSelectedTab(section);
    onChange(section);
  };

  return (
    <div className={radioTabsStyle}>
      {SECTIONS.map((item) => {
        
        const selectedStyle = selectedTab === item ? selectedTabStyle: '';
        return(
        <span key={item}>
          <input
            type="radio"
            id={item}
            name={item}
            checked={selectedTab === item}
            onChange={handleTabChange}
            className={tabInputStyle}
          />
          <label
            htmlFor={item}
            className={cx(tabLabelStyle, selectedStyle)}
          >
            {item}
          </label>
        </span>
      )})}
    </div>
  );
};