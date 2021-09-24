import { useCallback, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import Back from '../../../components/Back';
import Button from '../../../components/Button';
import { Form, Input } from '../../../components/inputs';
import { SmallCard } from '../../../components/Card';
import { formatDate } from '../../../utilities/helper';
import { AuthContextType } from '../../../utilities/models';
import { saveDocument } from '../../../api';
import { AuthContext } from '../../../context/AuthContext';

const getIsVerifiedLabel = (flag: any): string => (flag ? 'Подтверждён' : 'Не подтверждён');
const getIconName = (flag: any): string => (flag ? 'docblue' : 'doc');

const StyledDocuments = styled.div`
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
`;

const PassportFormContainer = ({ back, handleSubmit, initialData }: any) => {
  return (
    <>
      <h2 style={{ fontSize: 36 }}>
        <Back onClick={back} />
        Паспорт
      </h2>
      <Form
        style={{ width: 388, margin: 'auto' }}
        onSubmit={handleSubmit}
        initialDataState={initialData}
        render={({ formData, handleInputChange }: any) => (
          <>
            <Row>
              <Col>
                <Input label="ФИО" name="name" type="text" onChange={handleInputChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Серия и номер"
                  name="number"
                  type="text"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input label="Кем выдан" name="issuer" type="text" onChange={handleInputChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="Дата выдачи"
                  name="issue_date"
                  type="date"
                  defaultValue={formatDate(Date.now(), 'YYYY-MM-DD')}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="passport_scan">
                  <Input
                    label="Скан паспорта"
                    onChange={handleInputChange}
                    type="file"
                    name="passport_scan"
                    multiple
                    id="passport_scan"
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: 18,
                  textAlign: 'center',
                  letterSpacing: '-0.24px',
                  opacity: 0.75,
                }}
              >
                2,3 страница + страница с актуальной регистрацией
              </Col>
            </Row>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
                <Button type="submit" value="Сохранить" size="hlg" />
              </Col>
            </Row>
          </>
        )}
      />
    </>
  );
};

const SnilsFormContainer = ({ back, handleSubmit, initialData }: any) => {
  return (
    <>
      <h2 style={{ fontSize: 36 }}>
        <Back onClick={back} />
        СНИЛС
      </h2>
      <Form
        style={{ width: 388, margin: 'auto' }}
        onSubmit={handleSubmit}
        initialDataState={initialData}
        render={({ formData, handleInputChange }: any) => (
          <>
            <Row>
              <Col>
                <Input
                  label="Номер СНИЛС"
                  placeholder="Номер СНИЛС"
                  name="number"
                  type="text"
                  // validate="required"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <label htmlFor="snils_scan">
                  <Input
                    label="Скан СНИЛС"
                    placeholder="Скан СНИЛС"
                    // validate="required"
                    type="file"
                    name="scan"
                    id="snils_scan"
                    onChange={handleInputChange}
                  />
                </label>
              </Col>
            </Row>

            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button type="submit" value="Сохранить" size="hlg" />
              </Col>
            </Row>
          </>
        )}
      />
    </>
  );
};

const InnFormContainer = ({ back, handleSubmit, initialData }: any) => {
  return (
    <>
      <h2 style={{ fontSize: 36 }}>
        <Back onClick={back} />
        Свидетельство ИНН
      </h2>
      <Form
        style={{ width: 388, margin: 'auto' }}
        onSubmit={handleSubmit}
        initialDataState={initialData}
        render={({ formData, handleInputChange }: any) => (
          <>
            <Row>
              <Col>
                <Input
                  label="Номер ИНН"
                  placeholder="Номер ИНН"
                  name="number"
                  type="text"
                  // validate="required"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="scan">
                  <Input
                    label="Скан свидетельства ИНН"
                    placeholder="Скан свидетельства ИНН"
                    // validate="required"
                    type="file"
                    name="scan"
                    id="scan"
                    // hidden
                    onChange={handleInputChange}
                  />
                </label>
              </Col>
            </Row>

            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Button type="submit" value="Сохранить" size="hlg" />
              </Col>
            </Row>
          </>
        )}
      />
    </>
  );
};

// const getStatusText = (flag: boolean) => (flag ? 'Подтверждён' : 'Не подтверждён');

const Documents = ({
  getUserData,
  setUserData,
  user,
}: Pick<AuthContextType, 'getUserData' | 'setUserData' | 'user'>) => {
  const { logout } = useContext<AuthContextType>(AuthContext);

  const [chosenForm, setChosenForm] = useState('');

  const goBack = () => {
    setChosenForm('');
  };
  const documents = useMemo(
    () => ({
      passport: !!(user?.passport && user?.passport?.isVerified),
      snils: !!(user?.snils && user?.snils?.isVerified),
      inn: !!(user?.inn && user?.inn?.isVerified),
    }),
    [user]
  );
  const handleSubmit = useCallback(
    (documentType) => (formData: any) => {
      return saveDocument(documentType, formData).then(({ error, ...rest }: any) => {
        if (!error) {
          // console.log(rest.code);
        }
        if (getUserData)
          getUserData()
            .then((responseInfo) => {
              const { data } = responseInfo;
              setUserData({ ...(user || {}), ...data });
            })
            // eslint-disable-next-line no-console
            .catch((err) => {
              logout();
              console.error(err);
            });
      });
    },
    [getUserData, setUserData, user, logout]
  );
  return (
    <StyledDocuments>
      {!chosenForm && (
        <Row>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Паспорт"
              subtitle={getIsVerifiedLabel(documents.passport)}
              icon={getIconName(documents.passport)}
              button={{
                value: 'Изменить',
                size: 'md',
                margin: [28, 0, 12, 0],
                padding: [0, 20],
                onClick: () => setChosenForm('passport'),
              }}
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="СНИЛС"
              subtitle={getIsVerifiedLabel(documents.snils)}
              icon={getIconName(documents.snils)}
              button={{
                value: 'Добавить',
                size: 'md',
                margin: [28, 0, 12, 0],
                padding: [0, 20],
                onClick: () => setChosenForm('snils'),
              }}
            />
          </Col>
          <Col md={4} style={{ marginBottom: 10 }}>
            <SmallCard
              title="Свидетельство ИНН"
              subtitle={getIsVerifiedLabel(documents.inn)}
              icon={getIconName(documents.inn)}
              button={{
                value: 'Добавить',
                size: 'md',
                margin: [28, 0, 12, 0],
                padding: [0, 20],
                onClick: () => setChosenForm('inn'),
              }}
            />
          </Col>
        </Row>
      )}
      {chosenForm === 'passport' && (
        <PassportFormContainer back={goBack} handleSubmit={handleSubmit('passport')} />
      )}
      {chosenForm === 'snils' && (
        <SnilsFormContainer back={goBack} handleSubmit={handleSubmit('snils')} />
      )}
      {chosenForm === 'inn' && (
        <InnFormContainer
          initialData={{ number: user?.inn?.number || '' }}
          back={goBack}
          handleSubmit={handleSubmit('inn')}
        />
      )}
    </StyledDocuments>
  );
};

export default Documents;
