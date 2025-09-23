import {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import 'reactjs-popup/dist/index.css'
import {
  Container,
  Title,
  Card,
  TopBar,
  AddButton,
  TableWrapper,
  Table,
  Th,
  Td,
  ActionButton,
  PaginationWrapper,
  PageButton,
  PopupContent,
  PopupMessage,
  PopupButtons,
  ConfirmButton,
} from './styledComponents'

const Home = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(5)
  const history = useHistory()
  const [deleteId, setDeleteId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios
      .get('https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const handleDelete = async id => {
    try {
      await axios.delete(
        `https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`,
      )
      setUsers(users.filter(user => user.id !== id))
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const confirmDelete = id => {
    setDeleteId(id)
    setIsOpen(true)
  }

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const paginatedUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(users.length / usersPerPage)

  return (
    <Container>
      <Title>List of Users</Title>
      <Card>
        <TopBar>
          <AddButton to="/create">Add User</AddButton>
        </TopBar>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Department</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map(user => (
                <tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.FirstName}</Td>
                  <Td>{user.LastName}</Td>
                  <Td>{user.Email}</Td>
                  <Td>{user.Department}</Td>
                  <Td>
                    <ActionButton
                      variant="edit"
                      title="Edit"
                      onClick={() => history.push(`/read/${user.id}`)}
                    >
                      <FaEdit size={20} />
                    </ActionButton>
                    <ActionButton
                      variant="delete"
                      title="Delete"
                      onClick={() => confirmDelete(user.id)}
                    >
                      <MdDelete size={20} />
                    </ActionButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        <PaginationWrapper>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
        </PaginationWrapper>

        <Popup
          open={isOpen}
          closeOnDocumentClick
          onClose={() => setIsOpen(false)}
          modal
        >
          {close => (
            <PopupContent>
              <PopupMessage>
                Are you sure you want to delete this user?
              </PopupMessage>
              <PopupButtons>
                <ConfirmButton
                  variant="yes"
                  onClick={() => {
                    handleDelete(deleteId)
                    close()
                  }}
                >
                  Yes
                </ConfirmButton>
                <ConfirmButton variant="no" onClick={() => close()}>
                  No
                </ConfirmButton>
              </PopupButtons>
            </PopupContent>
          )}
        </Popup>
      </Card>
    </Container>
  )
}

export default Home
