import styled from 'styled-components';
import { Pagination as BPagination } from 'react-bootstrap';

const StyledPagination = styled.div`
  .page-item {
    margin: 0 5px;

    .page-link {
      border-radius: 8px !important;
      border: none;
      background: inherit;
      color: #272e3e;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover .page-link {
      color: #ffffff;
      background: #4185e9;
    }

    &.active .page-link {
      color: #ffffff;
      background: #4185e9;
      border: 1px solid #dee2e6;
    }
  }
`;

const Pagination = () => {
  return (
    <StyledPagination>
      <BPagination>
        {/* <BPagination.First />
        <BPagination.Prev /> */}
        <BPagination.Item active>{1}</BPagination.Item>
        <BPagination.Item>{2}</BPagination.Item>
        <BPagination.Item>{3}</BPagination.Item>
        <BPagination.Ellipsis />

        <BPagination.Item>{24}</BPagination.Item>

        {/* <BPagination.Next />
        <BPagination.Last /> */}
      </BPagination>
    </StyledPagination>
  );
};

export default Pagination;
