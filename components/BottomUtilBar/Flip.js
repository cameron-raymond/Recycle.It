import React from 'react';
import styles from './UtilBarStyle'
import { colours, sizes } from '../../assets/standardized'
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


export default class Flip extends React.PureComponent {
    render() {
        return <TouchableOpacity onPress={this.props.onPress} style={styles.flip}><Icon name="retweet" size={sizes.smallIcon} color={colours.icon} /><Text>Flip</Text></TouchableOpacity>
    }
}

