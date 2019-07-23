import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'
// import { useUsers } from '../hooks/useUsers'

const Profile = props => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group widths={4}>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
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
