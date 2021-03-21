import styled from 'styled-components';
import { Tabs as BTabs, Tab } from 'react-bootstrap';

const StyledTabs = styled.div`
  padding: 10px 0;

  .nav-tabs {
    border: none;
    justify-content: space-between;
  }

  .nav-tabs .nav-link {
    color: #272e3e;
    background-color: inherit;
    border: none;
    font-size: 14px;
    opacity: 0.8;
    padding: 5px;
    transition: color 250ms ease;

    &.active {
      border-bottom: 1px solid #4185e9 !important;
    }

    &.active,
    &:hover {
      opacity: 1;
      color: #4185e9;
      font-weight: 500;
    }
  }

  .tab-content {
    margin-top: 20px;
  }
`;

const Tabs = ({ header, data, activeKey }: any) => {
  return (
    header &&
    data && (
      <StyledTabs>
        <BTabs defaultActiveKey={activeKey || header[0].value} id="uncontrolled-tab-example">
          {header.map(({ value, label }: any) => (
            <Tab eventKey={value} title={label} key={value}>
              {data[value]}
            </Tab>
          ))}
        </BTabs>
      </StyledTabs>
    )
  );
};

export default Tabs;
