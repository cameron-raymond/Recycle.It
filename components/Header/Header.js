import React from 'react';
import styles from './HeaderStyle'
import Icon from 'react-native-vector-icons/EvilIcons';
import { colours, sizes } from '../../assets/standardized'
import { View } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="chart" size={sizes.largeIcon} color={colours.icon} />
                <View style={styles.help}><Icon name="gear" size={sizes.smallIcon} color={colours.icon} /></View>
            </View>
        )
    }
}

