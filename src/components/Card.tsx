import { Card as BCard } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled.div.attrs((props) => ({ ...props }))`
  /*height: 100%;*/
  box-shadow: 0px 0px 8px 0px rgba(39, 46, 62, 0.25);
  margin-bottom: 15px;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  .card {
    height: 100%;
    border: none;
    background: inherit;
  }

  .card-title {
    color: #828282;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }

  .card-footer {
    border-top: none;
    background: inherit;
    display: flex;
    justify-content: space-between;
    color: #828282;
    font-weight: 400;
    font-size: 14px;
    padding: 0;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;

    > * {
      width: 100%;
    }
  }
`;

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  margin: 17px 0;
`;

const Card = ({
  header,
  title,
  subtitle,
  children,
  footer,
  noWrapper = false,
  styleBody = {},
  ...rest
}: any) => {
  return (
    <>
      {header && <StyledHeader>{header}</StyledHeader>}
      <StyledCard {...rest}>
        <BCard>
          <BCard.Body style={styleBody}>
            {title && <BCard.Title>{title}</BCard.Title>}
            {subtitle && <BCard.Subtitle>{subtitle}</BCard.Subtitle>}

            {noWrapper ? <>{children}</> : <div className="card-text">{children}</div>}

            {footer && <>{footer}</>}
          </BCard.Body>
        </BCard>
      </StyledCard>
    </>
  );
};

Card.Footer = ({ children, ...rest }: any) => {
  return <BCard.Footer {...rest}>{children}</BCard.Footer>;
};

export default Card;
