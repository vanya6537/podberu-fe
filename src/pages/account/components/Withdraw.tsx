import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Back from '../../../components/Back';
import Button from '../../../components/Button';
import { Checkbox, Form, Input } from '../../../components/inputs';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';
import { AuthContext } from '../../../context/AuthContext';
import { getWithdrawals } from '../../../api';
import { formatDate } from '../../../utilities/helper';

const StyledWithdraw = styled.div`
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
      top: 6px;
    }
  }

  > p {
    text-align: center;
    margin-top: -20px;
    margin-bottom: 25px;
  }
`;

const TransferForm = ({ back, fundsAvailable, handleSubmit }: any) => {
  const initialData = {
    full_name: '',
    birth_date: formatDate(Date.now(), 'YYYY-MM-DD'),
    city: '',
    is_additional: false,
  };
  return (
    <>
      <h2 style={{ fontSize: 36 }}>
        <Back onClick={back} />
        Ваш баланс: {fundsAvailable}₽
      </h2>
      <p style={{ fontSize: 24 }}>На расчётный счёт</p>
      <Form
        style={{ width: 388, margin: 'auto' }}
        onSubmit={handleSubmit}
        initialDataState={initialData}
        render={({ handleInputChange }: any) => (
          <>
            <Row>
              <Col>
                <Input
                  label="БИК (формат: 123456789)"
                  placeholder="БИК (формат: 123456789)"
                  name="bik_format"
                  type="text"
                  validate="required"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Банк получателя"
                  placeholder="Банк получателя"
                  validate="required"
                  type="text"
                  name="payee_bank"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Корреспондентский счёт"
                  placeholder="Корреспондентский счёт"
                  validate="required"
                  type="text"
                  name="account"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Расчётный счёт"
                  placeholder="Расчётный счёт"
                  validate="required"
                  type="text"
                  name="checkin_account"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Номер карты"
                  placeholder="Номер карты"
                  validate="required"
                  type="number"
                  name="card_number"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Получатель"
                  placeholder="Получатель"
                  validate="required"
                  type="text"
                  name="recipient"
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button type="submit" value="Вывести средства" size="hlg" />
              </Col>
            </Row>
          </>
        )}
      />
    </>
  );
};

const WithdrawalFormContainer = ({ back, fundsAvailable, handleSubmit }: any) => {
  const initialData = {
    full_name: '',
    birth_date: formatDate(Date.now(), 'YYYY-MM-DD'),
    city: '',
    is_additional: false,
  };
  return (
    <>
      <h2 style={{ fontSize: 36 }}>
        <Back onClick={back} />
        Ваш баланс: {fundsAvailable}
      </h2>
      <p style={{ fontSize: 24 }}>Вывести средства на расчётный счёт</p>

      <Form
        style={{ width: 388, margin: 'auto' }}
        onSubmit={handleSubmit}
        initialDataState={initialData}
        render={({ handleInputChange }: any) => (
          <>
            <Row>
              <Col>
                <Input
                  label="Сумма"
                  placeholder="Сумма"
                  name="amount"
                  type="number"
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
                <Button type="submit" value="Вывести средства" size="hlg" />
              </Col>
            </Row>
          </>
        )}
      />
    </>
  );
};

const Withdraw = () => {
  const [chosenForm, setChosenForm] = useState('');
  const { user } = useContext(AuthContext);
  const [, setCards] = useState([]);
  const goBack = () => {
    setChosenForm('');
  };
  useEffect(() => {
    getWithdrawals().then((responseInfo) => {
      const { data } = responseInfo;
      setCards(data);
    });
  }, []);

  return (
    <StyledWithdraw>
      {!chosenForm && (
        <>
          <Row>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('transfer')}
                subtitleTextColor="rgba(251, 252, 253, 0.6)"
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('withdrawal')}
                subtitleTextColor="rgba(251, 252, 253, 0.6)"
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('withdrawal')}
                subtitleTextColor="rgba(251, 252, 253, 0.6)"
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('withdrawal')}
                subtitleTextColor="rgba(251, 252, 253, 0.6)"
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('withdrawal')}
                subtitleTextColor="rgba(251, 252, 253, 0.6)"
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('withdrawal')}
                subtitleTextColor="rgba(251, 252, 253, 0.6)"
              />
            </Col>
          </Row>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 0',
            }}
          >
            <Pagination />

            <Button
              value="Вывести средства"
              size="hlg"
              margin={[40, 0, 20, 0]}
              onClick={() => setChosenForm('transfer')}
            />
          </div>
        </>
      )}

      {chosenForm === 'transfer' && (
        <TransferForm fundsAvailable={user?.fundsAvailable || 0} back={goBack} />
      )}
      {chosenForm === 'withdrawal' && (
        <WithdrawalFormContainer back={goBack} fundsAvailable={user?.fundsAvailable || 0} />
      )}
    </StyledWithdraw>
  );
};

export default Withdraw;
