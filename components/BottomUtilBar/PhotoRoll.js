import React from 'react';
import styles from './UtilBarStyle'
import { colours, sizes } from '../../assets/standardized'
import { Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


export default class PhotoRoll extends React.PureComponent {
    onPress = () => Alert.alert(
        'Whoops',
        'We\'re still working on this feature; try again later!',
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        { cancelable: false }
    )

    render() {
        return <TouchableOpacity onPress={this.onPress} style={styles.photoRoll}><Icon name="image" size={sizes.smallIcon} color={colours.icon} /><Text>Photo Roll</Text></TouchableOpacity>
    }

}

