import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Back from '../../components/Back';
import { Input } from '../../components/inputs';
import Button from '../../components/Button';
import { formatDate } from '../../utilities/helper';

const StyledRegisterDeal = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

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
  // TODO:: just a placeholder
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StyledRegisterDeal>
      {!submitted && (
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

      {submitted && (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>Дебетовая карта Альфа-банк</h2>
          <p>
            <div>Заявка успешно отправлена!</div>
            <div>Её статус вы можете отследить в своём</div>
            <div>личном кабинете.</div>
          </p>
          <Button value="Вернуться на главную страницу" size="lg" margin={[30, 0, 20, 0]} />
        </section>
      )}
    </StyledRegisterDeal>
  );
};

export default RegisterDeal;
