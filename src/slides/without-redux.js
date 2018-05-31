import React from 'react'
import { Slide, Heading, Image, Layout, Fill } from 'spectacle'

import WithoutRedux from '../images/without-redux.png'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        without redux
      </Heading>

      <Layout>
        <Fill>
          <Image src={WithoutRedux} />
        </Fill>
      </Layout>

    </Slide>
)
