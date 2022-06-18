import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'
import { increment, decrement } from './testReducer'

export default function Sandbox() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.test.data)
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data} </h3>

      <Button
        onClick={() => dispatch(increment(20))}
        content='Increment'
        color='purple'
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content='Decrement'
        color='orange'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data }, dimmer: 'blurring' }))
        }
        content='Open Modal'
        color='teal'
        
      />
    </>
  )
}
