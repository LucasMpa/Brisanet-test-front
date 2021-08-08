import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 65px;
  background: #ffcb05;
`;

export const Logo = styled.img`
  height: 65px;
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  > :not(:first-child) {
    margin-left: 25px;
  }
`;

export const Actions = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  font-size: 15px;
  line-height: 18px;
  color: var(--gray-500);
  height: 100%;

  &.active {
    border-bottom: 2px solid var(--gray-500);
  }
`;

export const Logoff = styled.div`
  cursor: pointer;
  width: 89px;
  height: 28px;
  left: 1214px;
  top: 11px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #343232;
  box-sizing: border-box;
  border-radius: 8px;

  > svg {
    font-size: 16px;
  }
`;
