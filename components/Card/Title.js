import React from 'react';
import style from './modalStyle'
import { colours, sizes } from '../../assets/standardized'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Title extends React.PureComponent {
    iconName = () => {
        if (this.props.icon > 0) {
            return 'trash'
        }
        return this.props.icon == 0 ? 'redo' : 'heart'
    }
    render() {
        return (
            <View style={style.titleContainer}>
                {this.props.icon ? <Icon name={this.iconName()} size={sizes.largestIcon} color={colours.icon} /> : null}             
                <Text style={style.title}>{this.props.children}</Text>
            </View>
        );
    }
}

