import { Col, Row } from 'react-bootstrap';
import { useCallback, useMemo } from 'react';
import { Checkbox, Form, Input } from '../../../components/inputs';
import { formatDate } from '../../../utilities/helper';
import Button from '../../../components/Button';
import { ORDER_TYPE, ORDER_TYPES } from '../../../utilities/constants';

type FormProps = { handleSubmit: (data: any) => Promise<any>; formType: ORDER_TYPE };
type FormConfigType = {
  getFields: (handleInputChange: any) => any[];
  getAdditionalFields: (handleInputChange: any) => any[];
  initialData: any;
};
export const globalConfig: Record<string, FormConfigType> = {
  [ORDER_TYPES.DEBIT]: {
    getFields: (handleInputChange: any) => [
      {
        label: 'ФИО',
        placeholder: 'ФИО',
        name: 'full_name',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Дата рождения',
        placeholder: 'Дата рождения',
        name: 'birth_date',
        type: 'date',
        defaultValue: formatDate(Date.now(), 'DD-MM-YYYY'),
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Город',
        placeholder: 'Город',
        name: 'city',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
    ],
    getAdditionalFields: (handleInputChange: any) => [
      <Checkbox
        label="Дополнительная карта"
        placeholder="Дополнительная"
        name="is_additional"
        type="boolean"
        onChange={handleInputChange}
      />,
    ],
    initialData: {
      full_name: '',
      birth_date: formatDate(Date.now(), 'DD-MM-YYYY'),
      city: '',
      is_additional: false,
    },
  },
  [ORDER_TYPES.CREDIT]: {
    getFields: (handleInputChange: any) => [
      {
        label: 'ФИО',
        placeholder: 'ФИО',
        name: 'full_name',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Мобильный телефон',
        placeholder: 'Мобильный телефон',
        name: 'phone',
        type: 'number',
        validate: 'required|phone_number',
        onChange: handleInputChange,
      },
      {
        label: 'Электронная почта',
        placeholder: 'Электронная почта',
        name: 'email',
        type: 'email',
        validate: 'required|email',
        onChange: handleInputChange,
      },
      {
        label: 'Серия и номер паспорта',
        placeholder: 'Серия и номер паспорта',
        name: 'passport_number',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Дата выдачи',
        placeholder: 'Дата выдачи',
        name: 'passport_issue_date',
        type: 'date',
        defaultValue: formatDate(Date.now(), 'DD-MM-YYYY'),
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Код подразделения',
        placeholder: 'Код подразделения',
        name: 'passport_division_code',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Сумма',
        placeholder: 'Сумма',
        name: 'amount',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Дата рождения',
        placeholder: 'Дата рождения',
        name: 'birth_date',
        type: 'date',
        defaultValue: formatDate(Date.now(), 'DD-MM-YYYY'),
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Место рождения',
        placeholder: 'Место рождения',
        name: 'birth_place',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Место регистрации',
        placeholder: 'Место регистрации',
        name: 'registration_place',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Место проживания',
        placeholder: 'Место проживания',
        name: 'living_place',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'В браке',
        placeholder: 'В браке',
        name: 'is_married',
        type: 'checkbox',
        onChange: handleInputChange,
      },
      {
        label: 'Есть дети',
        placeholder: 'Есть дети',
        name: 'has_kids',
        type: 'checkbox',
        onChange: handleInputChange,
      },
      {
        label: 'Количество детей',
        placeholder: 'Количество детей',
        name: 'kids_amount',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Траты на жизнь',
        placeholder: 'Траты на жизнь',
        name: 'living_expenses',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Другие траты',
        placeholder: 'Другие траты',
        name: 'other_expenses',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Зарплата',
        placeholder: 'Зарплата',
        name: 'salary',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Род занятия',
        placeholder: 'Род занятия',
        name: 'occupation',
        type: 'text',
        onChange: handleInputChange,
      },
    ],
    getAdditionalFields: (handleInputChange: any) => [],
    initialData: {
      full_name: '',
      phone: '',
      email: '',
      city: '',
      passport_number: '',
      passport_issue_date: '',
      passport_division_code: '',
      amount: '',
      birth_date: formatDate(Date.now(), 'DD-MM-YYYY'),
      birth_place: '',
      registration_place: '',
      living_place: '',
      is_married: false,
      has_kids: false,
      kids_amount: '',
      living_expenses: '',
      other_expenses: '',
      salary: '',
      occupation: '',
    },
  },
  [ORDER_TYPES.RKO]: {
    getFields: (handleInputChange: any) => [
      {
        label: 'Мобильный телефон',
        placeholder: 'Мобильный телефон',
        name: 'phone_number',
        type: 'number',
        validate: 'required|phone_number',
        onChange: handleInputChange,
      },
      {
        label: 'Город',
        placeholder: 'Город',
        name: 'city',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'ИНН организации',
        placeholder: 'ИНН организации',
        name: 'organization_inn',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Род занятий',
        placeholder: 'Род занятий',
        name: 'activity_type',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Сумма',
        placeholder: 'Сумма',
        name: 'amount',
        type: 'number',
        validate: 'required',
        onChange: handleInputChange,
      },
    ],
    getAdditionalFields: (handleInputChange: any) => [
      <Checkbox
        label="Дополнительная карта"
        placeholder="Дополнительная"
        name="is_additional"
        type="boolean"
        onChange={handleInputChange}
      />,
    ],
    initialData: {
      full_name: '',
      birth_date: formatDate(Date.now(), 'DD-MM-YYYY'),
      city: '',
      is_additional: false,
    },
  },
  [ORDER_TYPES.MFO]: {
    getFields: (handleInputChange: any) => [
      {
        label: 'ФИО',
        placeholder: 'ФИО',
        name: 'full_name',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Мобильный телефон',
        placeholder: 'Мобильный телефон',
        name: 'phone',
        type: 'number',
        validate: 'required|phone_number',
        onChange: handleInputChange,
      },
      {
        label: 'Электронная почта',
        placeholder: 'Электронная почта',
        name: 'email',
        type: 'email',
        validate: 'required|email',
        onChange: handleInputChange,
      },
      {
        label: 'Серия и номер паспорта',
        placeholder: 'Серия и номер паспорта',
        name: 'passport_number',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Дата выдачи',
        placeholder: 'Дата выдачи',
        name: 'passport_issue_date',
        type: 'date',
        defaultValue: formatDate(Date.now(), 'DD-MM-YYYY'),
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Код подразделения',
        placeholder: 'Код подразделения',
        name: 'passport_division_code',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Сумма',
        placeholder: 'Сумма',
        name: 'amount',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Дата рождения',
        placeholder: 'Дата рождения',
        name: 'birth_date',
        type: 'date',
        defaultValue: formatDate(Date.now(), 'DD-MM-YYYY'),
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Место рождения',
        placeholder: 'Место рождения',
        name: 'birth_place',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Место регистрации',
        placeholder: 'Место регистрации',
        name: 'registration_place',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Место проживания',
        placeholder: 'Место проживания',
        name: 'living_place',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'В браке',
        placeholder: 'В браке',
        name: 'is_married',
        type: 'checkbox',
        onChange: handleInputChange,
      },
      {
        label: 'Есть дети',
        placeholder: 'Есть дети',
        name: 'has_kids',
        type: 'checkbox',
        onChange: handleInputChange,
      },
      {
        label: 'Количество детей',
        placeholder: 'Количество детей',
        name: 'kids_amount',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Траты на жизнь',
        placeholder: 'Траты на жизнь',
        name: 'living_expenses',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Другие траты',
        placeholder: 'Другие траты',
        name: 'other_expenses',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Зарплата',
        placeholder: 'Зарплата',
        name: 'salary',
        type: 'text',
        onChange: handleInputChange,
      },
      {
        label: 'Род занятия',
        placeholder: 'Род занятия',
        name: 'occupation',
        type: 'text',
        onChange: handleInputChange,
      },
    ],
    getAdditionalFields: (handleInputChange: any) => [],
    initialData: {
      full_name: '',
      phone: '',
      email: '',
      city: '',
      passport_number: '',
      passport_issue_date: '',
      passport_division_code: '',
      amount: '',
      birth_date: formatDate(Date.now(), 'DD-MM-YYYY'),
      birth_place: '',
      registration_place: '',
      living_place: '',
      is_married: false,
      has_kids: false,
      kids_amount: '',
      living_expenses: '',
      other_expenses: '',
      salary: '',
      occupation: '',
    },
  },
  [ORDER_TYPES.BUSINESS_CREDIT]: {
    getFields: (handleInputChange: any) => [
      {
        label: 'ФИО',
        placeholder: 'ФИО',
        name: 'full_name',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Мобильный телефон',
        placeholder: 'Мобильный телефон',
        name: 'phone',
        type: 'number',
        validate: 'required|phone_number',
        onChange: handleInputChange,
      },
      {
        label: 'Электронная почта',
        placeholder: 'Электронная почта',
        name: 'email',
        type: 'email',
        validate: 'required|email',
        onChange: handleInputChange,
      },
      {
        label: 'Город',
        placeholder: 'Город',
        name: 'city',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'ИНН',
        placeholder: 'ИНН',
        name: 'inn',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Сумма кредита',
        placeholder: 'Сумма кредита',
        name: 'credit_sum',
        type: 'number',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Длительность бизнеса',
        placeholder: 'Длительность бизнеса',
        name: 'business_duration',
        type: 'number',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Оборот за последний год',
        placeholder: 'Оборот за последний год',
        name: 'last_year_rotation',
        type: 'number',
        validate: 'required',
        onChange: handleInputChange,
      },
      {
        label: 'Кредитная история',
        placeholder: 'Кредитная история',
        name: 'credit_history',
        type: 'text',
        validate: 'required',
        onChange: handleInputChange,
      },
    ],
    getAdditionalFields: (handleInputChange: any) => [],
    initialData: {
      full_name: '',
      phone: '',
      email: '',
      city: '',
      inn: '',
      credit_sum: '',
      business_duration: '',
      last_year_rotation: '',
      credit_history: '',
    },
  },
};
export const GenericRegisterForm = ({ handleSubmit, formType = 'debit' }: FormProps) => {
  const config = useMemo(() => globalConfig[formType], [formType]);
  const buttonRow = (
    <Row>
      <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button type="submit" value="Отправить" size="hlg" />
      </Col>
    </Row>
  );
  const getRenderedFields = useCallback(
    (handleInputChange: any) => (
      <>
        {config.getFields(handleInputChange).map((props) => (
          <Row>
            <Col>
              <Input handleInputChange={handleInputChange} {...props} />
            </Col>
          </Row>
        ))}
        {config.getAdditionalFields(handleInputChange).map((fieldElement) => (
          <Row>
            <Col>{fieldElement}</Col>
          </Row>
        ))}
        {buttonRow}
      </>
    ),
    [config]
  );

  return (
    <Form
      style={{ width: 388, margin: 'auto' }}
      onSubmit={handleSubmit}
      initialDataState={config.initialData}
      render={({ formData, handleInputChange }: any) => getRenderedFields(handleInputChange)}
    />
  );
};
