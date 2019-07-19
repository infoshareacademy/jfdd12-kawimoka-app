import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { signIn } from '../services/AuthService'
import { useForm } from '../hooks/useForm'
import { useAuth } from '../hooks/useAuth'

const LoginForm = props => {
  const isLoggedIn = useAuth()
  const { state, handleChange } = useForm({
    email: '',
    password: ''
  })

  if (isLoggedIn) {
    const redirectUrl =
      props.location.state && props.location.state.from && props.location.state.from.pathname

    return <Redirect to={redirectUrl ? redirectUrl : '/'} />
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
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

            <Button
              color='teal'
              fluid
              size='large'
              onClick={() => {
                signIn(state.email, state.password)
              }}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/sign-up'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm
