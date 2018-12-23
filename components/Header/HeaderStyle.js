import { StyleSheet } from "react-native"
import {colours} from '../../assets/colours'

export default StyleSheet.create({
    container: {
        flex: 10 / 100,
        paddingBottom: 4,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: colours.header,
    },
    help:{
        position: 'absolute',
        right: 30,
        bottom: 7
    }
    
})