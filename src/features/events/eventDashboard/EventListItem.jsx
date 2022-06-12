import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        {/* delete icon */}
        <Button
          floated='right'
          inverted
          animated='fade'
          compact
          onClick={() => deleteEvent(event.id)}
        >
          <Button.Content hidden style={{color: '#e81a1a'}}>Delete</Button.Content>
          <Button.Content visible>
            <Icon name='trash alternate' color='red' />
          </Button.Content>
        </Button>
        {/* edit icon */}
        <Button
          floated='right'
          inverted
          animated='fade'
          compact
          as={Link}
          to={`/events/${event.id}`}
        >
          <Button.Content hidden style={{color: '#367588'}}>Edit</Button.Content>
          <Button.Content visible>
            <Icon name='edit' color='olive' />
          </Button.Content>
        </Button>
      </Segment>
    </Segment.Group>
  )
}
