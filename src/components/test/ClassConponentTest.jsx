import React from "react";
import PropTypes from "prop-types";
class ClassComponent extends React.Component {
  // props默认值，规则设置
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
  };
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    support: 10,
    unsupport: 3,
  };
  render() {
    const { title, num } = this.props;
    let { support, unsupport } = this.state;
    return (
      <div>
        我是class组件,title:{title},num:{num}
        <p>支持{support}</p>
        <p>支持{unsupport}</p>
        <button
          onClick={() => {
            this.setState({ support: support + 1 });
          }}
        >
          支持
        </button>
        <button
          onClick={() => {
            this.state.unsupport++;
            this.forceUpdate();
          }}
        >
          反对
        </button>
      </div>
    );
  }
  UNSAFE_componentWillMount() {
    console.log("willmount");
  }
  componentDidMount() {
    console.log("didmount");
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextProps, nextState);
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE_componentWillUpdate", this.state, nextProps, nextState);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("componentDidUpdate", this.state, nextProps, nextState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
export default ClassComponent;
