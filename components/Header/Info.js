import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import Anchor from './Link'
import Icon from 'react-native-vector-icons/EvilIcons';
import {sizes, colours} from '../../assets/standardized'
import style from './HeaderStyle'
import Title from '../Card/Title'
import CloseButton from '../Card/CloseButton'

export default class Info extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={style.modal}>
                        <CloseButton onPress={() => { this.setModalVisible(false); }} style={style.closeButton} />
                        <Title>RecycleIt</Title>

                        <Text style={style.body}>Welcome to RecycleIt! The app that uses <Text style={{fontStyle: 'italic'}}>computer vision</Text> to help reduce recycling contamination!{"\n"}{"\n"}To get started: grab an item, take a picture with the middle icon in a well lit setting, and the app will try and give information on how to dispose of it properly!
                        {"\n"}{"\n"}For more information, all references and the app's source code visit our <Anchor href="https://github.com/cameron-raymond/Recycle.It" >Github repo</Anchor></Text>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Icon name="gear" size={sizes.smallIcon} color={colours.icon} />
                </TouchableHighlight>
            </View>
        );
    }
}