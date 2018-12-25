// import React from 'react';
// import { View } from 'react-native';
import Header from '../../components/Header/Header'
import BottomUtilBar from '../../components/BottomUtilBar/BottomUtilBar'
import styles from './homeStyle'
// export default class Home extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header/>
//         <View style={{flex: 80/100}}/>
//         <Snap/>
//       </View>
//     );
//   }
// }
import React from 'react';
import { Text, View, Image,Animated } from 'react-native';
import { Camera, Permissions ,BlurView} from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    img: null
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

  handleSnap = () => {
    if (this.camera) {
      this.camera.pausePreview();
      this.camera.takePictureAsync({ skipProcessing: true, base64: true }).then((data) => {
        this.onPictureSaved(data.base64);
      });
      this.setState({
        foo: Math.random()
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
    if (!this.state.img) {
      return (
        <React.Fragment>
          <Camera style={{ flex: 90 / 100 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 90 / 100,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
            </View>
            <BottomUtilBar primary={this.handleSnap} third={this.handleFlip} secondary={() => console.log("PhotoRoll")} />
          </Camera>
        </React.Fragment>
      );
    }

    return (<React.Fragment>
      <Camera style={{ flex: 90 / 100 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
        <BlurView
          tint={'dark'}
          intensity={70}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
        </BlurView>
      </Camera>
    </React.Fragment>
    )
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

