import React from 'react';
import { TouchableOpacity } from 'react-native';
import {sizes} from '../../assets/standardized'
import LottieView from 'lottie-react-native';

export default class Recycle extends React.PureComponent {
    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
                <LottieView
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: sizes.largestIcon,
                        height: sizes.largestIcon
                    }}
                    speed={0.7}
                    source={require('../../assets/bouncing_heart.json')}
                />
            </TouchableOpacity>
        );
    }
}