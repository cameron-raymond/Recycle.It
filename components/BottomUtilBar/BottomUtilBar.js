import React from 'react';
import styles from './UtilBarStyle'
import Flip from './Flip'
import PhotoRoll from './PhotoRoll'
import { View, TouchableOpacity, Animated} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { disabled: false };

        this.springValue = new Animated.Value(1)
    }
    _handleButton = () => {
        
        this.springValue.setValue(1)
        Animated.spring(
            this.springValue,
            {
                toValue: 0,
                friction: 30,
            }
        ).start()
        this.props.primary()
        this.setState({disabled: true})
    }

    render() {
        return (
            <View style={styles.container}>
                <PhotoRoll onPress={this.props.secondary} />
                <TouchableOpacity
                    disabled={this.state.disabled}
                    style={styles.cameraPos}
                    onPress={this._handleButton}>
                    <Animated.View style={[styles.camera, {transform: [{ scale: this.springValue }]}]} />
                </TouchableOpacity>

                <Flip onPress={this.props.third} />
            </View>
        )
    }
}

