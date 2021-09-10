import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';
import { getApplications } from '../../../api';
import { ApplicationCardType, ApplicationResponseDataType } from '../../../utilities/models';

const StyledApplications = styled.div``;
const defaultSubtitleTextColor = 'rgba(251, 252, 253, 0.6)';

// const CARD_TITLES = {
//   rko: 'РКО карта',
//   mfo: 'МФО карта',
//   credit: 'Кредитная карта',
//   debit: 'Дебетовая карта',
//   business_credit: 'Кредитная карта (бизнес)',
// };

const Applications = ({ full = false }) => {
  const [applications, setApplications] = useState<ApplicationCardType[]>([]);

  useEffect(() => {
    getApplications()
      .then((responseInfo) => {
        // const { response, message, status, error } = data;
        const { data } = responseInfo;
        // console.log(response);
        const updatedApplicationsData: ApplicationResponseDataType = data;
        const updatedApplicationsList: ApplicationCardType[] = Object.entries(
          updatedApplicationsData
        ).reduce(
          (accum, [applicationType, applicationList]) => [
            ...accum,
            ...applicationList.map(({ offer }) => ({
              // title: CARD_TITLES[applicationType!],
              title: offer.type,
              subtitle: offer.createdAt,
            })),
          ],
          [] as ApplicationCardType[]
        );
        // eslint-disable-next-line no-console
        console.log(updatedApplicationsList);
        setApplications(updatedApplicationsList);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <StyledApplications>
      {applications.length ? (
        <Row>
          {applications.map(({ title, subtitle }) => (
            <Col md={4} style={{ padding: '0 24px 24px 0' }}>
              <SmallCard
                title={title}
                subtitle={subtitle}
                icon="cards-white"
                group="blue"
                subtitleTextColor={defaultSubtitleTextColor}
                styleBody={{ padding: '24px 24px 24px 16px' }}
              />
            </Col>
          ))}
        </Row>
      ) : (
        // Mock data
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
        <Button value="Новая заявка" size="hlg" margin={[48, 0, 0, 0]} padding={[0, 44]} />
      </div>
    </StyledApplications>
  );
};

export default Applications;
