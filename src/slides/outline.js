import React from 'react'
import { Slide, Heading, Text, Layout, Fill, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} caps bold>Outline</Heading>

      <Text margin="10px 0 20px" textColor="purple" bold>aka, what we <em>are</em> covering</Text>

      <Layout>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>Brief React/Redux review</ListItem>
            <ListItem>Debugging</ListItem>
            <ListItem>App structure</ListItem>
          </List>
        </Fill>
        <Fill>
          <List margin="0  0 0 1rem">
            <ListItem>Structure your data store</ListItem>
            <ListItem>Component design</ListItem>
            <ListItem>Reusable components</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
)
