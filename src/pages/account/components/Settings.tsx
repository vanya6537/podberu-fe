import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Button from '../../../components/Button';
import { Input } from '../../../components/inputs';

const StyledSettings = styled.div`
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

const Settings = () => {
  return (
    <StyledSettings>
      <h2 style={{ fontSize: 20 }}>Изменить персональную информацию</h2>
      <form style={{ width: 260, margin: 'auto' }}>
        <Row>
          <Col>
            <Input label="ФИО" placeholder="ФИО" name="full_name" type="text" validate="required" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Input
              label="Мобильный телефон"
              placeholder="Мобильный телефон"
              defaultValue="+7 000 00-00"
              validate="required|phone_number"
              type="number"
              name="phone_number"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              label="E-mail"
              placeholder="E-mail"
              validate="required|email"
              type="email"
              name="email"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input label="Изменить фото" placeholder="Изменить фото" type="file" name="avatar" />
          </Col>
        </Row>

        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <Button type="submit" value="Сохранить" size="md" width={100} />
          </Col>
        </Row>
      </form>
    </StyledSettings>
  );
};

export default Settings;
