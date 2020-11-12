import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

SelectField.defaultProps = {
  placeholder: '',
  size: 'large',
  options: [],
};

function SelectField(props) {
  const { field, form, className, placeholder, options, size } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  //override event onchange
  const handleOnChange = (value) => {
    const changeEvent = {
      target: {
        name,
        value,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <>
      <Select
        name={name}
        {...field}
        className={showError ? className + ' error-input' : className}
        placeholder={placeholder}
        size={size}
        onChange={handleOnChange}>
        {options &&
          options.map((option, index) => (
            <Select.Option key={index} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
      </Select>
    </>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  size: PropTypes.string,
};

export default SelectField;
