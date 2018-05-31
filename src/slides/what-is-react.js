import React from 'react'
import { Slide, Heading, Layout, Fill, Image, List, ListItem } from 'spectacle'

import ReactSvg from '../images/react.svg'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} bold>What is React?</Heading>

      <Layout>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>React is a library for providing a view of data rendered as HTML</ListItem>
            <ListItem>Abstracts DOM (Virtual DOM), diffs changes and re-renders</ListItem>
            <ListItem>Component hierarchy</ListItem>
          </List>
        </Fill>
        <Fill>
          <Image width="100%" height="100%" src={ReactSvg} />
        </Fill>
      </Layout>
    </Slide>
)
