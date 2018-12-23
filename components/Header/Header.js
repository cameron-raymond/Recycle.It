import React from 'react';
import styles from './HeaderStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colours} from '../../assets/colours'
import { Text, View } from 'react-native';

export default class Home extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <Icon name="fullscreen-exit" size={50} color={colours.icon}/>
            <View style={styles.help}><Icon name="help-outline" size={30} color={colours.icon}/></View>

            </View>
        )
    }
}

