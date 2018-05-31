import React from 'react'
import { Slide, Heading, Layout, Fill, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} bold>State Shape</Heading>

      <Layout>
        <Fill>
          <List>
            <ListItem>State should be normalized</ListItem>
            <ListItem>It doesn't have to match the API result ...</ListItem>
            <ListItem>... but remember that when POSTing back to the data source</ListItem>
            <ListItem>Controversial opinion: don't be afraid of connecting lower level components</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
)
