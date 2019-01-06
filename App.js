import React from 'react';
import Home from './scenes/home/Home'
import { Image, Text, View } from 'react-native';
import { Asset, AppLoading } from 'expo';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
     <Home/>
    );
  }

  async _cacheResourcesAsync() {
    await Expo.Font.loadAsync({
        'Nunito-Regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
        'Nunito-Light': require('./assets/fonts/Nunito/Nunito-Light.ttf'),
        'Nunito-LightItalic': require('./assets/fonts/Nunito/Nunito-LightItalic.ttf'),
      });
  }
}