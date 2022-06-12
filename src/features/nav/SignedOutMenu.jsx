import React from 'react';
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOutMenu({setAuthenticated}) {
    return (
        <Menu.Item position='right'>
        <Button onClick={() => setAuthenticated(true)} inverted color='orange' content='Login' />
        <Button
          inverted
          color='grey'
          content='Register'
          style={{ marginLeft: '0.5em' }}
        />
      </Menu.Item>
    );
}