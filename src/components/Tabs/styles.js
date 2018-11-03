import styled from 'styled-components';
import {smaller} from '../../servises/mixins';
// TODO поменять стили

export const TabsContainer = styled.div`
  box-sizing: border-box;
  
  ${smaller.mobile`
    overflow: hidden;
  `}
`;

export const TabsList = styled.ul`
  display: flex;
  height: 65px;
  padding: 0;
  box-sizing: border-box;
  background-color: white;
  list-style: none;
  white-space: nowrap;
  ${smaller.tablet`
    
  `}
  
  ${smaller.mobile`
    width: 100%;
    overflow-x: scroll;  
    font-size: 12px;
    margin-right: 24px;
  `}
  
  ::-webkit-scrollbar { 
    width: 0; 
    background: transparent;
  }
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
  
  ${smaller.tablet`
    
  `}
  
  ${smaller.mobile`
    display: inline-block;
  `}
  
  &:last-child {
    margin-right: 0;
  }
  
  &.selected {
    color: black;
    border-bottom: 3px solid green;
  }
`;