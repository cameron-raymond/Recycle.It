import React from 'react';
import style from './modalStyle'
import { colours, sizes } from '../../assets/standardized'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class Title extends React.PureComponent {
    render() {
        return (
            <View style={style.titleContainer}>
                <Icon name='anchor' size={sizes.largestIcon} color={colours.icon} />
                <Text style={style.title}>{this.props.children}</Text>
            </View>
        );
    }
}

