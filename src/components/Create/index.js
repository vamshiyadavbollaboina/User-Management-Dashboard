import axios from 'axios'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {
  Container,
  Card,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
} from './styledComponents'

const Create = () => {
  const [values, setValues] = useState({
    id: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Department: '',
  })

  const [errors, setErrors] = useState({})
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    axios
      .get('https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!values.id || values.id <= 0) newErrors.id = 'ID must be positive'
    if (!values.FirstName || values.FirstName.length < 2)
      newErrors.FirstName = 'First Name must have at least 2 characters'
    if (!values.LastName || values.LastName.length < 2)
      newErrors.LastName = 'Last Name must have at least 2 characters'
    if (!values.Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email))
      newErrors.Email = 'Valid email required'
    if (!values.Department || values.Department.length < 2)
      newErrors.Department = 'Department must have at least 2 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      axios
        .post('https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users', values)
        .then(response => {
          setUsers([...users, response.data])
          history.push('/')
        })
        .catch(error => console.error('Error posting data:', error))
    }
  }

  return (
    <Container>
      <Card>
        <Title>Add User</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="id">ID:</Label>
            <Input
              type="number"
              id="id"
              name="id"
              placeholder="Enter ID"
              value={values.id}
              error={errors.id}
              onChange={event => setValues({...values, id: event.target.value})}
            />
            {errors.id && <ErrorMessage>*{errors.id}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="FirstName">First Name:</Label>
            <Input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="Enter First Name"
              value={values.FirstName}
              error={errors.FirstName}
              onChange={e => setValues({...values, FirstName: e.target.value})}
            />
            {errors.FirstName && (
              <ErrorMessage>*{errors.FirstName}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="LastName">Last Name:</Label>
            <Input
              type="text"
              id="LastName"
              name="LastName"
              placeholder="Enter Last Name"
              value={values.LastName}
              error={errors.LastName}
              onChange={event =>
                setValues({...values, LastName: event.target.value})
              }
            />
            {errors.LastName && <ErrorMessage>*{errors.LastName}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="Email">Email:</Label>
            <Input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter Email"
              value={values.Email}
              error={errors.Email}
              onChange={event =>
                setValues({...values, Email: event.target.value})
              }
            />
            {errors.Email && <ErrorMessage>*{errors.Email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="Department">Department:</Label>
            <Input
              type="text"
              id="Department"
              name="Department"
              placeholder="Enter Department"
              value={values.Department}
              error={errors.Department}
              onChange={event =>
                setValues({...values, Department: event.target.value})
              }
            />
            {errors.Department && (
              <ErrorMessage>*{errors.Department}</ErrorMessage>
            )}
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Card>
    </Container>
  )
}
export default Create
