import React from 'react';
import styles from './UtilBarStyle'
import PhotoRoll from './PhotoRoll'
import { View } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <PhotoRoll/>
                <View style={styles.camera} />
            </View>
        )
    }
}

