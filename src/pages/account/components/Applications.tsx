import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import { SmallCard } from '../../../components/Card';
import Pagination from '../../../components/Pagination';
import { getApplications } from '../../../api';
import {
  ApplicationCardType,
  ApplicationResponseDataType,
  AuthContextType,
} from '../../../utilities/models';
import { ROUTES } from '../../../utilities/constants';
import { AuthContext } from '../../../context/AuthContext';

const StyledApplications = styled.div``;
const defaultSubtitleTextColor = 'rgba(251, 252, 253, 0.6)';

// const CARD_TITLES = {
//   rko: 'РКО карта',
//   mfo: 'МФО карта',
//   credit: 'Кредитная карта',
//   debit: 'Дебетовая карта',
//   business_credit: 'Кредитная карта (бизнес)',
// };

const Applications = () => {
  const defaultPageSize = 6;
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const { logout } = useContext<AuthContextType>(AuthContext);
  const [applications, setApplications] = useState<ApplicationCardType[]>([]);
  const history = useHistory();
  const newOrderCallback = useCallback(() => {
    history.push(ROUTES.HOME.path);
  }, []);

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
          (accum, [_, applicationList]) => [
            ...accum,
            ...applicationList.map(({ offer, createdAt }) => ({
              // title: CARD_TITLES[applicationType!],
              title: offer.type,
              subtitle: createdAt,
            })),
          ],
          [] as ApplicationCardType[]
        );
        // eslint-disable-next-line no-console
        console.log(updatedApplicationsList);
        setApplications(updatedApplicationsList);
        console.log({ len: updatedApplicationsList.length });
        const nextMaxPageNum =
          Math.floor(updatedApplicationsList.length / defaultPageSize) +
          +!!(updatedApplicationsList.length % defaultPageSize);
        setMaxPage(nextMaxPageNum);
      })
      // eslint-disable-next-line no-console
      .catch((err) => {
        logout();
        console.error(err);
      });
  }, []);
  const paginatedApplications = useMemo(
    () => applications.slice((page - 1) * defaultPageSize, page * defaultPageSize),
    [page, applications, defaultPageSize]
  );
  return (
    <StyledApplications>
      {paginatedApplications.length ? (
        <Row>
          {paginatedApplications.map(({ title, subtitle }) => (
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
        <h2>Пусто:)</h2>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '48px 0',
        }}
      >
        <Pagination maxPage={maxPage} onPageChange={setPage} />
        <Button
          value="Новая заявка"
          size="hlg"
          margin={[48, 0, 0, 0]}
          padding={[0, 44]}
          onClick={newOrderCallback}
        />
      </div>
    </StyledApplications>
  );
};

export default Applications;
