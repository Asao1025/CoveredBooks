import { Suspense, React } from 'react'
import Loading from './loading'
import WaitComponent from './wait'

export default function Page() {
  return (
    <div>
      <h1>Loading Test</h1>
      <Suspense fallback={<Loading />}>
        <WaitComponent />
        <img src= './image/pops/testPop1.jpg'/>
      </Suspense>
    </div>
  )
}