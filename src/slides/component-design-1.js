import React from 'react'
import { Slide, Heading, Text, BlockQuote, Quote, Cite } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary">
      <Heading size={3} bold>Component design</Heading>

      <Text margin="10px 0 20px" textColor="purple" bold>reusability is key</Text>

      <BlockQuote>
        <Quote>[UI] consistency shouldn’t be enforced but rather achieved.</Quote>
        <Cite>Jonathan Saring, bitsrc.io</Cite>
      </BlockQuote>
    </Slide>
)
