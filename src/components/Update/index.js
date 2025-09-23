import axios from 'axios'
import {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  Container,
  Title,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  BackButton,
  PopupContent,
  PopupTitle,
  PopupButtonWrapper,
  PopupButton,
} from './styledComponents'

const Update = () => {
  const [values, setValues] = useState({
    id: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Department: '',
  })
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const history = useHistory()
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`)
      .then(response => setValues(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [id])

  const handleUpdate = formEvent => {
    formEvent.preventDefault()
    axios
      .put(
        `https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`,
        values,
      )
      .then(() => setIsPopupOpen(true))
      .catch(error => console.error('Error updating data:', error))
  }

  return (
    <Container>
      <Card>
        <Title>Update User</Title>
        <Form onSubmit={handleUpdate}>
          <FormGroup>
            <Label htmlFor="id">ID:</Label>
            <Input
              type="number"
              id="id"
              name="id"
              value={values.id}
              onChange={event => setValues({...values, id: event.target.value})}
              placeholder="Enter ID"
              readOnly
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="firstName">First Name:</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={values.FirstName}
              onChange={event =>
                setValues({...values, FirstName: event.target.value})
              }
              placeholder="Enter First Name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={values.LastName}
              onChange={event =>
                setValues({...values, LastName: event.target.value})
              }
              placeholder="Enter Last Name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={values.Email}
              onChange={event =>
                setValues({...values, Email: event.target.value})
              }
              placeholder="Enter Email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="department">Department:</Label>
            <Input
              type="text"
              id="department"
              name="department"
              value={values.Department}
              onChange={event =>
                setValues({...values, Department: event.target.value})
              }
              placeholder="Enter Department"
              required
            />
          </FormGroup>

          <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
            <SubmitButton type="submit">Submit</SubmitButton>
            <BackButton type="button" onClick={() => history.push('/')}>
              Back to Home
            </BackButton>
          </div>
        </Form>
        <Popup
          open={isPopupOpen}
          modal
          closeOnDocumentClick
          onClose={() => setIsPopupOpen(false)}
        >
          {close => (
            <PopupContent>
              <PopupTitle>Updated Successfully!</PopupTitle>
              <PopupButtonWrapper>
                <PopupButton onClick={close} variant="stay">
                  Stay Here
                </PopupButton>
                <PopupButton onClick={() => history.push('/')} variant="home">
                  Back to Home
                </PopupButton>
              </PopupButtonWrapper>
            </PopupContent>
          )}
        </Popup>
      </Card>
    </Container>
  )
}

export default Update
