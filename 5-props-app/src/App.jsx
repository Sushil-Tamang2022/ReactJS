import React from 'react'
import CourseInfo from './components/CourseInfo'

const courseName = "ReactJS"
const instructor = "Sushil Tamang"
const duration = 4
const App = () => {
  return (
    <div>
      <CourseInfo courseName={courseName} instructor={instructor} duration={duration}/>
    </div>
  )
}

export default App