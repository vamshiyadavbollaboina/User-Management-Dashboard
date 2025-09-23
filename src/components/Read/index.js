import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {
  Container,
  Title,
  Card,
  Detail,
  ButtonGroup,
  Button,
} from './styledComponents'

const Read = () => {
  const [data, setData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [id])

  return (
    <Container>
      <Card>
        <Title>Details of User</Title>
        <Detail>
          <span>Id:</span> {data.id}
        </Detail>
        <Detail>
          <span>First Name:</span> {data.FirstName}
        </Detail>
        <Detail>
          <span>Last Name:</span> {data.LastName}
        </Detail>
        <Detail>
          <span>Email:</span> {data.Email}
        </Detail>
        <Detail>
          <span>Department:</span> {data.Department}
        </Detail>
        <ButtonGroup>
          <Button to={`/update/${id}`} variant="edit">
            Edit
          </Button>
          <Button to="/" variant="back">
            Back
          </Button>
        </ButtonGroup>
      </Card>
    </Container>
  )
}

export default Read
