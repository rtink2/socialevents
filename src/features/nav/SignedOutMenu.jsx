import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer';

export default function SignedOutMenu({setAuthenticated}) {
  const dispatch = useDispatch()
    return (
        <Menu.Item position='right'>
        <Button onClick={() => dispatch(openModal({modalType: 'LoginForm'}))} inverted color='orange' content='Login' />
        <Button
          inverted
          color='teal'
          content='Register'
          style={{ marginLeft: '0.5em' }}
        />
      </Menu.Item>
    );
}