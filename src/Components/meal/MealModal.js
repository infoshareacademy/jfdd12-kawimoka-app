import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

export const MealModal = props => (
  <Modal trigger={<Button>Scrolling Content Modal</Button>}>
    <Modal.Header>{props.meal.name}</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='/images/wireframe/image.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {_.times(8, i => (
          <Image key={i} src='/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
        ))}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)


