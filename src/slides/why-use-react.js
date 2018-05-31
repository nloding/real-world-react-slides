import React from 'react'
import { Appear, Slide, Heading, Text, Layout, Fill, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} bold>Why use React?</Heading>

      <Layout>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>Small, fast, “single purpose” library</ListItem>
            <ListItem>Works well with other libraries and frameworks</ListItem>
            <ListItem>Reusable components fit easily into existing apps, allowing for piece-by-piece migrations</ListItem>
            <ListItem>Helpful error messages with JSX</ListItem>
          </List>
        </Fill>
        <Fill>
          <Appear>
            <div>
              <Text bold textColor="red">Why NOT to use React?</Text>
              <List margin="0  0 0 1rem">
                <ListItem>Looking for an all-in-one solution</ListItem>
                <ListItem>Morally opposed to JSX (HTML in JS)</ListItem>
                <ListItem>App extensively built in another current framework</ListItem>
                <ListItem>Morally opposed to Facebook?</ListItem>
              </List>
            </div>
          </Appear>
        </Fill>
      </Layout>
    </Slide>
)
