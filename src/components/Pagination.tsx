import styled from 'styled-components';
import { Pagination as BPagination } from 'react-bootstrap';

import { usePagination } from '@material-ui/lab/Pagination';
import { ReactEventHandler, useCallback, useState } from 'react';

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

const Pagination = ({ maxPage = 200, onPageChange }: any) => {
  const { items } = usePagination({ count: maxPage });
  const [lastPage, setLastPage] = useState(1);
  const handleClick = useCallback(
    (onClickFunc: ReactEventHandler) => (e: any) => {
      const buttonText: string = e.target?.firstChild?.textContent || e.target?.text;
      onClickFunc(e);
      switch (buttonText) {
        case '...':
          break;
        case '‹':
          if (lastPage > 1) {
            setLastPage(lastPage - 1);
            if (onPageChange) onPageChange(lastPage - 1);
          }
          break;
        case '›':
          if (maxPage > lastPage) {
            setLastPage(lastPage + 1);
            if (onPageChange) onPageChange(lastPage + 1);
          }
          break;
        default: {
          setLastPage(+buttonText);
          if (onPageChange) onPageChange(+buttonText);
        }
      }
    },
    [lastPage, setLastPage, onPageChange]
  );
  return (
    <StyledPagination>
      <BPagination>
        {items.map(({ page, type, selected, onClick, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <BPagination.Ellipsis
                key={type}
                {...item}
                onClick={handleClick(onClick)}
                active={selected}
              />
            );
          } else if (type === 'page') {
            children = (
              <BPagination.Item
                key={index}
                active={selected}
                onClick={handleClick(onClick)}
                {...item}
              >
                {page}
              </BPagination.Item>
            );
          } else if (type === 'previous') {
            children = <BPagination.Prev key="prev" {...item} onClick={handleClick(onClick)} />;
          } else if (type === 'next') {
            children = <BPagination.Next key="next" {...item} onClick={handleClick(onClick)} />;
          }

          return children;
        })}
      </BPagination>
    </StyledPagination>
  );
};

export default Pagination;
