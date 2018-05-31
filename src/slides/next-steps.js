import React from 'react'
import { Slide, Heading, Layout, Fill, List, ListItem, Link } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} bold>Next steps</Heading>

      <Layout>
        <Fill>
          <List>
            <ListItem><Link href="https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b">Context API</Link></ListItem>
            <ListItem><Link href="https://github.com/reduxjs/reselect">Memoization (reselect)</Link></ListItem>
            <ListItem><Link href="https://tonyhb.gitbooks.io/redux-without-profanity/content/normalizer.html">Normalizr</Link></ListItem>
            <ListItem><Link href="https://survivejs.com/webpack/building/code-splitting/">Code splitting</Link></ListItem>
            <ListItem><Link href="https://github.com/markerikson/react-redux-links/blob/master/react-redux-testing.md">Testing</Link></ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
)
