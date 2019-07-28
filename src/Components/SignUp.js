import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useForm } from '../hooks/useForm'
import { signUp } from '../services/AuthService'
import { useAuth } from '../hooks/useAuth'
import { Redirect } from 'react-router-dom'

const SignUpForm = props => {
  const isLoggedIn = useAuth()
  const { state, handleChange } = useForm({
    email: '',
    password: '',
    firstName: ''
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
              required
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
              required
            />
            <Form.Input
              fluid
              placeholder='First name'
              value={state.firstName}
              name={'firstName'}
              onChange={handleChange}
              required
            />
            <Button
              color='teal'
              fluid
              size='large'
              onClick={() => {
                signUp(state)
              }}>
              Create account
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default SignUpForm
