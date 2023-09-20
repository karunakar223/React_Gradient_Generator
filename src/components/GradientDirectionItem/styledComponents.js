// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 49%;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  padding: 12px 24px 12px 24px;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
