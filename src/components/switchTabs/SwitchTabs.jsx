import { useState } from "react";
import "./switchTabsStyles.scss";

import PropTypes from "prop-types";

export const SwitchTabs = ({ dataTab, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  // console.log(selectedTab);

  const [left, setLeft] = useState(0);

  const handleActiveTab = (tab, index) => {
    setLeft(index * 100);

    setTimeout(() => {
      //movingBg
      setSelectedTab(index);
    }, 400);

    onTabChange(tab);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {dataTab?.map((tab, index) => (
          <span
            key={index}
            className="tabItem"
            onClick={() => handleActiveTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

SwitchTabs.propTypes = {
  dataTab: PropTypes.array,
  onTabChange: PropTypes.func.isRequired,
};
