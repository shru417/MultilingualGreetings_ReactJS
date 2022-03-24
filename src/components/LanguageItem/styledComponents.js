import styled from 'styled-components'

export const ButtonsListContainer = styled.li`
  list-style-type: none;
  margin-right: 40px;
`

export const Button = styled.button`
  font-family: 'Roboto';
  border: 1px solid #db1c48;
  border-radius: 20px;
  padding: 10px;
  height: 40px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
`
