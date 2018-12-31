import React from 'react';
import { Text, View } from 'react-native';
import { Camera, Permissions, BlurView } from 'expo';
import { classifyImg } from '../../computation/Clarifai'
import Header from '../../components/Header/Header'
import BottomUtilBar from '../../components/BottomUtilBar/BottomUtilBar'
import Loading from '../../components/LoadingAnimation/LoadingAnimation'
import styles from './homeStyle'

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    img: null,
    loading: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleFlip = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }

  handleSnap = async () => {
    if (this.camera) {
      this.camera.pausePreview();
      this.camera.takePictureAsync({ skipProcessing: true, base64: true }).then((data) => {
        console.log(data)
        classifyImg(data.base64);
      });
      this.setState({
        loading: true
      });

    }
  }

  onPictureSaved = async photo => {
    this.setState({ img: photo });
  }

  handlePhotoRoll = () => {
    console.log("PhotoRoll")
  }

  preOrPostPicture = () => {
    return (
      <React.Fragment>
        <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
          <BlurView intensity={this.state.loading ? 95 : 0} tint={'dark'} style={{ flex: 1, backgroundColor: 'transparent' }}>
            <View style={{ flex: 90 / 100, backgroundColor: 'transparent', flexDirection: 'row' }} />
            {this.state.loading ? <Loading /> : null}
            <BottomUtilBar primary={this.handleSnap} third={this.handleFlip} secondary={() => console.log("PhotoRoll")} />
          </BlurView>
        </Camera>
      </React.Fragment>
    );
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Header />
          {this.preOrPostPicture()}
        </View>
      );
    }
  }
}

