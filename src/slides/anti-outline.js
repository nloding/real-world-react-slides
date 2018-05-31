import React from 'react'
import { Slide, Heading, S, Text, Layout, Fill, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} caps bold>
        <S type="strikethrough" bold>Anti-Outline</S>
      </Heading>

      <Text margin="10px 0 20px" textColor="purple" bold>aka, what we aren't covering</Text>

      <Layout>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>React/Redux 101</ListItem>
            <ListItem>ES6/ES7</ListItem>
            <ListItem>Tooling</ListItem>
            <ListItem>Testing</ListItem>
            <ListItem>Deployment</ListItem>
          </List>
        </Fill>
        <Fill>
          <List margin="0  0 0 1rem">
            <ListItem>Server side rendering/isomorphic views</ListItem>
            <ListItem>React Native</ListItem>
            <ListItem>CSS-in-JS (JSS)</ListItem>
            <ListItem>The new Context <span role="img" aria-label="sadface">😥</span></ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
)
