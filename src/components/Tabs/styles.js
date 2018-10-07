import styled from 'styled-components';

export const TabsList = styled.ul`
  display: flex;
  box-sizing: border-box;
  height: 65px;
  list-style: none;
  background-color: white;
`;

export const TabsItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  color: grey;
  font-family: dinpro, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  cursor: pointer;
  
  &.selected {
    border-bottom: 3px solid green;
  }
`;