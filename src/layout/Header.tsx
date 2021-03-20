import styled from 'styled-components';
import Icon from '../components/Icon';
import Button from '../components/Button';

const StyledHeader = styled.header`
  background-color: #09244c;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Icon name="logo" width={130} />
      <Button value="Оформить заявку" />
    </StyledHeader>
  );
};

export default Header;
