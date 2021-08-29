import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Button from '../../../components/Button';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';

const StyledApplications = styled.div``;
const defaultSubtitleTextColor = 'rgba(251, 252, 253, 0.6)';

const Applications = ({ full = false, applications = [] }) => {
  return (
    <StyledApplications>
      {applications.length ? (
        <Row>
          {applications.map(({ title, subtitle }) => (
            <Col md={4} style={{ padding: '0 24px 24px 0' }}>
              <SmallCard
                title={title || 'Дебетовая карта'}
                subtitle={subtitle || '24.12.2020'}
                icon="cards-white"
                group="blue"
                subtitleTextColor={defaultSubtitleTextColor}
                styleBody={{ padding: '24px 24px 24px 16px' }}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col md={4} style={{ padding: '0 24px 24px 0' }}>
            <SmallCard
              title="Дебетовая карта"
              subtitle="24.12.2020"
              icon="cards-white"
              group="blue"
              subtitleTextColor={defaultSubtitleTextColor}
              styleBody={{ padding: '24px 24px 24px 16px' }}
            />
          </Col>
          <Col md={4} style={{ padding: '0 24px 24px 0' }}>
            <SmallCard
              title="Дебетовая карта"
              subtitle="24.12.2020"
              icon="cards-white"
              group="blue"
              subtitleTextColor={defaultSubtitleTextColor}
              styleBody={{ padding: '24px 24px 24px 16px' }}
            />
          </Col>
          <Col md={4} style={{ padding: '0 0 24px 0' }}>
            <SmallCard
              title="Дебетовая карта"
              subtitle="24.12.2020"
              icon="cards-white"
              group="blue"
              styleBody={{ padding: '24px 24px 24px 16px' }}
              subtitleTextColor={defaultSubtitleTextColor}
            />
          </Col>
          <Col md={4} style={{ padding: '0 24px 0 0' }}>
            <SmallCard
              title="Дебетовая карта"
              subtitle="24.12.2020"
              icon="cards-white"
              group="blue"
              styleBody={{ padding: '24px 24px 24px 16px' }}
              subtitleTextColor={defaultSubtitleTextColor}
            />
          </Col>
          <Col md={4} style={{ padding: '0 24px 0 0' }}>
            <SmallCard
              title="Дебетовая карта"
              subtitle="24.12.2020"
              icon="cards-white"
              group="blue"
              styleBody={{ padding: '24px 24px 24px 16px' }}
              subtitleTextColor={defaultSubtitleTextColor}
            />
          </Col>
          <Col md={4} style={{ padding: '0 0 0 0' }}>
            <SmallCard
              title="Дебетовая карта"
              subtitle="24.12.2020"
              icon="cards-white"
              group="blue"
              styleBody={{ padding: '24px 24px 24px 16px' }}
              subtitleTextColor={defaultSubtitleTextColor}
            />
          </Col>
        </Row>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '48px 0',
        }}
      >
        <Pagination />
        <Button value="Новая заявка" size="hlg" margin={[48, 0, 0, 0]} />
      </div>
    </StyledApplications>
  );
};

export default Applications;
