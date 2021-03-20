import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Header from './Header';
import Footer from './Footer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  height: 100%;
  background: #f2f2f2;
  position: relative;

  main {
    display: flex;
    flex-direction: column;
    flex: 1 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;

    > section {
      padding: 0;
      flex: 1;
    }
  }
`;

const Container = ({ children, showHeader = false, showFooter = false, meta = {} }: any) => {
  return (
    <>
      <Helmet>
        <title>I Will Pick Up</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <StyledContainer>
        <main aria-hidden>
          {showHeader && <Header {...meta} />}
          <Suspense fallback={<Loader />}>
            <section className="scrollbar">{children}</section>
          </Suspense>
          {showFooter && <Footer />}
        </main>
      </StyledContainer>
    </>
  );
};

export default Container;
