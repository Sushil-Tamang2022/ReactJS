import React from 'react'
import Course from './components/Course';

const courses = [
  {
    id: 501,
    title: "React for Beginners",
    instructor: "Mandip Dhakal",
    duration: "4 weeks"
  },
  {
    id: 502,
    title: "Advanced JavaScript",
    instructor: "Sita Sharma",
    duration: "6 weeks"
  },
  {
    id: 503,
    title: "Python for Data Science",
    instructor: "Sushil Tamang",
    duration: "8 weeks"
  }
];


const App = () => {
  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id}>
          <h1>{course.title}</h1>
          <h3>{course.instructor}</h3>
          <h3>{course.duration}</h3>
        </Course>
      ))}
    </div>
  )
}

export default App