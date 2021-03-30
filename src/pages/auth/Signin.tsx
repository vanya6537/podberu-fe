import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Back from '../../components/Back';
import { Input, PasswordInput } from '../../components/inputs';
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
  const [formData, setFormData] = useState({ phone: '', code: '' });
  const [stage, setStage] = useState(0);
  const handleInputChange = useCallback(({ name, value }: any) => {
    setFormData((d) => ({ ...d, [name]: value }));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (stage === 0) {
      sendAuthCode(formData).then(({ error }: any) => {
        if (!error) {
          setStage(1);
        }
      });
    } else if (stage === 1) {
      completeSignIn(formData);
    }
  };

  return (
    <StyledSignin>
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
                  validate="required"
                  type="number"
                  name="code"
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
              <Button type="submit" value="Войти" size="md" width={100} />
            </Col>
          </Row>
        </form>
      </section>
    </StyledSignin>
  );
};

export default Signin;
