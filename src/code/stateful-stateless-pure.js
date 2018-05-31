export default `import React from 'react'

// stateful - the component has its own state
class StatefulComponent extends React.Component {
  state = { ... }
  // ...
}

// stateless - no state, rerendered *every time*
const StatelessComponent = (props) => (
  <div>I don't have state, but I have props {props.someProp}</div>
)

// pure - does shallow compare on props, doesn't rerender if same
class PureComponent extends React.PureComponent {
  // still has state!
  state = { ... }
  // ...
}`
