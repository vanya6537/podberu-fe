import styled from 'styled-components';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import Image from '../../../components/Image';
import ProfileImage from '../../../assets/images/avatar.png';
import CreditMeterImage from '../../../assets/images/credit-meter.png';

const StyledProfileCard = styled.div`
  width: 310px !important;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;

    .detail {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        margin-left: 10px;
      }

      h6 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 2px;
      }

      span {
        font-size: 12px;
        opacity: 0.75;
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

const ProfileCard = ({ full = false }) => {
  return (
    <Card>
      <StyledProfileCard>
        <div>
          <div className="detail">
            <Image src={ProfileImage} name="Фетисов М.Ю." round width={60} height={60} />
            <div className="name">
              <h6>Фетисов М.Ю.</h6>
              <span>Аккаунт подтверждён</span>
            </div>
          </div>
          <div>
            <Icon name="logout" width={22} margin={[0, 0, 0, 20]} />
          </div>
        </div>
        {full && (
          <div className="credit-score">
            <div>Ваш персональный кредитный рейтинг</div>
            <Image
              src={CreditMeterImage}
              name="credit meter"
              width={100}
              margin={[12, 'auto', 6, 'auto']}
            />
            <small>705 Баллов</small>
          </div>
        )}
      </StyledProfileCard>
    </Card>
  );
};

export default ProfileCard;
