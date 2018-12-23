import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header/Header'
import Snap from '../../components/BottomUtilBar/BottomUtilBar'
import styles from './homeStyle'
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={{flex: 80/100}}/>
        <Snap/>
      </View>
    );
  }
}

