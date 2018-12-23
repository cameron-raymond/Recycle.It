import React from 'react';
import {Text, View } from 'react-native';
import Snap from '../../components/BottomUtilBar/BottomUtilBar'
import styles from './homeStyle'
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 87/100}}/>
        <Snap/>
      </View>
    );
  }
}

