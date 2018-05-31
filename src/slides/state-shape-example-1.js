import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

import Example from '../code/state-shape-example-1'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        Normalizing state
      </Heading>

      <CodePane lang="javascript" source={Example} />
    </Slide>
)
