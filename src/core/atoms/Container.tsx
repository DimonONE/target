import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100%;
  max-width: 1900px;
  font-family: "Play", sans-serif;
  margin: 0 auto;

  @media (max-width: 574px) {
    padding: 0 10px;
  }

  @media (max-width: 1900px) {
    padding: 20px;
  }
  @media (min-width: 1900px) {
    padding: 0;
  }
`;
