import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 165px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Heart = styled.div`
  position: absolute;
  right: 18px;
  top: 10px;
  width: 20px;
  height: 20px;
  background: #ff3326;
  border: 2px solid #ff3326;
`;

export const Sprite = styled.div`
  margin: 15% 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

export const Id = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #8e8787;
`;

export const ContainerOfTypes = styled.div`
  display: flex;
  flex-direction: row;
  > :not(:first-child) {
    margin-left: 5px;
  }
`;

export const TypePrimary = styled.div`
  width: 50.53px;
  height: 20px;
  left: 147px;
  top: 301px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffcb05;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  color: #343232;
`;

export const TypeSecondary = styled.div`
  width: 50.53px;
  height: 20px;
  left: 147px;
  top: 301px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--danger);
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  color: var(--white);
`;

export const DetailsButton = styled.div`
  margin-top: 10px;
  width: 147px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 8px;

  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #343232;
`;
