import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px 10%;
  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const FilterCategory = styled.div`
  &.active {
    background-color: #ffcb05;
  }

  &:not(.active) {
    border: 1px solid #6b6868;
  }
  cursor: pointer;
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

  color: #343232;
`;
