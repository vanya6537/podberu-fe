import { useCallback, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import Back from '../../../components/Back';
import Button from '../../../components/Button';
import { AuthContext } from '../../../context/AuthContext';
import { sendDealInfo } from '../../../api';
import { GenericRegisterForm } from './GenericRegisterForm';
import { getRegisterFormTitle, ORDER_TYPE, ROUTES } from '../../../utilities/constants';

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
      margin-bottom: 24px;
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
  const history = useHistory();
  // const [state, setState] = useState(user && user.isAgent ? 'initial' : 'fill-form');
  const [state, setState] = useState('complete');

  const { offerType, bankName } = useParams<{ offerType: string; bankName: string }>();
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setState('complete');
  // };
  const copyCurrentUrl = useCallback(() => navigator.clipboard.writeText(window.location.href), []);
  const setStateCallback = useCallback(
    (someStateName: string) => setState(someStateName),
    [setState]
  );

  const goHomeCallback = useCallback(() => {
    history.push(ROUTES.HOME.path);
  }, [history]);

  const handleSubmit = useCallback((formData) => {
    return sendDealInfo(offerType, formData).then(({ error, ...rest }: any) => {
      if (!error) {
        // console.log(rest.code);
        setState('complete');
      }
    });
  }, []);
  const title = useMemo(
    () => `${getRegisterFormTitle(offerType)} ${bankName}`,
    [offerType, bankName]
  );

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
            {title}
          </h2>
          <p>
            <div>Вы можете оформить заявку самостоятельно</div>
            <div>либо скопировать на неё ссылку</div>
            <div>для клиента.</div>
          </p>

          <Button
            value="Скопировать ссылку"
            size="hlg"
            group="outline"
            margin={[0, 0, 24, 0]}
            onClick={copyCurrentUrl}
          />
          <span style={{ fontSize: 18 }}>Или</span>
          <Button
            value="Заполнить данные о клиенте"
            size="hlg"
            margin={[24, 0, 20, 0]}
            onClick={setStateCallback('fill-form')}
          />
        </section>
      )}

      {state === 'fill-form' && (
        <section>
          <h2 style={{ fontSize: 36 }}>
            <Back />
            {title}
          </h2>
          <p>Заполните персональную информацию</p>
          <GenericRegisterForm handleSubmit={handleSubmit} formType={offerType as ORDER_TYPE} />
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
          <h2>{title}</h2>
          <p>
            <div>Заявка успешно отправлена!</div>
            <div>Её статус вы можете отследить в своём</div>
            <div>личном кабинете.</div>
          </p>
          <Button
            value="Вернуться на главную страницу"
            size="hlg"
            margin={[20, 0]}
            onClick={goHomeCallback}
          />
        </section>
      )}
    </StyledRegisterDeal>
  );
};

export default RegisterDeal;
