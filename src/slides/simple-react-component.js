import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

import ReactSimpleExample from '../code/react-simple'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        A simple React component
      </Heading>

      <CodePane lang="javascript" source={ReactSimpleExample} theme="dark" />
    </Slide>
)
