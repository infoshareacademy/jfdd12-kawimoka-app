import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useForm } from '../hooks/useForm'
import { signUp } from '../services/AuthService'

const SignUpForm = () => {
  const { state, handleChange } = useForm({
    email: 'test+1@example.com',
    password: 'test123',
    firstName: 'Jim',
    lastName: 'Doe'
  })

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Create your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              value={state.email}
              name={'email'}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={state.password}
              name={'password'}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              placeholder='First name'
              value={state.firstName}
              name={'firstName'}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              placeholder='Last name'
              value={state.lastName}
              name={'lastName'}
              onChange={handleChange}
            />

            <Button
              color='teal'
              fluid
              size='large'
              onClick={() => {
                console.log(state)
                signUp(state)
              }}>
              Create account
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default SignUpForm
