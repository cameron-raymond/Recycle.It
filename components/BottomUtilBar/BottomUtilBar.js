import React from 'react';
import styles from './UtilBarStyle'

import { Text, View } from 'react-native';

export default class Home extends React.Component {
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.camera}/>
            </View>
        )
    }
}

