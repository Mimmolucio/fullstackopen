import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const ex = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]



  return (
    <div>
      <Header course={course} />
      <Content ex={ex} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />

    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}



const Total = (props) => {
  return (
    <p>
      Number of exercises {props.ex1 + props.ex2 + props.ex3}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {

  return (
      <div>
        <Part part={props.ex[0].part} exercises={props.ex[0].exercises} />
        <Part part={props.ex[1].part} exercises={props.ex[1].exercises} />
        <Part part={props.ex[2].part} exercises={props.ex[2].exercises} />
      </div>
  )
}


export default App
