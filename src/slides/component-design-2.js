import React from 'react'
import { Slide, Heading, Layout, Link, Fill, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={3} bold>Component design</Heading>

      <Layout>
        <Fill>
          <List>
            <ListItem>
              Atomic design (or other component design systems){' '}
              <Link href="https://blog.bitsrc.io/building-a-consistent-ui-design-system-4481fb37470f">Example</Link>, <Link href="https://medium.com/@lewisplushumphreys/how-were-using-component-based-design-5f9e3176babb">Example</Link>
            </ListItem>
            <ListItem>Stateful vs stateless vs React.PureComponent (pure)</ListItem>
            <ListItem>Configuration objects vs props</ListItem>
            <ListItem>HOCs, FACCs, render props, compound components, oh my!</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
)
