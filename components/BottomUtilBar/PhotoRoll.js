import React from 'react';
import styles from './UtilBarStyle'
import {colours} from '../../assets/colours'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class PhotoRoll extends React.PureComponent{
    render(){
        console.log(colours.icon)
        return <View style={styles.photoRoll}><Icon name="photo-library" size={50} color={colours.icon}/><Text>Photo Roll</Text></View>
   }

}

