import styled from 'styled-components';
import Icon from '../components/Icon';
import Image from '../components/Image';
import AppStoreImage from '../assets/images/app-store.png';
import GooglePlayImage from '../assets/images/google-play.png';

const StyledFooter = styled.footer<{ type: number }>`
  background-color: #09244c;
  display: flex;
  align-items: center;
  padding: ${({ type }: any) => (type === 1 ? '20px' : '13px')} 20px;
  justify-content: space-between;
  color: #ffffff;

  .contact {
    display: flex;
    align-items: center;

    > span {
      font-size: 10px;
      margin: 0 10px;
    }

    .phone {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 13px;

      > span {
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

const Footer = ({ type = 1 }) => {
  return (
    <StyledFooter type={type}>
      {type === 1 && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Icon name="logo" width={130} />
            <div className="contact">
              <span>О проекте</span>
              <span>Контакты</span>
              <span>Для клиентов</span>
              <span>Партнёрская программа</span>
              <span>Наши вакансии</span>

              <div className="phone">
                <div>+7 800 222-22-22</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
            <div className="contact" style={{ alignItems: 'flex-end' }}>
              <span>Пользовательское соглашение</span>
              <span>Политика конфиденциальности</span>
            </div>
            <div className="contact">
              <Image src={AppStoreImage} name="App Store" width={90} margin={['auto', 10]} />
              <Image
                src={GooglePlayImage}
                name="Google Play"
                width={90}
                margin={['auto', 50, 'auto', 10]}
              />
              <Icon name="vk" width={24} />
              <Icon name="instagram" width={24} margin={[0, 12]} />
              <Icon name="facebook" width={24} />
            </div>
          </div>
        </div>
      )}
      {type === 2 && (
        <>
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
        </>
      )}
    </StyledFooter>
  );
};

export default Footer;
