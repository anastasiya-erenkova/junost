import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 710px;
    padding: 0 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 964px;
  }

  @media screen and (min-width: 1460px) {
    width: 1285px;
  }
`;
