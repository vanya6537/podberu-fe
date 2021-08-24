import { useState } from 'react';
import styled from 'styled-components';
import { Button as BButton } from 'react-bootstrap';
import { ButtonGroup as MButtonGroup } from '@material-ui/core';
import Loader from './Loader';
import Icon from './Icon';

const sizes: any = {
  lg: 40,
  md: 44,
  sm: 26,
  default: 44,
};

const font_sizes: any = {
  lg: 36,
  hmd: 24,
  md: 18,
  sm: 11,
  default: 18,
};

const StyledButton = styled.div`
  ${({ center }: any) => (center ? `display: flex; justify-content: center;` : '')};

  button {
    color: #ffffff;
    font-weight: 500;
    font-size: ${(props: any) => `${font_sizes[props.size] || font_sizes.default}px`};
    margin: ${(props: any) => props.margin};
    padding: ${(props: any) => props.padding || '0'};
    height: ${(props: any) => `${sizes[props.size] || sizes.default}px`};
    line-height: ${(props: any) => `${sizes[props.size] || sizes.default}px`};
    width: ${({ width }: any) =>
      width ? (typeof width === 'string' ? width : `${width}px`) : 'auto'};
    border-radius: ${(props: any) =>
      props.radius === 0 ? '0px' : `${(sizes[props.size] || sizes.default) / 2}px`};
    border: none;
  }

  button.primary {
    background: #4185e9;
  }

  button.green {
    background: #07c47b;
  }

  button.purple {
    background: #7f4bf9;
  }

  button.orange {
    background: #e9a541;
  }

  button.secondary {
    background: #2758a2;
  }

  button.outline {
    background: #ffffff;
    border: 1px solid #2758a2;
    color: #2758a2;

    &.green {
      border: 1px solid #07c47b;
      color: #07c47b;
    }

    &.purple {
      border: 1px solid #7f4bf9;
      color: #7f4bf9;
    }

    &.orange {
      border: 1px solid #e9a541;
      color: #e9a541;
    }
  }

  button.round {
    border-radius: 16px;
  }
`;

const Button = ({
  type = 'button',
  group = 'primary',
  icon,
  value,
  children,
  size,
  width,
  margin = [],
  padding = [],
  submit = false,
  center,
  loading,
  disabled,
  radius,
  style,
  ...rest
}: any) => {
  return (
    <StyledButton
      {...{
        size,
        width,
        center,
        radius,
        margin: margin.length > 0 && `${margin.join('px ')}px;`,
        padding: padding.length > 0 ? `${padding.join('px ')}px;` : '0 44px',
      }}
      style={style}
    >
      <BButton type={type} className={group} disabled={loading || disabled} {...rest}>
        {icon && <Icon name={icon} style={{ fontSize: 16, marginRight: 5 }} width={14} />}
        {!loading && (value || children)}
        {loading && <Loader color="white" />}
      </BButton>
    </StyledButton>
  );
};

const StyledButtonGroup = styled.div`
  margin-bottom: 20px;

  > div {
    width: 100%;
    border: 1px solid #4185e9;

    > div {
      flex: 1;
    }
  }

  button:not(.active) {
    color: #222222;
  }
`;

export const ButtonGroup = ({ defaultActive = 0, options = [] }: any) => {
  const [active, setActive] = useState(defaultActive);

  const handleClick = (index: number, onClick: any) => {
    setActive(index);

    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButtonGroup>
      <MButtonGroup>
        {options.map(({ value, onClick, ...r }: any, index: number) => (
          <Button
            value={value}
            {...r}
            onClick={() => handleClick(index, onClick)}
            className={active === index ? 'active primary' : ''}
          />
        ))}
      </MButtonGroup>
    </StyledButtonGroup>
  );
};

export default Button;
