import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

import Example from '../code/stateful-stateless-pure'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        Stateful vs stateless vs pure
      </Heading>

      <CodePane lang="javascript" source={Example} />
    </Slide>
)
