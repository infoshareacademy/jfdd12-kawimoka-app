import { useState } from 'react'

export const useForm = initialState => {
  const [state, setState] = useState(initialState)

  const handleChange = (event, props) => {
    const { name, value } = event.target
    setState({
      ...state,
      [name || props.name]: value || props.value
    })
  }

  return {
    state,
    handleChange
  }
}
