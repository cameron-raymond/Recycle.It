import React from 'react';
import styles from './UtilBarStyle'
import Flip from './Flip'
import PhotoRoll from './PhotoRoll'
import { View, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <PhotoRoll onPress={this.props.secondary}/>
                <TouchableOpacity style={styles.camera} onPress={this.props.primary}/>
                <Flip onPress={this.props.third}/>
            </View>
        )
    }
}

