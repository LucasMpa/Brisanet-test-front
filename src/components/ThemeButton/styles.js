import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: absolute;
  width: 139px;
  height: 31px;
  left: 138px;
  top: calc(100% - 100px);
  display: flex;
  border: 1px solid var(--gray-400);
  box-sizing: border-box;
  border-radius: 22px;
  font-size: 12px;
  line-height: 18px;
  background-color: var(--gray-100);

  &.dark {
    background-color: var(--gray-500);
    color: var(--gray-100);
    > span > svg {
      font-size: 15px;
      transform: rotate(0deg);
    }
  }

  > span {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
`;
