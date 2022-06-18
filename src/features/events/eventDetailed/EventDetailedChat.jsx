import React from 'react'
import { Segment, Header, Button, Comment, Form } from 'semantic-ui-react'

export default function EventDetailedChat() {
  return (
    <>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{ border: 'none' }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Adele</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Raven</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src='/assets/user.png' />
                <Comment.Content>
                  <Comment.Author as='a'>Sarah Paulson</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Raven you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Jen Lawrence</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content='Add Reply'
              labelPosition='left'
              icon='edit'
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
  )
}
