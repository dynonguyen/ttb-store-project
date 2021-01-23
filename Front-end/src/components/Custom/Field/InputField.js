import { Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  size: 'large',
  suffix: null,
  autocomplete: 'on',
  autofocus: false,
  maxLength: 1000,
};

function InputField(props) {
  const {
    field,
    form,
    type,
    placeholder,
    size,
    suffix,
    className,
    autocomplete,
    autofocus,
    ref,
    maxLength,
    ...rest
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  //Input or Input.Password
  const InputOption = type === 'password' ? Input.Password : Input;
  return (
    <>
      <InputOption
        ref={ref}
        className={showError ? className + ' error-input' : className}
        name={name}
        {...field}
        {...rest}
        placeholder={placeholder}
        size={size}
        suffix={suffix}
        autoComplete={autocomplete}
        maxLength={maxLength}
        autoFocus={autofocus}
      />
      {showError && <div className="show-error-input">{errors[name]}</div>}
    </>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  suffix: PropTypes.object,
  autocomplete: PropTypes.string,
  autofocus: PropTypes.bool,
  ref: PropTypes.any,
  maxLength: PropTypes.number,
};

export default InputField;
