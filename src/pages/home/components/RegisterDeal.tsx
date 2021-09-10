import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Back from '../../../components/Back';
import Button from '../../../components/Button';
import { Input } from '../../../components/inputs';
import { ROLES } from '../../../utilities/constants';
import { formatDate } from '../../../utilities/helper';
import { AuthContext } from '../../../context/AuthContext';

const StyledRegisterDeal = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

    > * {
      max-width: 1156px;
      margin: auto;
    }

    @media only screen and (max-width: 767px) {
      padding: 40px;
    }

    > h2 {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 34px;
      text-align: center;
      line-height: 1.4;
      position: relative;
      width: 100%;
      > div {
        position: absolute;
        top: 10px;
      }
    }

    > p {
      font-size: 20px;
      margin-bottom: 30px;
      text-align: center;
    }
  }
`;

const RegisterDeal = () => {
  const { user }: any = useContext(AuthContext);
  const [state, setState] = useState(user.role === ROLES.AGENT ? 'initial' : 'fill-form');
  const { bankName } = useParams<{ offerType: string; bankName: string }>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setState('complete');
  };

  return (
    <StyledRegisterDeal>
      {state === 'initial' && (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>
            <Back />
            Дебетовая карта Альфа-банк
          </h2>
          <p>
            <div>Вы можете оформить заявку самостоятельно</div>
            <div>либо скопировать на неё ссылку</div>
            <div>для клиента.</div>
          </p>

          <Button value="Скопировать ссылку" size="lg" group="outline" margin={[0, 0, 20, 0]} />
          <span style={{ marginBottom: -8 }}>Или</span>
          <Button
            value="Заполнить данные о клиенте"
            size="lg"
            margin={[30, 0, 20, 0]}
            onClick={() => setState('fill-form')}
          />
        </section>
      )}

      {state === 'fill-form' && (
        <section>
          <h2>
            <Back />
            Дебетовая карта Альфа-банк
          </h2>
          <p>Заполните персональную информацию</p>
          <form style={{ width: 260, margin: 'auto' }} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Input
                  label="ФИО"
                  placeholder="ФИО"
                  name="full_name"
                  type="text"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Дата рождение"
                  placeholder="Дата рождение"
                  name="date_of_birth"
                  type="date"
                  defaultValue={formatDate(Date.now(), 'YYYY-MM-DD')}
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Серия и номер паспорта"
                  placeholder="Серия и номер паспорта"
                  name="passport_number"
                  type="text"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Кем выдан"
                  placeholder="Кем выдан"
                  name="issued_by"
                  type="text"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Дата выдачи"
                  placeholder="Дата выдачи"
                  name="date_of_issue"
                  type="date"
                  defaultValue={formatDate(Date.now(), 'YYYY-MM-DD')}
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Адрес регистрации"
                  placeholder="Адрес регистрации"
                  name="address"
                  type="text"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Мобильный телефон"
                  placeholder="Мобильный телефон"
                  name="phone_number"
                  type="number"
                  validate="required|phone_number"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="E-mail"
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  validate="required"
                />
              </Col>
            </Row>

            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button type="submit" value="Отправить" size="md" width={100} />
              </Col>
            </Row>
          </form>
        </section>
      )}

      {state === 'complete' && (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>Дебетовая карта ${bankName}</h2>
          <p>
            <div>Заявка успешно отправлена!</div>
            <div>Её статус вы можете отследить в своём</div>
            <div>личном кабинете.</div>
          </p>
          <Button value="Вернуться на главную страницу" size="lg" margin={[20, 0]} />
        </section>
      )}
    </StyledRegisterDeal>
  );
};

export default RegisterDeal;
