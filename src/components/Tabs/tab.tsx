'use client'
import React, { ReactNode } from 'react';

interface TabProps {
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
