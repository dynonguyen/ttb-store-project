import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function DatePickerField(props) {
  const { field, form, className, placeholder, size } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleOnChange = (date, dateString) => {
    form.setFieldValue(name, dateString);
  };

  useEffect(() => {
    handleOnChange(new Date(), field.value);
    return () => {};
  }, []);

  return (
    <>
      <DatePicker
        className={showError ? className + ' error-input' : className}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        size={size}
      />
      {showError && <div className="show-error-input">{errors[name]}</div>}
    </>
  );
}

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

export default DatePickerField;
