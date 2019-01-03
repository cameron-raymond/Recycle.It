import React from 'react';
import style from './modalStyle'
import CloseButton from './CloseButton'
import { Modal, Text, View, Alert } from 'react-native';
import Title from './Title'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: true,
    };
    this.prediciton = {
      trash: {
        title: 'Trash',
        icon: '',
        content: 'Throw it out!'
      },
      glass: {
        title: 'Recycling',
        icon: '',
        content: 'Looks like glass!'
      },
      cardboard: {
        title: 'Recycling',
        icon: '',
        content: 'Looks like cardboard!'
      },
      plastic: {
        title: 'Recycling',
        icon: '',
        content: 'Looks like plastic!'
      },
      paper: {
        title: 'Recycling',
        icon: '',
        content: 'Looks like paper!'
      },
      recycling: {
        title: 'Recycling',
        icon: '',
        content: 'Looks like recycling! Not sure exactly what type.'
      },
      notSure: {
        title: 'Uh Oh',
        icon: '',
        content: 'Take a better picture or something we\'re having trouble!'
      }
    }
  }



  setModalVisible = (visible) => {
    this.props.onClose()
    this.setState({ modalVisible: visible });
  }

  test = [
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "paper",
      "name": "paper",
      "value": 0.0015946174,
    },
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "trash",
      "name": "trash",
      "value": 0.0001418803,
    },
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "recycling",
      "name": "recycling",
      "value": 0.00004701897,
    },
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "cardboard",
      "name": "cardboard",
      "value": 0.00001777345,
    },
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "plastic",
      "name": "plastic",
      "value": 0.000008812951,
    },
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "glass",
      "name": "glass",
      "value": 0.0000040495697,
    },
    {
      "app_id": "45700ab42f5e4052a50206501184a55e",
      "id": "metal",
      "name": "metal",
      "value": 0.0000019496931,
    },
  ]
  parsePredicition = (jsonArr) => {
    if (jsonArr[0].value < 0.10) {
      return this.prediciton['notSure']
    }  
    let id = jsonArr[1].value
    if (jsonArr[0].id == 'recycling') {
      return jsonArr[1].value < 0.20 ? this.prediciton['recycling'] : this.prediciton[id]
    } 
    return this.prediciton[id]
  }



  render() {
    let predJson = this.parsePredicition(this.props.json)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
      >
        <View style={style.modal}>
          <CloseButton onPress={this.setModalVisible} style={style.closeButton} />
          <Title icon={predJson.icon} >{predJson.title}</Title>
          <Text style={style.body}>{predJson.content}</Text>

        </View>
      </Modal>

    );
  }
}