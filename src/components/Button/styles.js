import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  min-width: 140px;
  height: 40px;
  background-color: rgba(14, 14, 14, 0.2);
  border: 1px solid grey;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(14, 14, 14, 0.1);
  }
  
  &:focus {
    border: 1px solid green;
    background-color: rgba(0, 128, 0, 0.5);
  }
`