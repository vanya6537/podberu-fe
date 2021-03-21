import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Back from '../../components/Back';
import { Input, PasswordInput } from '../../components/inputs';
import Button from '../../components/Button';

const StyledSignin = styled.div`
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
  }
`;

const Signin = () => {
  // TODO:: just a placeholder
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StyledSignin>
      {!submitted && (
        <section className="secondary">
          <h2>
            <Back />
            Вход в личный кабинет
          </h2>
          <form style={{ width: 260, margin: 'auto' }} onSubmit={handleSubmit}>
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
                <PasswordInput
                  label="Код из смс"
                  placeholder="Код из смс"
                  validate="required"
                  name="password"
                />
              </Col>
            </Row>

            <Row>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: -10,
                  marginBottom: -5,
                }}
              >
                <a className="link-out">Не пришло смс?</a>
              </Col>
            </Row>

            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button type="submit" value="Войти" size="md" width={100} />
              </Col>
            </Row>
          </form>
        </section>
      )}
    </StyledSignin>
  );
};

export default Signin;
