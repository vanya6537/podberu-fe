import styled from 'styled-components';

const StyledLoader = styled.div`
  height: inherit;
  width: 100%;
  position: relative;

  /* Loader 3 */
  .loader-3 {
    display: block;
    height: 32px;
    width: 32px;
  }
  .loader-3 span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
  }
  .loader-3 span::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    border: 3px solid ${(props) => props.color || '#17568b'};
    border-bottom: 3px solid transparent;
    border-radius: 50%;
    -webkit-animation: loader-3-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-3-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-3-1 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    40% {
      -webkit-transform: rotate(180deg);
    }
    60% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loader-3-1 {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader-3 span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 6px;
    height: 6px;
    background: ${(props) => props.color};
    border-radius: 50%;
    -webkit-animation: loader-3-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-3-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @-webkit-keyframes loader-3-2 {
    0% {
      -webkit-transform: translate3d(0, -32px, 0) scale(0, 2);
      opacity: 0;
    }
    50% {
      -webkit-transform: translate3d(0, 0, 0) scale(1.25, 1.25);
      opacity: 1;
    }
    100% {
      -webkit-transform: translate3d(0, 8px, 0) scale(0, 0);
      opacity: 0;
    }
  }
  @keyframes loader-3-2 {
    0% {
      transform: translate3d(0, -32px, 0) scale(0, 2);
      opacity: 0;
    }
    50% {
      transform: translate3d(0, 0, 0) scale(1.25, 1.25);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 8px, 0) scale(0, 0);
      opacity: 0;
    }
  }
`;

const Loader = ({ color = '#17568b' }: any) => {
  return (
    <StyledLoader color={color}>
      <div className="loader-3 center">
        <span />
      </div>
    </StyledLoader>
  );
};

export default Loader;
