'use client'
import React, { ReactNode } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <>{children}</>;
};

export default Tab;
