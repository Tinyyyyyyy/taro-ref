import { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import "./index.less";

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  onLoad() {
    console.log("onLoad 123");
  }

  componentDidShow() {
    console.log("componentDidShow 123");
  }

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}

export default connect(undefined, undefined, undefined, { forwardRef: true })(
  Index
);
