import React  from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'
// import TestMap from './TestMap'
// import TestPlaceInput from './TestPlaceInput'
import { increment, decrement } from './testReducer'

export default function Sandbox() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.test.data)
  // const defaultProps = {
  //   center: {
  //     lat: 34.0522,
  //     lng: 118.2437
  //   },
  //   zoom: 11
  // }
  // const [location, setLocation] = useState(defaultProps)

  // function handleSetLocation(latLng) {
  //   setLocation({...location, center: {lat: latLng.lat, lng: latLng.lng}})
  // }

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
      {/* <div style={{marginTop: 15}}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div> */}
    </>
  )
}
