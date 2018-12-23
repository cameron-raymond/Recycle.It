import { StyleSheet } from "react-native"
import {colours} from '../../assets/colours'
export default StyleSheet.create({
    container: {
        flex: 10 / 100,
        padding: 30,
        alignSelf: 'stretch',

        backgroundColor: colours.icon,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        position: 'absolute',
        top: -50,
        backgroundColor: '#666',
        width: 130,
        height: 130,
        borderRadius: 130 / 2
    },
    photoRoll: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
    }
    
})