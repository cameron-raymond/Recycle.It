import React from 'react';
import styles from './UtilBarStyle'
import Flip from './Flip'
import PhotoRoll from './PhotoRoll'
import { TouchableOpacity, Animated } from 'react-native';

export default class BottomUtil extends React.PureComponent {
    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(1)
        this.animateUtil = new Animated.Value(0)
    }
    _animateUtil = () => {
        return Animated.timing(
            this.animateUtil,
            { useNativeDriver: true, toValue: 200 }
        )
    }
    _animateButton = () => {
        return Animated.spring(
            this.springValue,
            {
                useNativeDriver: true,
                toValue: 0,
                friction: 30,
            }
        )
    }
    _handleButton = () => {
        this.springValue.setValue(1)
        this.animateUtil.setValue(0)
        Animated.stagger(20, [this._animateButton(), this._animateUtil()]).start()
        {this.props.primary ? this.props.primary() : null}
        this.setState({ disabled: true })
    }

    render() {
        return (
            <Animated.View style={[styles.container, { transform: [{ translateY: this.animateUtil }] }]}>
                <PhotoRoll onPress={this.props.secondary} />
                <TouchableOpacity
                    style={styles.cameraPos}
                    onPress={this._handleButton}>
                    <Animated.View style={[styles.camera, { transform: [{ scale: this.springValue }] }]} />
                </TouchableOpacity>
                <Flip onPress={this.props.third} />
            </Animated.View>
        )
    }
}

