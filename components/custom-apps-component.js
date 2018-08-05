const React = require('react');
const User =  require("./user");
class CustomAppsComponent extends React.Component {
  clickdemo(e) {
    console.log(e)
    alert(e)
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props}>
        <p  onClick={this.clickdemo} style={{fontSize:"40px"}}>{this.props.name} demo react 自定义组件</p>
        <User {...props} />
      </div>
    );
  }
}

module.exports = CustomAppsComponent;
