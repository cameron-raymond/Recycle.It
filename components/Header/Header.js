import React from 'react';
import styles from './HeaderStyle'
import Icon from 'react-native-vector-icons/EvilIcons';
import { colours, sizes } from '../../assets/standardized'
import Info from './Info'
import { View } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="camera" size={sizes.largeIcon} color={colours.icon}  />
                <View style={styles.help}><Info/></View>
            </View>
        )
    }
}

