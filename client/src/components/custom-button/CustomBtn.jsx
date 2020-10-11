import React from 'react';

import { CustomBtnContainer } from './customBtn.styles';

const CustomBtn = ({ children, ...props }) => (
  <CustomBtnContainer {...props}>{children}</CustomBtnContainer>
);

export default CustomBtn;
