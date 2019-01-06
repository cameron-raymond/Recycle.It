import React from 'react';
import style from './modalStyle'
import { colours, sizes } from '../../assets/standardized'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Title extends React.PureComponent {
    returnIcon = () => {
        iconName = 'redo'
        if (this.props.icon == null){
            return null
        }else if (this.props.icon > 0) {
            iconName = 'trash'
        }else if (this.props.icon == 0){
            iconName = 'heart'
        }else{
            iconName = 'redo'
        }
        return <Icon name={iconName} size={sizes.largestIcon} color={colours.icon} />
    }
    render() {
        return (
            <View style={style.titleContainer}>
                {this.returnIcon()}      
                <Text style={style.title}>{this.props.children}</Text>
            </View>
        );
    }
}

