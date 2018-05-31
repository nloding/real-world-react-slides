import React from 'react'
import { Slide, Heading, Image, Layout, Fill } from 'spectacle'

import ReduxDiagram from '../images/redux-diagram.gif'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        redux in a picture
      </Heading>

      <Layout>
        <Fill>
          <Image src={ReduxDiagram} />
        </Fill>
      </Layout>

    </Slide>
)
