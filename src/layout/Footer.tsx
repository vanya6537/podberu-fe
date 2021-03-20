import styled from 'styled-components';
import Icon from '../components/Icon';

const StyledFooter = styled.footer`
  background-color: #09244c;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  justify-content: space-between;
  color: #ffffff;

  .contact {
    display: flex;
    align-items: center;

    .phone {
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > span {
        font-size: 13px;

        &:last-child {
          padding-top: 2px;
          color: #fbfcfd;
          font-size: 9px;
          opacity: 0.6;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Icon name="logo" width={130} />
      <div className="contact">
        <Icon name="vk" width={24} />
        <Icon name="instagram" width={24} margin={[0, 12]} />
        <Icon name="facebook" width={24} />

        <div className="phone">
          <span>8 800 77 95 80</span>
          <span>Служба поддержки</span>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
