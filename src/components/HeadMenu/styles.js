import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 65px;
  background: var(--primary);

  &.dark {
    color: var(--gray-100);
    background: var(--gray-400);
  }
`;

export const Logo = styled.img`
  height: 65px;
`;

export const CountFavorites = styled.span`
  margin-left: 5px;
  width: 17px;
  height: 17px;
  color: var(--white);
  background: var(--gray-500);
  border-radius: 8.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;

  &.dark {
    background: var(--primary);

    color: var(--gray-500);
  }
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
  &.dark {
    color: var(--gray-100);
  }

  &.dark-selected {
    border-bottom: 2px solid var(--primary);
    color: var(--primary);
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
  border: 1px solid var(--gray-500);
  box-sizing: border-box;
  border-radius: 8px;

  &.dark {
    border: 1px solid var(--gray-100);
  }

  > svg {
    font-size: 16px;
  }
`;
