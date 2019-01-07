import React from 'react';
import style from './modalStyle'
import CloseButton from './CloseButton'
import {prediciton} from '../../assets/standardized'
import { Modal, Text, View } from 'react-native';
import Title from './Title'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: true,
    };
  }

  setModalVisible = (visible) => {
    this.props.onClose()
    this.setState({ modalVisible: visible });
  }

  
  parsePredicition = (jsonArr) => {
    if (jsonArr[0].value < 0.10) {
      return prediciton['notSure']
    }  
    let id = jsonArr[0].id
    if (id === 'recycling') {
      id = jsonArr[1].id
      return jsonArr[1].value < 0.20 ? prediciton['recycling'] : prediciton[id]
    } 
    return prediciton[id]
  }



  render() {
    let predJson = this.parsePredicition(this.props.json)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={this.setModalVisible}
      >
        <View style={style.modal}>
          <CloseButton onPress={this.setModalVisible} style={style.closeButton} />
          <Title icon={predJson.icon}>{predJson.title}</Title>
          <Text style={style.body}>{predJson.content}</Text>

        </View>
      </Modal>

    );
  }
}