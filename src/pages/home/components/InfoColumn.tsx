import styled from 'styled-components';

const StyledInfoColumn = styled.div`
  .info-col__heading {
    font-size: 36px;
  }
  .info-col__links {
    font-size: 18px;
    list-style: none;
  }
`;

type Props = {
  headingText: string;
  links: string[];
};

const InfoColumn = ({ headingText, links }: Props) => {
  return (
    <StyledInfoColumn>
      <h4 className="info-col__heading">{headingText}</h4>
      <ul className="info-col__links">
        {links.map((link) => (
          <li>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </StyledInfoColumn>
  );
};

export default InfoColumn;
