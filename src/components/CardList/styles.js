import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 7%;
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: repeat(auto-fill, 169px);
  -webkit-box-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const NotFoundMessage = styled.div`
  margin-top: 25px;
  text-align: center;
`;
