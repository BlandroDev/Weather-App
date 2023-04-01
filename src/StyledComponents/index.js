import styled from "styled-components";

export const BackgroundImg = styled.div`
  width: 100%;
  padding-top: 1px;
  height: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 200;
  transition: background 1s, transform 0.5s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:active {
    transform: scale(96%);
  }
`;
