import React from 'react'
import { Slide, Heading, Text, Link } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={2} caps>
        explore a redux app
      </Heading>

      <Link textSize="3rem" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos">CodeSandbox</Link>

      <Text margin="50px 0 0" textSize="1rem" textAlign="left" textColor="pink">
        This code is directly from the Redux docs:
        <Link textColor="pink" href="https://redux.js.org/basics/example-todo-list">https://redux.js.org/basics/example-todo-list</Link>
      </Text>
    </Slide>
)
