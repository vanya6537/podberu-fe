import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Input, PasswordInput } from '../../components/inputs';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';

const StyledSignin = styled.div`
  section {
    min-height: 500px;
    padding: 96px 24px;

    > * {
      max-width: 1156px;
      margin: auto;
    }

    > .form-header {
      margin-top: 64px;
      margin-bottom: 100px;
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
  }
`;

const Signin = () => {
  const { sendAuthCode, completeSignIn }: any = useContext(AuthContext);
  const [stage, setStage] = useState(0);

  const handleSubmit = useCallback(
    async (formData) => {
      if (stage === 0) {
        await sendAuthCode(formData).then(({ error, ...rest }: any) => {
          if (!error) {
            setStage(1);
          }
        });
      } else if (stage === 1) {
        await completeSignIn(formData);
      }
    },
    [stage]
  );

  return (
    <StyledSignin>
      <section className="secondary">
        <Container className="form-header">
          <Row>
            <Col>
              <h2 style={{ fontSize: 48, fontWeight: 700, textAlign: 'center' }}>
                Вход в личный кабинет
              </h2>
            </Col>
          </Row>
        </Container>
        <Form
          style={{ width: 388, margin: 'auto' }}
          onSubmit={handleSubmit}
          initialDataState={{ phone: '', code: '' }}
          render={({ hasError, isFetching, handleInputChange }: any) => (
            <>
              <Row>
                <Col>
                  <Input
                    // label="Мобильный телефон"
                    placeholder="+7"
                    name="phone"
                    type="text"
                    validate="required|phone_number"
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              {stage === 1 && (
                <Row>
                  <Col>
                    <PasswordInput
                      // label="Код из смс"
                      placeholder="Код из смс"
                      validate="required|number(Code should be 4 digits)"
                      name="code"
                      pattern=".{4}"
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              )}
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
                <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
                  <Button
                    type="submit"
                    value={stage === 0 ? 'Далее' : 'Войти'}
                    disabled={hasError}
                    loading={isFetching}
                    size="hlg"
                  />
                </Col>
              </Row>
            </>
          )}
        />
      </section>
    </StyledSignin>
  );
};

export default Signin;
