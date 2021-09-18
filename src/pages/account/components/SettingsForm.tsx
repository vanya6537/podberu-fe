import { Col, Row } from 'react-bootstrap';
import { Form, Input } from '../../../components/inputs';
import Button from '../../../components/Button';

type FormProps = { handleSubmit: (data: any) => Promise<any>; initialData: Record<string, any> };

export const SettingsForm = ({ handleSubmit, initialData }: FormProps) => {
  return (
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
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                label="E-mail"
                placeholder="E-mail"
                validate="email"
                type="email"
                name="email"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                label="Изменить фото"
                placeholder="Изменить фото"
                type="file"
                name="photo"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
              <Button type="submit" value="Сохранить" size="hlg" />
            </Col>
          </Row>
        </>
      )}
    />
  );
};
