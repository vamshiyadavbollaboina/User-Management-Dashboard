import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;
  width: 95%;
  max-width: 1000px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 38px;
`

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

export const AddButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #20c997;
  color: #fff;
  text-decoration: none;
  border-radius: 0.5rem;
  &:hover {
    background-color: #17a589;
  }
`

export const TableWrapper = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  border-bottom: 2px solid #dee2e6;
`

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #dee2e6;
`

export const ActionButton = styled.button`
  padding: 0.375rem 0.75rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: grey;
  background-color: ${props =>
    props.variant === 'edit' ? 'transparent' : 'transparent'};
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: ${props => (props.active ? '#0d6efd' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.active ? '#0b5ed7' : '#e9ecef')};
  }
`

export const PopupContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`

export const PopupMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const PopupButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`

export const ConfirmButton = styled.button`
  background-color: ${props => (props.variant === 'yes' ? 'red' : 'gray')};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
