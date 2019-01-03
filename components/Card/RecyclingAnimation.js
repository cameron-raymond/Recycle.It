import React from 'react';
import LottieView from 'lottie-react-native';
import {sizes} from '../../assets/standardized'


export default class RecyclingHeart extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        style={{height: sizes.largestIcon, width: largestIcon}}
        source={require('../../assets/bouncing_heart.json')}
      />
    );
  }
}