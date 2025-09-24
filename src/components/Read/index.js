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
  // State to hold user data fetched from API
  const [data, setData] = useState({})
  // Get user ID from the route params (/read/:id)
  const {id} = useParams()

  // Fetch user details whenever the ID changes
  useEffect(() => {
    axios
      .get(`https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [id])

  return (
    <Container>
      <Card>
        {/* Page Title */}
        <Title>Details of User</Title>

        {/* Display user details */}
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

        {/* Navigation buttons: Edit & Back */}
        <ButtonGroup>
          {/* Edit button → navigate to update form */}
          <Button to={`/update/${id}`} variant="edit">
            Edit
          </Button>

          {/* Back button → go to home page */}
          <Button to="/" variant="back">
            Back
          </Button>
        </ButtonGroup>
      </Card>
    </Container>
  )
}

export default Read
