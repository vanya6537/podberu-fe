import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Back from '../../components/Back';
import { Form, Input, PasswordInput } from '../../components/inputs';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';

const StyledSignin = styled.div`
  section {
    min-height: 500px;
    padding: 70px;

    > * {
      max-width: 1000px;
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
        <h2>
          <Back />
          Вход в личный кабинет
        </h2>
        <Form
          style={{ width: 260, margin: 'auto' }}
          onSubmit={handleSubmit}
          initialDataState={{ phone: '', code: '' }}
          render={({ hasError, isFetching, handleInputChange }: any) => (
            <>
              <Row>
                <Col>
                  <Input
                    label="Мобильный телефон"
                    placeholder="Мобильный телефон"
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
                      label="Код из смс"
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
                <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                  <Button
                    type="submit"
                    value="Войти"
                    size="md"
                    width={100}
                    disabled={hasError}
                    loading={isFetching}
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
