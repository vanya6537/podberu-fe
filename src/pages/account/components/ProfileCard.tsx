import styled from 'styled-components';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import Image from '../../../components/Image';
import ProfileImage from '../../../assets/images/avatar.png';
import { ProfileDataType } from '../../../utilities/models';
import { BASE_URL } from '../../../utilities/constants';

const StyledProfileCard = styled.div`
  width: 100% !important;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;

    .detail {
      display: flex;
      align-items: center;
      //justify-content: space-between;

      flex-grow: 1 !important;

      .name {
        margin-left: 24px;
      }

      h6 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 2px;
      }

      span {
        font-size: 24px;
        opacity: 0.75;
        color: #272e3ebf;
      }
    }

    &.credit-score {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      div {
        font-size: 12px;
      }

      small {
        font-size: 10px;
      }
    }
  }
`;

type ProfileCardProps = { profile: ProfileDataType | null; logout: () => void };
const ProfileCard = ({ profile, logout }: ProfileCardProps) => {
  return (
    <Card
      style={{
        background: '#fbfcfd',
        boxShadow: '0px 0px 8px rgba(39, 46, 62, 0.25)',
        borderRadius: '10px',
        minWidth: 684,
        minHeight: 168,
        marginBottom: 48,
      }}
      styleBody={{ padding: '24px 48px' }}
    >
      <StyledProfileCard>
        <div>
          <div className="detail">
            <Image
              src={profile?.photo ? `${BASE_URL}${profile.photo}` : ProfileImage}
              name={profile?.fullName || 'Укажите своё имя'}
              round
              width={120}
              height={120}
            />
            <div className="name">
              <h6>{profile?.fullName || 'Укажите своё имя'}.</h6>
              <span>Аккаунт подтверждён</span>
            </div>
          </div>
          <div>
            <Icon name="logout" title="Logout" width={44} margin={[0, 0, 0, 20]} onClick={logout} />
          </div>
        </div>
        {/* {user.role === ROLES.CLIENT && ( */}
        {/*  <div className="credit-score"> */}
        {/*    <div>Ваш персональный кредитный рейтинг</div> */}
        {/*    <Image */}
        {/*      src={CreditMeterImage} */}
        {/*      name="credit meter" */}
        {/*      width={100} */}
        {/*      margin={[12, 'auto', 6, 'auto']} */}
        {/*    /> */}
        {/*    <small>705 Баллов</small> */}
        {/*  </div> */}
        {/* )} */}
      </StyledProfileCard>
    </Card>
  );
};

export default ProfileCard;
