import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export const ButtonShortCard = () => (
  <div>
    <Button icon labelPosition='left'>
      <Icon name='heart' />
     Add to fav
    </Button>
    <Button icon labelPosition='right'>
      Add
      <Icon name='add square' />
    </Button>
    <Button icon labelPosition='left'>
      Close
      <Icon name='window close' />
    </Button>
    <Button icon labelPosition='right'>
      More info
      <Icon name='arrow circle right' />
    </Button>
  </div>
)


