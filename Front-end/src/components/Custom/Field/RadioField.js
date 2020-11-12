import { Radio } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

Radio.defaultProps = {
  options: [],
};

function RadioField(props) {
  const { field, form, className, options } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleOnChange = (data) => {
    const { value } = data.target;
    form.setFieldValue(name, value);
  };

  return (
    <Radio.Group
      className={showError ? className + ' error-input' : className}
      name={name}
      value={value}
      onChange={handleOnChange}>
      {options &&
        options.map((option, index) => (
          <Radio key={index} value={option.value}>
            {option.label}
          </Radio>
        ))}
    </Radio.Group>
  );
}

RadioField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  options: PropTypes.array,
};

export default RadioField;
