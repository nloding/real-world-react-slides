import React from 'react'
import { Slide, Heading, S, Text, Link } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} caps>
        Real World React
      </Heading>

      <Text margin="30px 0 0" textColor="purple" bold textAlign="left">
        Nathan Loding
      </Text>

      <Text textAlign="left" textSize="1.3rem">
        Application Development Consultant, <Link href="https://www.ostusa.com/">OST</Link><br />
        Lead Developer/Co-founder, <Link href="https://www.carecircle.com/">CareCircle</Link><br />
        <Link href="https://twitter.com/NathanLoding">@NathanLoding</Link>, <Link href="http://nloding.com/"><S type="strikethrough">nloding.com</S></Link>
      </Text>

      <Text margin="50px 0 0" textSize="1rem" textAlign="left" textColor="pink">
        <Link textColor="pink" href="https://github.com/nloding/real-world-react">https://github.com/nloding/real-world-react</Link><br />
        <Link textColor="pink" href="https://github.com/nloding/real-world-react-slides">https://github.com/nloding/real-world-react-slides</Link>
      </Text>
    </Slide>
)
