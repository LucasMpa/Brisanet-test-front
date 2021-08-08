import styled from "styled-components";

export const Container = styled.div`
  > div {
    position: absolute;
    left: 138px;
    top: 344px;
    display: flex;
    flex-direction: column;
    flex-grow: 20px;

    > input:first-child {
      margin-bottom: 20px;
    }
  }

  > div > input {
    width: 365px;
    height: 54px;
    padding: 0 16px;
    border: 1px solid var(--gray-300);
    box-sizing: border-box;
    border-radius: 8px;
  }
`;

export const LogoPokemon = styled.img`
  position: absolute;
  width: 206px;
  height: 76px;
  left: 138px;
  top: 33px;
`;

export const ActionButton = styled.span`
  position: absolute;
  width: 365px;
  height: 54px;
  left: 138px;
  top: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--primary);
  border-radius: 8px;
  opacity: 0.8;
  transition: 0.2s;

  :hover {
    opacity: 1;
  }
`;

export const BackgroundPokemon = styled.img`
  position: absolute;
  height: 100%;
  right: -380px;
  top: 0px;
`;

export const TitleForm = styled.text`
  position: absolute;
  width: 365px;
  height: 108px;
  left: 138px;
  top: 188px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: var(--gray-500);

  &.dark {
    color: var(--primary);
  }
`;
