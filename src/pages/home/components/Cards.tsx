import styled from 'styled-components';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import Button from '../../../components/Button';

const StyledLargeCard = styled.div.attrs((props: any) => ({ ...props }))`
  ${(props: any) =>
    props.small
      ? `margin-top: 10px; padding: 0;
        h6 { font-size: 16px;  margin-bottom: 11px; }
        p { font-size: 11px; margin-bottom: 10px; }`
      : `margin-top: 20px; padding: 0 10px; 
        h6 { font-size: 20px;  margin-bottom: 15px; }
        p { font-size: 12px; margin-bottom: 15px; }`}

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  h6 {
    font-weight: 500;
  }

  p {
    color: #272e3e;
    opacity: 0.75;
  }
`;

const LargeCard = ({ title, subtitle, body, button, icon, small, ...rest }: any) => {
  return (
    <Card style={{ height: '100%' }} {...rest}>
      <StyledLargeCard small={small}>
        <div>
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
                : body.map && body.map((st: string, index: number) => <div key={index}>{st}</div>)}
            </p>
          )}
          {button && <Button {...button} />}
        </div>
        {icon && (
          <div className="icon">
            <Icon name={icon} width={small ? 24 : 30} />
          </div>
        )}
      </StyledLargeCard>
    </Card>
  );
};

const SmallCard = (props: any) => {
  return <LargeCard {...props} style={{}} styleBody={{ padding: '10px 15px' }} small />;
};

export { LargeCard, SmallCard };
