import { StyleSheet , Dimensions} from "react-native"
import {colours} from '../../assets/standardized'

let width = Dimensions.get('window').width
export default StyleSheet.create({
    container: {
        flex: 10 / 100,
        flexDirection: 'row',
        padding: 30,
        alignSelf: 'stretch',
        backgroundColor: colours.header,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cameraPos:{
        position: 'absolute',
        top: -50,
        left: (width/2)-130/2,
    },
    camera: {
        backgroundColor: '#666',
        width: 130,
        height: 130,
        borderRadius: 130 / 2
    },
    photoRoll: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flip: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
    
})