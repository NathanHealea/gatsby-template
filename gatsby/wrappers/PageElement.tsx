// --- Imports --- //
import MainLayout from '../../src/layouts/MainLayout/MainLayout';
import React, { FC } from 'react';



const PageElement = ({element, props}) => {

  return <MainLayout {...props}>{element}</MainLayout>
};

// Default Return
export default PageElement;
