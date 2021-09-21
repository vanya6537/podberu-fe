import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Icon from '../components/Icon';
import Image from '../components/Image';
import AppStoreImage from '../assets/images/app-store.png';
import GooglePlayImage from '../assets/images/google-play.png';

const StyledFooter = styled.footer<{ type: number }>`
  background-color: #09244c;
  display: flex;
  align-items: center;
  padding: ${({ type }: any) => (type === 1 ? '48px' : '13px')} 24px;
  justify-content: space-between;
  color: #fbfcfd;

  .phone {
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
  }

  .social {
    display: flex;
    flex-direction: row;
  }

  .policy {
    text-align: start;
    font-size: 18px;
    color: rgba(251, 252, 253, 0.6);
    padding-right: 100px;
    letter-spacing: -0.24px;
  }

  .contact {
    display: flex;
    //align-items: center;
    color: #fbfcfd;

    align-items: flex-end;
    letter-spacing: -0.24px;
    white-space: pre;

    > a {
      font-size: 18px;
      margin: 0 12px;
      color: #fbfcfd;
    }
    > a:first-child {
      margin-left: 0;
    }

    > a:last-child {
      margin-right: 0;
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
          <Row>
            <Col>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingBottom: '28px',
                  }}
                >
                  <Icon name="logo" height={48} />
                  <div className="phone">
                    <div>+7 800 222-22-22</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
            <div className="contact">
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Партнёрская программа</a>
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Политика конфиденциальности</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
              <Image src={AppStoreImage} name="App Store" height={48} margin={[0, 24, 0, 0]} />
              <Image
                src={GooglePlayImage}
                name="Google Play"
                height={48}
                // margin={['auto', 50, 'auto', 10]}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36 }}>
            <div className="policy">
              <span>
                © 2021, ООО «ПОДБЕРУ.РУ». При использовании материалов гиперссылка на podberu.ru
                обязательна. <br />
                ИНН 9701182612, ОГРН 1217700379291. 105005, г. Москва, ул. Бауманская, д.7, стр.1,
                антресоль 2, помещение I, ком.17, офис Е5Ш
              </span>
            </div>
            <div className="social">
              <Icon name="vk" width={48} />
              <Icon name="instagram" width={48} margin={[0, 12]} />
              <Icon name="facebook" width={48} />
            </div>
          </div>
        </div>
      )}
      {type === 2 && (
        <>
          <Icon name="logo" height={48} />
          <div className="contact">
            <Icon name="vk" width={24} />
            <Icon name="instagram" width={24} margin={[0, 12]} />
            <Icon name="facebook" width={24} />

            <div className="phone">
              <span>8 800 77 95 80</span>
              <span>Служба поддержки</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36 }}>
            <div className="policy">
              <span>
                © 2021, ООО «ПОДБЕРУ.РУ». При использовании материалов гиперссылка на podberu.ru
                обязательна. ИНН 9701182612, ОГРН 1217700379291. 105005, г. Москва, ул. Бауманская,
                д.7, стр.1, антресоль 2, помещение I, ком.17, офис Е5Ш
              </span>
            </div>
            <div className="social">
              <Icon name="vk" width={48} />
              <Icon name="instagram" width={48} margin={[0, 12]} />
              <Icon name="facebook" width={48} />
            </div>
          </div>
        </>
      )}
    </StyledFooter>
  );
};

export default Footer;
