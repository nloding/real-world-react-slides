import React from 'react'
import { Slide, Heading, Layout, Fill, List, ListItem, Link } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} bold>App Structure</Heading>
      <Heading size={4} bold>There is no "best way" ... but here are some options!</Heading>

      <Layout>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>.js vs .jsx extensions</ListItem>
            <ListItem>Components vs Containers</ListItem>
            <ListItem>
              <Link href="https://codesandbox.io/s/NxqMqyxlD">"Component Folder Pattern"</Link>
            </ListItem>
            <ListItem>
              <Link href="https://codesandbox.io/s/mj4k8q9xxj">"Ducks"</Link> <Link to="https://github.com/erikras/ducks-modular-redux">Original proposal</Link>
            </ListItem>
          </List>
        </Fill>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>Views vs pages vs containers</ListItem>
            <ListItem>Shared packages (npm)</ListItem>
            <ListItem>Monorepo</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
)
