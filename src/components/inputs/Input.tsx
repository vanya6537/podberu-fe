import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import {
  TextField,
  Select as MSelect,
  FormControl,
  MenuItem,
  InputLabel,
  IconButton,
  InputAdornment,
  Checkbox as MCheckbox,
  FormHelperText,
  FormControlLabel,
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@material-ui/icons';
import { validator } from '../../utilities/helper';

const StyledInput = styled.div`
  padding-bottom: 24px;
  font-weight: 300;
  font-size: 24px;

  label {
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding-left: 3px;
    background-color: #f2f2f2;
    cursor: pointer;
  }
  input::placeholder {
    font-size: 24px;
    line-height: 64px;
  }
  ul li {
    font-size: 14px;
    font-weight: 300;
  }

  input,
  select {
    height: 64px;
    font-size: 24px;
    line-height: 64px;
  }

  textarea {
  }

  input,
  select,
  textarea {
    border-radius: 10px;
    font-weight: 300;
    cursor: pointer;
  }

  fieldset {
    border: 2px solid #4185e9;
    border-radius: 10px;
  }

  > div {
    width: 100%;
  }

  .MuiSelect-select {
    box-sizing: border-box;
    height: 40px;

    &:focus {
      border-radius: 10px;
    }
  }

  .MuiOutlinedInput-multiline {
    height: auto !important;
  }

  .MuiFormControlLabel-root {
    align-items: flex-start;
    span {
      font-size: 18px;
    }
  }
  .MuiInputLabel-shrink {
    transform: translate(14px, -14px) scale(0.75) !important;
  }
  .MuiCheckbox-root {
    padding: 4px 0 0 0;
    margin-right: 8px;

    .MuiSvgIcon-root {
      color: #4185e9 !important;
    }
  }
  input[type='file'] {
    visibility: hidden;
  }
`;

const StyledHint = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-size: 24px;
`;

const Input = ({
  label,
  placeholder = '',
  disabled = false,
  type = 'text',
  variant = 'outlined',
  hint,
  name,
  size = 'small',
  defaultValue = '',
  multiline = false,
  rows = 3,
  onChange,
  validate,
  ...rest
}: any) => {
  const [value, setValue]: any = useState(defaultValue);
  const [errors, setErrors]: any = useState(null);

  const handleOnChange = (e: SyntheticEvent) => {
    const { name: n, value: v }: any = e.target;
    setValue(v);

    let errs;
    if (validate) {
      errs = validate ? validator(v, validate) : null;
      setErrors(errs);
    }

    if (onChange) {
      onChange({ name: n, value: v, error: errs });
    }
  };

  return (
    <StyledInput>
      <TextField
        size={size}
        name={name}
        defaultValue={defaultValue}
        label={label}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        variant={variant}
        aria-label={label}
        aria-describedby={label}
        multiline={multiline}
        rows={rows}
        value={value}
        onChange={handleOnChange}
        onBlur={validate ? handleOnChange : null}
        error={errors && errors.length > 0}
        helperText={errors && errors.length > 0 ? errors[0] : ''}
        required={(validate || '').indexOf('required') !== -1}
        {...rest}
      />
      {hint && <StyledHint>{hint}</StyledHint>}
    </StyledInput>
  );
};

const PasswordInput = ({
  label,
  placeholder = '',
  disabled = false,
  variant = 'outlined',
  size = 'small',
  hint,
  name,
  defaultValue = '',
  onChange,
  validate,
  ...rest
}: any) => {
  const [value, setValue]: any = useState(defaultValue);
  const [errors, setErrors]: any = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e: SyntheticEvent) => {
    const { name: n, value: v }: any = e.target;
    setValue(v);

    let errs;
    if (validate) {
      errs = validate ? validator(v, validate) : null;
      setErrors(errs);
    }

    if (onChange) {
      onChange({ name: n, value: v, error: errs });
    }
  };

  const onShowPassword = () => {
    setShowPassword((t) => !t);
  };

  return (
    <StyledInput>
      <TextField
        name={name}
        defaultValue={defaultValue}
        label={label}
        size={size}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder || label}
        disabled={disabled}
        variant={variant}
        aria-label={label}
        aria-describedby={label}
        value={value}
        onChange={handleOnChange}
        onBlur={validate ? handleOnChange : null}
        error={errors && errors.length > 0}
        helperText={errors && errors.length > 0 ? errors[0] : ''}
        required={!!validate}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
      {hint && <StyledHint>{hint}</StyledHint>}
    </StyledInput>
  );
};

const Select = ({
  label,
  placeholder = '',
  disabled = false,
  variant = 'outlined',
  hint,
  value = '',
  size = 'small',
  name,
  validate,
  onChange,
  defaultValue,
  options = [
    { value: 'a', label: 'a' },
    { value: 'b', label: 'b' },
    { value: 'c', label: 'c' },
  ],
  ...rest
}: any) => {
  const [errors, setErrors]: any = useState([]);
  const [data, setData]: any = useState(value);

  const handleValidation = (e: SyntheticEvent) => {
    const { value: v }: any = e.target;
    setErrors(validate ? validator(v, validate) : []);
  };

  const handleOnChange = (e: SyntheticEvent) => {
    const { name: n, value: v }: any = e.target;
    setData(v);
    if (onChange) {
      onChange({ name: n, value: v });
    }
  };

  return (
    <StyledInput>
      <FormControl
        defaultValue={defaultValue}
        variant={variant}
        aria-label={label}
        aria-describedby={label}
        size={size}
      >
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <MSelect
          name={name}
          placeholder={placeholder ?? label}
          disabled={disabled}
          id={name}
          label={label}
          value={data}
          onChange={handleOnChange}
          onBlur={handleValidation}
          error={errors.length > 0}
          // helperText={errors.length > 0 ? errors[0] : ''}
          required={!!validate}
          {...rest}
        >
          {options.map((item: any, index: number) => (
            <MenuItem value={item.value} key={index}>
              {item.label}
            </MenuItem>
          ))}
        </MSelect>
        {errors.length > 0 && (
          <FormHelperText style={{ color: '#f44336' }}>
            {errors.length > 0 ? errors[0] : ''}
          </FormHelperText>
        )}
      </FormControl>
      {hint && <StyledHint>{hint}</StyledHint>}
    </StyledInput>
  );
};

const Checkbox = ({
  label,
  disabled = false,
  variant = 'outlined',
  hint,
  value,
  name,
  defaultValue,
  onChange,
  validate,
  ...rest
}: any) => {
  const handleOnChange = (e: SyntheticEvent) => {
    const { name: n, checked: v }: any = e.target;
    if (onChange) {
      onChange({ name: n, value: v });
    }
  };

  return (
    <StyledInput style={{ padding: 0 }}>
      <FormControlLabel
        control={
          <MCheckbox
            color="primary"
            checked={value}
            onChange={handleOnChange}
            name={name}
            icon={<RadioButtonUnchecked />}
            checkedIcon={<RadioButtonChecked />}
            required={!!validate}
          />
        }
        disabled={disabled}
        label={label}
        aria-label={label}
        aria-describedby={label}
        style={{ margin: 0 }}
      />
    </StyledInput>
  );
};

export { Input, PasswordInput, Select, Checkbox };
