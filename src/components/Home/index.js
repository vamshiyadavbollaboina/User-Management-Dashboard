import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 
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
  // State for storing users fetched from API
  const [users, setUsers] = useState([])
  // Current page number for pagination
  const [currentPage, setCurrentPage] = useState(1)
  // Number of users to display per page
  const [usersPerPage] = useState(5)
  // React Router hook for navigation
  const navigate = useNavigate()
  // Track which user is selected for delete
  const [deleteId, setDeleteId] = useState(null)
  // Popup open/close state
  const [isOpen, setIsOpen] = useState(false)

  // Fetch users from API on component mount
  useEffect(() => {
    axios
      .get('https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  // Delete user by ID
  const handleDelete = async id => {
    try {
      await axios.delete(
        `https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/${id}`,
      )
      // Remove deleted user from state
      setUsers(users.filter(user => user.id !== id))
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  // Open delete confirmation popup
  const confirmDelete = id => {
    setDeleteId(id)
    setIsOpen(true)
  }

  // Pagination calculations
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const paginatedUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(users.length / usersPerPage)

  return (
    <Container>
      {/* Page Title */}
      <Title>List of Users</Title>
      <Card>
        {/* Top bar with Add User button */}
        <TopBar>
          <AddButton to="/create">Add User</AddButton>
        </TopBar>

        {/* Table with users */}
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
              {/* Show "No users" message if empty */}
              {paginatedUsers.length === 0 ? (
                <tr>
                  <Td colSpan="6" style={{textAlign: 'center'}}>
                    No users available
                  </Td>
                </tr>
              ) : (
                paginatedUsers.map(user => (
                  <tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.FirstName}</Td>
                    <Td>{user.LastName}</Td>
                    <Td>{user.Email}</Td>
                    <Td>{user.Department}</Td>
                    <Td>
                      {/* Edit button → navigate to Read page */}
                      <ActionButton
                        variant="edit"
                        title="Edit"
                        onClick={() => navigate(`/read/${user.id}`)}
                      >
                        <FaEdit size={20} />
                      </ActionButton>

                      {/* Delete button → open confirmation popup */}
                      <ActionButton
                        variant="delete"
                        title="Delete"
                        onClick={() => confirmDelete(user.id)}
                      >
                        <MdDelete size={20} />
                      </ActionButton>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </TableWrapper>

        {/* Pagination buttons */}
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

        {/* Delete confirmation popup */}
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
                {/* Confirm delete */}
                <ConfirmButton
                  variant="yes"
                  onClick={() => {
                    handleDelete(deleteId)
                    close()
                  }}
                >
                  Yes
                </ConfirmButton>

                {/* Cancel delete */}
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
