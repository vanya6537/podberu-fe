import { Card as BCard } from 'react-bootstrap';
import styled from 'styled-components';
import { useRef } from 'react';
import Icon from './Icon';
import Button from './Button';
import Image from './Image';

const StyledCard = styled.div.attrs((props) => ({ ...props }))`
  border-radius: 15px;
  overflow: hidden;
  background: #fbfcfd;
  //height: 100%;
  box-shadow: 0 0 8px rgba(39, 46, 62, 0.25);
  ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
  height: fit-content;

  .card {
    //height: 100%;
    height: fit-content;
    border: none;
    background: inherit;
  }

  .card-body.blue {
    color: #ffffff;
    background: #4185e9;

    .card-subtitle {
      color: ${(props: any) => props.subtitleTextColor || '#272e3e'};
    }

    p {
      color: #ffffff;
    }
  }

  .card-content-wrapper {
    //height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    color: #272e3e;
    font-weight: 500;
    font-size: 36px;
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
    height: 100%;

    > * {
      width: 100%;
    }
  }

  .card-subtitle {
    font-size: 18px;
    color: #272e3e;
  }

  .button-wrapper {
    flex: 1;
    position: relative;
    min-height: 60px;

    & button {
      position: absolute;
      bottom: 0;
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
            {subtitle && (
              <BCard.Subtitle>
                {typeof subtitle === 'string' ? { subtitle } : subtitle}
              </BCard.Subtitle>
            )}

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

const StyledDivLargeCard = styled.div.attrs((props: any) => ({ ...props }))`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;

  ${(props: any) =>
    props.type === 'small' || props.type === 'icon'
      ? `margin-top: 0; padding: 0;
        h6 { font-size: 24px;  margin-bottom: 16px; }
        p { font-size: 18px; margin-bottom: 0; }
        .card-subtitle {
            ${(props.body || props.button) && 'padding-bottom: 20px;'}
            font-size: 18px;
        }`
      : `margin-top: 0; padding: 0 10px; 
        h6 { font-size: 36px;  margin-bottom: 24px; }
        p { font-size: 24px; margin-bottom: 24px; }
        .card-subtitle {
            ${props.body || props.button}
            font-size: 24px;
        }
        `}
  ${(props: any) =>
    props.type === 'icon'
      ? `justify-content: center; margin: 20px 0;`
      : `justify-content: space-between;`}
  h6 {
    font-weight: 500;
  }

  .icon {
    padding-left: 24px;
  }

  .card-subtitle {
    color: ${(props: any) => props.subtitleTextColor || '#272e3e'};
    font-weight: 400;
    letter-spacing: -0.24px;
    opacity: 0.75;
  }

  p {
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
  const buttonRef = useRef<HTMLDivElement>(null);
  return (
    <Card
      // style={{ flex: 1 }}
      {...rest}
      styleBody={{ padding: '64px 48px 36px 48px', ...rest.styleBody }}
    >
      <StyledDivLargeCard
        type={type}
        subtitleTextColor={rest.subtitleTextColor}
        body={body}
        button={button}
      >
        {title || subtitle || body || button ? (
          <div className={`card-content-wrapper ${centerText ? 'center' : ''}`}>
            {title && <h6>{title}</h6>}
            {subtitle && (
              <div className="card-subtitle">
                {typeof subtitle === 'string'
                  ? subtitle
                  : subtitle.map &&
                    subtitle.map((st: string, index: number) => <p key={index}>{st}</p>)}
              </div>
            )}
            {body && (
              <div>
                {typeof body === 'string'
                  ? body
                  : body.map && body.map((st: string, index: number) => <p key={index}>{st}</p>)}
              </div>
            )}

            {button && (
              <div className="button-wrapper">
                <Button
                  ref={buttonRef}
                  {...button}
                  height={button.height || 36}
                  display="absolute"
                  bottom={0}
                />
              </div>
            )}
          </div>
        ) : null}
        {icon && (
          <div className="icon">
            <Icon name={icon} width={assetWidth || (type === 'small' ? 44 : 48)} />
          </div>
        )}
        {src && (
          <div className="icon">
            <Image src={src} width={assetWidth || (type === 'small' ? 44 : 48)} />
          </div>
        )}
      </StyledDivLargeCard>
    </Card>
  );
};

const SmallCard = ({ type = 'small', ...rest }: any) => {
  return (
    <LargeCard
      {...rest}
      style={{}}
      styleBody={{ padding: '36px 24px', ...rest.styleBody }}
      type={type}
    />
  );
};

const IconCard = ({ src, icon, width = 36 }: any) => {
  return <SmallCard src={src} icon={icon} assetWidth={width} type="icon" />;
};

export { LargeCard, SmallCard, IconCard };

export default Card;
