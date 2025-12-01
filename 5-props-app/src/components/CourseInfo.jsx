import React from 'react'

const CourseInfo = ({ courseName, instructor, duration }) => {
  return (
    <div>
        <h1>{courseName} taught by {instructor} lasts for {duration} weeks</h1>
    </div>
  )
}

export default CourseInfo