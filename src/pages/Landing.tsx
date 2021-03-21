import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Icon from '../components/Icon';
import { Input, Select, Checkbox } from '../components/inputs';
import Button, { ButtonGroup } from '../components/Button';

const StyledLanding = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

    @media only screen and (max-width: 767px) {
      padding: 40px;

      .usps {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;
      }
    }

    h1 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 34px;
      max-width: 400px;
      line-height: 1.4;
    }

    .p {
      margin: 20px 0;
    }

    &.primary {
      background-color: #09244c;
      color: #ffffff;
    }
    &.secondary {
      h2 {
        font-size: 27px;
        font-weight: 500;
        margin: 0 auto;
        text-align: center;
      }

      .p {
        font-size: 18px;
        text-align: center;
      }
    }
  }
`;

const StyledUSP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  max-width: 142px;
  margin-left: auto;

  @media only screen and (max-width: 767px) {
    margin: 0 auto;
  }

  > span {
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
  }
`;

const Landing = () => {
  // TODO:: just a placeholder
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StyledLanding>
      <section className="primary">
        <Row>
          <Col md={8} lg={{ span: 5, offset: 2 }}>
            <h1>Кредит для вашего бизнеса до 5 000 000 ₽</h1>
            <p className="p">
              Если вы зарегистрированы как ИП или ваша компания оформлена как ООО или АО — вы можете
              взять кредит в банках наших партнёров.
            </p>

            <p className="p">
              Вам доступны различные виды кредитования на поддержку вашего бизнеса.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: 60 }}>
              <Button value="Оформить заявку" size="lg" />
              <div style={{ display: 'flex', marginLeft: 12 }}>
                <Icon name="safe" width={14} margin={[0, 4]} />
                <Icon name="ic" width={14} margin={[0, 4]} />
                <Icon name="safe2" width={14} margin={[0, 4]} />
                <Icon name="rnkb" width={14} margin={[0, 4]} />
              </div>
            </div>
          </Col>
          <Col md={4} lg={{ span: 3 }} className="usps">
            <StyledUSP>
              <Icon name="clock" width={26} />
              <span>Решение за 1 день</span>
            </StyledUSP>
            <StyledUSP>
              <Icon name="doc" width={26} />
              <span>
                Минимальный <div>пакет документов</div>
              </span>
            </StyledUSP>
            <StyledUSP>
              <Icon name="moneybag" width={26} />
              <span>Увеличенная сумма кредитного лимита</span>
            </StyledUSP>
            <StyledUSP>
              <Icon name="hand" width={26} />
              <span>
                Средняя <div>комиссия 12 %</div>
              </span>
            </StyledUSP>
          </Col>
        </Row>
      </section>

      {!submitted && (
        <section className="secondary">
          <h2>Оформить заявку</h2>
          <p className="p">Заполните персональную информацию</p>
          <form style={{ width: 260, margin: 'auto' }} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <ButtonGroup
                  options={[
                    { value: 'ИП', size: 'md', width: '100%', radius: 0 },
                    { value: 'ООО', size: 'md', width: '100%', radius: 0 },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input label="ФИО" placeholder="ФИО" name="full_name" validate="required" />
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
                  validate="required|email"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Сумма кредита (до 5 000 000 ₽)"
                  placeholder="Сумма кредита (до 5 000 000 ₽)"
                  name="loan_amount"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input label="Город" placeholder="Город" name="town" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input label="ИНН" placeholder="ИНН" name="inn" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Срок ведения деятельности"
                  placeholder="Срок ведения деятельности"
                  name="term_of_business"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Оборот в рублях (последний год)"
                  placeholder="Оборот в рублях (последний год)"
                  name="turnover"
                  validate="required"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Select
                  label="Ваша кредитная история"
                  placeholder="Ваша кредитная история"
                  name="credit_history"
                  options={[
                    { value: 'Нулевая', label: 'Нулевая' },
                    { value: 'Хорошая', label: 'Хорошая' },
                    { value: 'Плохая', label: 'Плохая' },
                    { value: 'Не знаю', label: 'Не знаю' },
                  ]}
                  validate="required"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Checkbox
                  label={
                    <>
                      Я принимаю условия <a className="link">договора об оказании услуг</a>
                    </>
                  }
                  name="terms_of_service"
                  validate="required"
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Checkbox
                  label={
                    <>
                      Я согласен <a className="link">на обработку персональных данных</a>
                    </>
                  }
                  name="data_processing"
                  validate="required"
                />
              </Col>
            </Row>

            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button type="submit" value="Отправить" size="lg" />
              </Col>
            </Row>
          </form>
        </section>
      )}
      {submitted && (
        <section
          className="secondary"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>Ваша заявка успешно отправлена!</h2>
          <div className="p">
            <div>Мы свяжемся с Вами</div> <div>в самое ближайшее время</div>
          </div>
          <Button value="Вернуться на главную страницу" size="lg" margin={[40, 0, 20, 0]} />
        </section>
      )}
    </StyledLanding>
  );
};

export default Landing;
