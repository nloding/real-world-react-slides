import React from 'react'
import { Slide, Heading, Image, Layout, Fill } from 'spectacle'

import WithRedux from '../images/with-redux.png'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={4} caps>
        with redux
      </Heading>

      <Layout>
        <Fill>
          <Image src={WithRedux} />
        </Fill>
      </Layout>

    </Slide>
)
