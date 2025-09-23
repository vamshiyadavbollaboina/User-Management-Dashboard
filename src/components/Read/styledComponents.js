import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
`

export const Detail = styled.div`
  font-weight: 500;
  span {
    font-weight: bold;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`

export const Button = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #fff;
  border-radius: 0.5rem;
  background-color: ${props =>
    props.variant === 'edit' ? '#198754' : '#6c757d'};
  &:hover {
    background-color: ${props =>
      props.variant === 'edit' ? '#157347' : '#5c636a'};
  }
`
