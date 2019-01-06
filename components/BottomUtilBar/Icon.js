import React from 'react';
import styles from './UtilBarStyle'
import { colours, sizes } from '../../assets/standardized'
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


export default class MyIcon extends React.PureComponent {
    render() {
        return <TouchableOpacity onPress={this.props.onPress} style={styles.icon}><Icon name={this.props.icon} size={sizes.smallIcon} color={colours.icon} /><Text style={styles.text}>{this.props.children}</Text></TouchableOpacity>
    }
}

