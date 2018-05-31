import React from 'react'
import { Slide, Heading, Layout, Fill, Image, List, ListItem, Link } from 'spectacle'

import ReduxSvg from '../images/redux.svg'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={1} bold>What is Redux?</Heading>

      <Layout>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>A predictable state container for Javascript apps</ListItem>
            <ListItem>Unidirectional data flow (top to bottom)</ListItem>
            <ListItem>Immutable state, actions, action creators, reducers</ListItem>
            <ListItem>Can be used without React</ListItem>
          </List>
        </Fill>
        <Fill>
          <List margin="0 1rem 0">
            <ListItem>Many alternatives: Flux, MobX, Reflux, RxJs</ListItem>
            <ListItem>
              <Link href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">
                You Might Not Need Redux
              </Link>
            </ListItem>
          </List>
          <Image src={ReduxSvg} />
        </Fill>
      </Layout>
    </Slide>
)
