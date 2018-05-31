import React from 'react';
import { Deck, Slide } from 'spectacle'

import prismLight from 'spectacle/lib/themes/default/prism.light'
import prismDark from 'spectacle/lib/themes/default/prism.dark'

import createTheme from 'spectacle-theme-nova';

import 'normalize.css';
import './fonts.css'

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-javascript'

const theme = createTheme(null, {
  global: {
    body: {
      fontFamily: 'Georgia',
    },
    code: {
      fontFamily: 'DankMono-Regular, FiraCode'
    }
  },
  prism: {
    light: prismLight,
    dark: prismDark
  }
});

const slidesImports = [
  import("./slides/title"),
  import("./slides/anti-outline"),
  import("./slides/outline"),
  import("./slides/what-is-react"),
  import("./slides/why-use-react"),
  import("./slides/simple-react-component"),
  import("./slides/what-is-redux"),
  import("./slides/without-redux"),
  import("./slides/with-redux"),
  import("./slides/redux-diagram"),
  import("./slides/exploring-redux-app"),
  import("./slides/app-structure"),
  import("./slides/state-shape"),
  import("./slides/state-shape-example-1"),
  import("./slides/state-shape-example-2"),
  import("./slides/component-design-1"),
  import("./slides/component-design-2"),
  import("./slides/stateful-stateless-pure"),
  import("./slides/configuration-props"),
  import("./slides/hoc"),
  import("./slides/exercises"),
  import("./slides/next-steps"),
];


export default class Presentation extends React.Component {
  state = {
    slides: Array(slidesImports.length).fill(<Slide key="loading" />)
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;

    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {slides.map((slide, key) => React.cloneElement(slide, { key }))}
      </Deck>
    );
  }
}
