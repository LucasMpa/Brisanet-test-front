import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px 10%;
  &.dark {
    background-color: var(--gray-500);
  }
  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const FilterCategory = styled.div`
  &.active {
    background-color: var(--primary);
    border: 0px solid var(--white);
  }

  &.dark {
    color: var(--white);
    border: 1px solid var(--white);
  }

  &.dark-active {
    color: var(--gray-500);
    border: 0px;
  }
  cursor: pointer;
  border: 1px solid var(--gray-500);
  width: 145px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  /* identical to box height */

  text-align: center;

  color: var(--gray-500);
`;
