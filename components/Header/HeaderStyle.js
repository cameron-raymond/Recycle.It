import { StyleSheet, Dimensions } from "react-native"
import { colours } from '../../assets/standardized'

let height = Dimensions.get('window').height
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
    },
    modal: {
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: height - 380,
        height: 400,
        width: 300,
        padding: 30,
        backgroundColor: colours.header,
        borderRadius: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    body: {
        fontSize: 15,
        // colour: colours.header
    }
    
})