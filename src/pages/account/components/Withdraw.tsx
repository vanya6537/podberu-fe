import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Back from '../../../components/Back';
import Button, { ButtonGroup } from '../../../components/Button';
import { Input, Checkbox } from '../../../components/inputs';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';

const StyledWithdraw = styled.div`
  > h2 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 34px;
    text-align: center;
    line-height: 1.4;
    position: relative;
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

const TransferForm = ({ back }: any) => {
  return (
    <>
      <h2 style={{ fontSize: 20 }}>
        <Back onClick={back} />
        Ваш баланс: 78 475 ₽
      </h2>
      <p>На расчётный счёт</p>
      <form style={{ width: 260, margin: 'auto' }}>
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
            <Button type="submit" value="Вывести средства" size="md" width={160} />
          </Col>
        </Row>
      </form>
    </>
  );
};

const WithdrawalForm = ({ back }: any) => {
  return (
    <>
      <h2 style={{ fontSize: 20 }}>
        <Back onClick={back} />
        Ваш баланс: 78 475 ₽
      </h2>
      <form style={{ width: 260, margin: 'auto' }}>
        <Row>
          <Col>
            <ButtonGroup
              options={[
                { value: 'На карту', size: 'md', width: '100%', radius: 0 },
                { value: 'На р/с', size: 'md', width: '100%', radius: 0 },
              ]}
            />
          </Col>
        </Row>
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
            <Button type="submit" value="Вывести средства" size="md" width={160} />
          </Col>
        </Row>
      </form>
    </>
  );
};

const Withdraw = ({ setFullProfile }: any) => {
  const [chosenForm, setChosenForm] = useState('');

  useEffect(() => {
    if (setFullProfile) {
      setFullProfile(!chosenForm);
    }
  }, [chosenForm]);

  const goBack = () => {
    setChosenForm('');
  };

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
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
                onClick={() => setChosenForm('withdrawal')}
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
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
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
              />
            </Col>
            <Col md={4} style={{ marginBottom: 10 }}>
              <SmallCard
                title="Вывод: 78 475 ₽"
                subtitle="24.12.2020"
                icon="hand-white"
                group="blue"
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

            <Button value="Вывести средства" size="lg" margin={[40, 0, 20, 0]} />
          </div>
        </>
      )}

      {chosenForm === 'transfer' && <TransferForm back={goBack} />}
      {chosenForm === 'withdrawal' && <WithdrawalForm back={goBack} />}
    </StyledWithdraw>
  );
};

export default Withdraw;
