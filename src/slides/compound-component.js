import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

import CompoundComponent from '../code/compound-component'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        Compound Component
      </Heading>

      <CodePane lang="javascript" source={CompoundComponent} />
    </Slide>
)
