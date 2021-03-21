import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Button from '../../../components/Button';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';

const StyledApplications = styled.div``;

const Applications = ({ full = false }) => {
  return (
    <StyledApplications>
      <Row>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовая карта"
            subtitle="24.12.2020"
            icon="cards-white"
            group="blue"
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовая карта"
            subtitle="24.12.2020"
            icon="cards-white"
            group="blue"
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовая карта"
            subtitle="24.12.2020"
            icon="cards-white"
            group="blue"
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовая карта"
            subtitle="24.12.2020"
            icon="cards-white"
            group="blue"
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовая карта"
            subtitle="24.12.2020"
            icon="cards-white"
            group="blue"
          />
        </Col>
        <Col md={4} style={{ marginBottom: 10 }}>
          <SmallCard
            title="Дебетовая карта"
            subtitle="24.12.2020"
            icon="cards-white"
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

        <Button value="Новая заявка" size="lg" margin={[40, 0, 20, 0]} />
      </div>
    </StyledApplications>
  );
};

export default Applications;
