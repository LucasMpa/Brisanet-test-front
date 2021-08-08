import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  &.dark {
    background-color: var(--gray-500);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.dark {
    > h2 {
      color: var(--white);
    }
    > div {
      color: var(--white);
      border: 1px solid var(--white);
    }
  }

  > img {
    width: 50%;
    max-width: 1100px;
  }

  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: var(--gray-500);
  }

  > h3 {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: var(--gray-300);
  }

  > div {
    cursor: pointer;
    width: 233px;
    height: 45px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-300);
    margin-top: 40px;
    border: 1px solid var(--gray-300);
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
