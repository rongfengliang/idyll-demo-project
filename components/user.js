const React = require('react');

class User extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props}>
        <span >
        {this.props.name}
        </span>
      </div>
    );
  }
}

module.exports = User;
