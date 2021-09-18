import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Back from '../../../components/Back';
import Button from '../../../components/Button';
import { AuthContext } from '../../../context/AuthContext';
import { sendDealInfo } from '../../../api';
import { FormDebit } from './FormDebit';

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
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 34px;
      text-align: center;
      position: relative;
      width: 100%;

      > div {
        position: absolute;
        top: 10px;
      }
    }

    > p {
      font-size: 36px;
      line-height: 43px;
      margin-bottom: 48px;
      text-align: center;
    }
  }
`;

const RegisterDeal = () => {
  const { user }: any = useContext(AuthContext);
  const [state, setState] = useState(user && user.isAgent ? 'initial' : 'fill-form');
  const { offerType, bankName } = useParams<{ offerType: string; bankName: string }>();
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setState('complete');
  // };
  const copyCurrentUrl = useCallback(() => navigator.clipboard.writeText(window.location.href), []);
  const setStateCallback = useCallback((someStateName: string) => () => setState(someStateName), [
    setState,
  ]);
  const handleSubmit = useCallback((formData) => {
    return sendDealInfo(offerType, formData).then(({ error, ...rest }: any) => {
      if (!error) {
        // console.log(rest.code);
        setState('complete');
      }
    });
  }, []);

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
            Дебетовая карта {bankName}
          </h2>
          <p>
            <div>Вы можете оформить заявку самостоятельно</div>
            <div>либо скопировать на неё ссылку</div>
            <div>для клиента.</div>
          </p>

          <Button
            value="Скопировать ссылку"
            size="lg"
            group="outline"
            margin={[0, 0, 24, 0]}
            onClick={copyCurrentUrl}
          />
          <span style={{ fontSize: 18 }}>Или</span>
          <Button
            value="Заполнить данные о клиенте"
            size="lg"
            margin={[24, 0, 20, 0]}
            onClick={setStateCallback('fill-form')}
          />
        </section>
      )}

      {state === 'fill-form' && (
        <section>
          <h2 style={{ fontSize: 36 }}>
            <Back />
            Дебетовая карта {bankName}
          </h2>
          <p>Заполните персональную информацию</p>
          <FormDebit handleSubmit={handleSubmit} />
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
          <Button value="Вернуться на главную страницу" size="hlg" width={212} margin={[20, 0]} />
        </section>
      )}
    </StyledRegisterDeal>
  );
};

export default RegisterDeal;
