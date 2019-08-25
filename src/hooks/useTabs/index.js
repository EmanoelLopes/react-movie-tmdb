import { useState } from 'react';

function useTabs () {
  const [activeTab, setActiveTab] = useState(0);

  const toggleActiveTab = tabIndex => {
    setActiveTab(tabIndex);
  };

  return [activeTab, toggleActiveTab];
}

export default useTabs;
