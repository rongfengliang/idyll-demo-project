const React = require('react');

class CustomAppsComponent extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props}>
        <h1 >荣锋亮 demo react 自定义组件</h1>
      </div>
    );
  }
}

module.exports = CustomAppsComponent;
