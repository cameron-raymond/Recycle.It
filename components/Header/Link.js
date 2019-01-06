import { Linking, Text } from 'react-native';
import React from 'react';
import {colours} from '../../assets/standardized'

export default class Anchor extends React.PureComponent {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text {...this.props} onPress={this._handlePress} style={{color: colours.blue}}>
        {this.props.children}
      </Text>
    );
  }
}