import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'
import { useUser } from '../hooks/useUser'
// import { useUsers } from '../hooks/useUsers'

const Profile = () => {
  const user = useUser()
  return (
    <>
      <Container style={{ minHeight: '78vh' }}>
        <Form>
          <Form.Group widths={4}>
            <Form.Input
              label='First name'
              placeholder={user && user.firstName}
              value={user && user.firstName}
            />
          </Form.Group>
          <Form.Group widths={4}>
            <Form.Input label='Weight' placeholder='Weight' />
            <Form.Input label='Height' placeholder='Height' />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default Profile
