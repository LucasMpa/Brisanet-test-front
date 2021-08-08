import styled from "styled-components";
import { getBackgroundType } from "../../utils/typesConfig";

export const Container = styled.div`
  z-index: ${(props) => (props.visibility ? "1" : "-1")};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  color: var(--white);
  justify-content: center;
  align-items: center;

  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier();
  animation-duration: 0.3s;

  > div {
    width: 378px;
    height: 639px;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Dialog = styled.div`
  position: relative;
  height: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--white);
  color: var(--gray-500);
  opacity: 1;

  & > span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    cursor: pointer;
  }
  &.dark {
    color: var(--white);
    background-color: var(--gray-400);
  }
`;

export const ContainerAttributes = styled.div`
  font-weight: 600;
  height: 30%;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const SpritesContent = styled.div`
  display: flex;
  margin: 10px 0px;
  > :not(:first-child) {
    margin-left: 25px;
  }
`;

export const Sprite = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 8px;
  background: var(--gray-200);
`;

export const WeightAndHeight = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-top: 15px;

  & > div {
    font-weight: 500;
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const ContainerTypes = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const Type = styled.div`
  width: 90px;
  height: 30px;
  left: 147px;
  top: 301px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => getBackgroundType(props.type).bg};
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  color: ${(props) => getBackgroundType(props.type).fc};
`;

export const Statics = styled.div`
  color: var(--gray-300);
  font-weight: 600;
  font-size: 13px;
  > div {
    margin: 10px 0;
  }

  &.dark {
    color: var(--white);
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  margin-top: 10px;

  > :not(:first-child) {
    margin-left: 10px;
  }

  > p:not(:first-child) {
    margin-left: 0px;
    text-align: center;
  }

  > p {
    min-width: 38px;
  }
  > span {
    background-color: var(--gray-100);
    height: 12px;
    width: 100%;
    > div {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      min-height: 12px;
      width: ${(props) => props.percent + "%"};
      background-color: var(--primary) !important;
    }
  }
`;

export const ActionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 331px;
  height: 46px;
  background: var(--primary);
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
  color: var(--gray-500);
  > svg {
    margin-right: 10px;
    font-size: 18px;
  }

  &.danger {
    background: var(--danger);
    color: var(--white);
  }
`;
