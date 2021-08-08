import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  > input {
    margin-top: 25px;
    width: 55%;
    height: 54px;
    background: var(--white);
    border: 1px solid #dee0e3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0 16px;
  }
`;

export const SearchField = styled.div`
  margin-top: 25px;
  width: 55%;
  height: 54px;
  background: var(--white);
  border: 1px solid #dee0e3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > svg {
    font-size: 22px;
    cursor: pointer;
  }

  > input {
    height: 100%;
    width: 90%;
  }
`;

export const NotFoundMessage = styled.div`
  margin-top: 25px;
  text-align: center;
`;
