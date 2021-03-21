import { Card as BCard } from 'react-bootstrap';
import styled from 'styled-components';
import Icon from './Icon';
import Button from './Button';
import Image from './Image';

const StyledCard = styled.div.attrs((props) => ({ ...props }))`
  /*height: 100%;*/
  box-shadow: 0px 0px 8px 0px rgba(39, 46, 62, 0.25);
  margin-bottom: 15px;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  ${(props) => (props.onClick ? 'cursor: pointer;' : '')}

  .card {
    height: 100%;
    border: none;
    background: inherit;
  }

  .card-body.blue {
    color: #ffffff;
    background: #4185e9;

    p {
      color: #ffffff;
    }
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
  group,
  noWrapper = false,
  styleBody = {},
  ...rest
}: any) => {
  return (
    <>
      {header && <StyledHeader>{header}</StyledHeader>}
      <StyledCard {...rest}>
        <BCard>
          <BCard.Body style={styleBody} className={group || ''}>
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

const StyledLargeCard = styled.div.attrs((props: any) => ({ ...props }))`
  display: flex;
  flex-wrap: nowrap;

  ${(props: any) =>
    props.type === 'small' || props.type === 'icon'
      ? `margin-top: 10px; padding: 0;
        h6 { font-size: 16px;  margin-bottom: 11px; }
        p { font-size: 11px; margin-bottom: 10px; }`
      : `margin-top: 20px; padding: 0 10px; 
        h6 { font-size: 20px;  margin-bottom: 15px; }
        p { font-size: 12px; margin-bottom: 15px; }`}

  ${(props: any) =>
    props.type === 'icon'
      ? `justify-content: center; margin: 20px 0;`
      : `justify-content: space-between;`}
      
  h6 {
    font-weight: 500;
  }

  p {
    color: #272e3e;
    opacity: 0.75;
  }

  .center {
    text-align: center;
  }
`;

const LargeCard = ({
  title,
  subtitle,
  body,
  button,
  icon,
  src,
  assetWidth,
  type,
  centerText,
  ...rest
}: any) => {
  return (
    <Card style={{ height: '100%' }} {...rest}>
      <StyledLargeCard type={type} style={centerText ? { justifyContent: 'center' } : {}}>
        {title || subtitle || body || button ? (
          <div className={centerText ? 'center' : ''}>
            {title && <h6>{title}</h6>}
            {subtitle && (
              <p>
                {typeof subtitle === 'string'
                  ? subtitle
                  : subtitle.map &&
                    subtitle.map((st: string, index: number) => <div key={index}>{st}</div>)}
              </p>
            )}
            {body && (
              <p>
                {typeof body === 'string'
                  ? body
                  : body.map &&
                    body.map((st: string, index: number) => <div key={index}>{st}</div>)}
              </p>
            )}
            {button && <Button {...button} />}
          </div>
        ) : null}
        {icon && (
          <div className="icon">
            <Icon name={icon} width={assetWidth || (type === 'small' ? 24 : 30)} />
          </div>
        )}
        {src && (
          <div className="icon">
            <Image src={src} width={assetWidth || (type === 'small' ? 24 : 30)} />
          </div>
        )}
      </StyledLargeCard>
    </Card>
  );
};

const SmallCard = ({ type = 'small', ...rest }: any) => {
  return <LargeCard {...rest} style={{}} styleBody={{ padding: '10px 15px' }} type={type} />;
};

const IconCard = ({ src, icon, width = 36 }: any) => {
  return <SmallCard src={src} icon={icon} assetWidth={width} type="icon" />;
};

export { LargeCard, SmallCard, IconCard };

export default Card;
