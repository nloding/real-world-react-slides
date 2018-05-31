import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

import Example from '../code/configuration-props'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        Configuration props
      </Heading>

      <CodePane lang="javascript" source={Example} />
    </Slide>
)
