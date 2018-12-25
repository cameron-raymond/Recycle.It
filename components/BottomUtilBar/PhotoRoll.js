import React from 'react';
import styles from './UtilBarStyle'
import {colours, sizes} from '../../assets/standardized'
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class PhotoRoll extends React.PureComponent{
    render(){
        return <TouchableOpacity onPress={this.props.onPress} style={styles.photoRoll}><Icon name="image" size={sizes.smallIcon} color={colours.icon}/><Text>Photo Roll</Text></TouchableOpacity>
   }

}

