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
  const [state, setState] = useState(user && user.isAgent ? 'initial' : 'fill-form');
  const { offerType, bankName } = useParams<{ offerType: string; bankName: string }>();
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setState('complete');
  // };
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
