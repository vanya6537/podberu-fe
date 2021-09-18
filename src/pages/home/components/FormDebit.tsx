import { Col, Row } from 'react-bootstrap';
import { Checkbox, Form, Input } from '../../../components/inputs';
import { formatDate } from '../../../utilities/helper';
import Button from '../../../components/Button';

type FormProps = { handleSubmit: (data: any) => Promise<any> };
const initialData = {
  full_name: '',
  birth_date: formatDate(Date.now(), 'YYYY-MM-DD'),
  city: '',
  is_additional: false,
};
export const FormDebit = ({ handleSubmit }: FormProps) => (
  <Form
    style={{ width: 388, margin: 'auto' }}
    onSubmit={handleSubmit}
    initialDataState={initialData}
    render={({ formData, handleInputChange }: any) => (
      <>
        <Row>
          <Col>
            <Input
              label="ФИО"
              placeholder="ФИО"
              name="full_name"
              type="text"
              validate="required"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              label="Дата рождение"
              placeholder="Дата рождение"
              name="birth_date"
              type="date"
              defaultValue={formatDate(Date.now(), 'YYYY-MM-DD')}
              validate="required"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              label="Город"
              placeholder="Город"
              name="city"
              type="text"
              validate="required"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Checkbox
              label="Дополнительная карта"
              placeholder="Дополнительная"
              name="is_additional"
              type="boolean"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        {/* <Row> */}
        {/*  <Col> */}
        {/*    <Input */}
        {/*      label="Серия и номер паспорта" */}
        {/*      placeholder="Серия и номер паспорта" */}
        {/*      name="passport_number" */}
        {/*      type="text" */}
        {/*      validate="required" */}
        {/*    /> */}
        {/*  </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/*  <Col> */}
        {/*    <Input */}
        {/*      label="Кем выдан" */}
        {/*      placeholder="Кем выдан" */}
        {/*      name="issued_by" */}
        {/*      type="text" */}
        {/*      validate="required" */}
        {/*    /> */}
        {/*  </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/*  <Col> */}
        {/*    <Input */}
        {/*      label="Дата выдачи" */}
        {/*      placeholder="Дата выдачи" */}
        {/*      name="date_of_issue" */}
        {/*      type="date" */}
        {/*      defaultValue={formatDate(Date.now(), 'YYYY-MM-DD')} */}
        {/*      validate="required" */}
        {/*    /> */}
        {/*  </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/*  <Col> */}
        {/*    <Input */}
        {/*      label="Адрес регистрации" */}
        {/*      placeholder="Адрес регистрации" */}
        {/*      name="address" */}
        {/*      type="text" */}
        {/*      validate="required" */}
        {/*    /> */}
        {/*  </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/*  <Col> */}
        {/*    <Input */}
        {/*      label="Мобильный телефон" */}
        {/*      placeholder="Мобильный телефон" */}
        {/*      name="phone_number" */}
        {/*      type="number" */}
        {/*      validate="required|phone_number" */}
        {/*    /> */}
        {/*  </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/*  <Col> */}
        {/*    <Input */}
        {/*      label="E-mail" */}
        {/*      placeholder="E-mail" */}
        {/*      name="email" */}
        {/*      type="email" */}
        {/*      validate="required" */}
        {/*    /> */}
        {/*  </Col> */}
        {/* </Row> */}
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Button type="submit" value="Отправить" size="hlg" width={212} />
          </Col>
        </Row>
      </>
    )}
  />
);
