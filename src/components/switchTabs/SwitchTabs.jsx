import { useState } from "react";
import "./switchTabsStyles.scss";

import PropTypes from "prop-types";

export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
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
        {data.map((tab, index) => (
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
  data: PropTypes.array.isRequired,
  onTabChange: PropTypes.func.isRequired,
};
