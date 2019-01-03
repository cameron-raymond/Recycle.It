import React from 'react';
import { TouchableOpacity } from 'react-native';
import {sizes} from '../../assets/standardized'
import LottieView from 'lottie-react-native';

export default class Close extends React.PureComponent {
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
                        width: sizes.largeIcon,
                        height: sizes.largeIcon
                    }}
                    speed={0.7}
                    loop={false}
                    source={require('../../assets/close.json')}
                />
            </TouchableOpacity>
        );
    }
}