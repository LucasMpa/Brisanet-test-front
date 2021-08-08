import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 5%;
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: repeat(auto-fill, 169px);
  -webkit-box-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;

  &.dark {
    background-color: var(--gray-500);
  }
`;

export const NotFoundMessage = styled.div`
  padding-top: 25px;
  text-align: center;

  &.dark {
    background-color: var(--gray-500);
  }
`;
