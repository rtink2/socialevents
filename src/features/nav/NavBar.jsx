import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginLeft: '0.5em' }}
          />
          SocialEvents
        </Menu.Item>
        <Menu name='SocialEvents' />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            inverted
            color='olive'
            content='Create Event'
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button inverted color='orange' content='Login' />
          <Button
            inverted
            color='grey'
            content='Register'
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  )
}
