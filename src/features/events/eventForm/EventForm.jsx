import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { Button, Header, Segment } from 'semantic-ui-react'
import cuid from 'cuid'
import { Link } from 'react-router-dom'
import { createEvent, updateEvent } from '../eventsActions'
import * as Yup from 'yup'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import { categoryData } from '../../../app/api/categoryOptions'
import MyDateInput from '../../../app/common/form/MyDateInput'

export default function EventForm({ match, history }) {
  const dispatch = useDispatch()
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  )
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Please provide a title'),
    category: Yup.string().required('Please provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required('Please provide a city'),
    venue: Yup.string().required('Please provide a venue'),
    date: Yup.string().required(),
  })

  return (
    <Segment clearing raised>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: 'Adele',
                  attendees: [],
                  hostPhotoURL: '/assets/user.png',
                })
              )
          history.push('/events')
        }}
      >
        {({isSubmitting, dirty, isValid}) => (
        <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />
          <MyTextInput name='title' placeholder='Event Title' />
          <MySelectInput
            name='category'
            placeholder='Event Category'
            options={categoryData}
          />
          <MyTextArea
            name='description'
            placeholder='Event Description'
            rows={3}
          />
          <Header sub color='teal' content='Event Location Details' />
          <MyTextInput name='city' placeholder='Event City' />
          <MyTextInput name='venue' placeholder='Event Venue' />
          <MyDateInput
            name='date'
            placeholderText='Event Date'
            dateFormat='MMMM d, yyyy h:mm a'
            timeFormat='h:mm'
            showTimeSelect
            timeCaption='time'
            autocomplete='off'
          />
          <Button
            loading={isSubmitting}
            disabled={!isValid || !dirty || isSubmitting}
            type='submit'
            floated='right'
            color='blue'
            inverted
            compact
            content='Submit'
          />
          <Button
            disabled={isSubmitting}
            as={Link}
            to='/events'
            type='submit'
            floated='right'
            color='red'
            inverted
            compact
            content='Cancel'
          />
        </Form>
        )}
      </Formik>
    </Segment>
  )
}
