import React, { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import cuid from 'cuid'

export default function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent }) {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }
  const [values, setValues] = useState(initialValues)

  function handleFormSubmit() {
    selectedEvent
    ? updateEvent({...selectedEvent, ...values})
    : createEvent({
      ...values,
      id: cuid(),
      hostedBy: 'Adele',
      attendees: [],
      hostPhotoURL: '/assets/user.png',
    })
    setFormOpen(false)
  }

  function handleInputChanges(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit Event' : 'Create New Event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChanges(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChanges(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChanges(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChanges(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChanges(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChanges(e)}
          />
        </Form.Field>
        <Button
          type='submit'
          floated='right'
          color='blue'
          inverted
          compact
          content='Submit'
        />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          color='red'
          inverted
          compact
          content='Cancel'
        />
      </Form>
    </Segment>
  )
}
