import styled from 'styled-components'

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
  max-width: 600px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Title = styled.h1`
  text-align: center;
  color: #0d6efd;
  margin-bottom: 1.5rem;
  font-family: 'Roboto';
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.25rem;
  text-align: left;
`

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => (props.error ? 'red' : '#ced4da')};
  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 600;
  text-align: left;
`

export const SubmitButton = styled.button`
  background-color: #0d6efd;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0b5ed7;
  }
`
