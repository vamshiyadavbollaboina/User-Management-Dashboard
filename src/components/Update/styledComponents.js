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
  margin-bottom: 1.5rem;
  color: #0d6efd;
  font-family: 'Roboto';
  font-size: 35px;
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
  border: 1px solid #ced4da;
  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  }
`

export const SubmitButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #007bff;
  font-weight: 500;

  &:hover {
    background-color: #0069d9;
  }
`

export const BackButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #6c757d;
  font-weight: 500;

  &:hover {
    background-color: #5a6268;
  }
`

export const PopupContent = styled.div`
  padding: 2rem;
  text-align: center;
`

export const PopupTitle = styled.h3`
  margin-bottom: 2rem;
`

export const PopupButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`

export const PopupButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  background-color: ${props =>
    props.variant === 'home' ? '#fd7e14' : '#28a745'};

  &:hover {
    opacity: 0.85;
  }
`
