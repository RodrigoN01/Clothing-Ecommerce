import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './formInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label `}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
