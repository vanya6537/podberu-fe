import styled from 'styled-components';
import Icon from './Icon';

const StyledBack = styled.div.attrs((props) => ({ ...props }))`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  span {
    ${(props: any) => (props.lineHeight ? `line-height: ${props.lineHeight};` : '')}
  }
`;

const Back = ({ icon = 'caretleft', value = 'Назад', onClick, ...rest }: any) => {
  const goBack = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <StyledBack onClick={goBack} {...rest}>
      {icon && <Icon name={icon} width={8} margin={[0, 10, 0, 0]} />}
      {value && <span>{value}</span>}
    </StyledBack>
  );
};

export default Back;
