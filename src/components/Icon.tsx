import styled from 'styled-components';
import * as icons from '../assets/icons';

const StyledIcon = styled.div.attrs((props) => ({ ...props }))`
  margin: ${(props: any) => props.margin};
  padding: ${(props: any) => props.padding};
  width: ${({ width }: any) => (width ? `${width}px` : '')};
  height: ${({ height }: any) => (height ? `${height}px` : '')};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    path {
      fill: ${(props) => props.color} !important;
    }
  }

  .logo svg {
    background: pink !important;
  }
`;

const Icon = ({
  name = '',
  margin = [],
  padding = [],
  color = '',
  size = 'sm',
  width,
  height,
  onClick,
  ...rest
}: any) => {
  return (
    <StyledIcon
      margin={margin.length > 0 && `${margin.join('px ')}px;`}
      padding={padding.length > 0 && `${padding.join('px ')}px;`}
      color={color}
      size={size}
      width={width}
      height={height}
      {...rest}
    >
      <div
        onClick={(e) => onClick && onClick(e)}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        <object
          type="image/svg+xml"
          data={(icons as any)[name.replace('-', '')]}
          className="logo"
          width={width || 'auto'}
          height={height || 'auto'}
        >
          {name}
        </object>
      </div>
    </StyledIcon>
  );
};

export default Icon;
