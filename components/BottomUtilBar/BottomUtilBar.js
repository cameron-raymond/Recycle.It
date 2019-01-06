import React from 'react';
import styles from './UtilBarStyle'
import Icon from './Icon'
import { TouchableOpacity, Animated } from 'react-native';

export default class BottomUtil extends React.PureComponent {
    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(1)
        this.animateUtil = new Animated.Value(0)
    }
    _animateUtil = (val) => {
        return Animated.timing(
            this.animateUtil,
            { useNativeDriver: true, toValue: val }
        )
    }
    _animateButton = (size) => {
        return Animated.spring(
            this.springValue,
            {
                useNativeDriver: true,
                toValue: size,
                friction: 30,
            }
        )
    }
    _closeUtil = () => {
        this.animateUtil.setValue(0)
        Animated.stagger(20, [this._animateButton(0), this._animateUtil(200)]).start()
    }
    _handleButton = () =>{
        this._closeUtil();
        {this.props.primary ? this.props.primary() : null}
    }

    animateBack = () =>{
        Animated.stagger(20, [this._animateButton(1), this._animateUtil(0)]).start()
    }
    _bringUtilBack = () => {
        setTimeout(this.animateBack, 5)
        
    }

    render() {
        return (
            <Animated.View style={[styles.container, { transform: [{ translateY: this.animateUtil }] }]}>
                <Icon onPress={this.props.secondary} icon="image">PhotoRoll</Icon>
                <TouchableOpacity
                    style={styles.cameraPos}
                    onPressIn={() => this._animateButton(1.25).start()}
                    onPress={this._handleButton}
                    >
                    <Animated.View style={[styles.camera, { transform: [{ scale: this.springValue }] }]} />
                </TouchableOpacity>
                <Icon onPress={this.props.third} icon="retweet">Flip</Icon>
            </Animated.View>
        )
    }
}

