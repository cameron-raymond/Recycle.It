import { StyleSheet, Dimensions } from "react-native"
import { colours } from '../../assets/standardized'

let height = Dimensions.get('window').height
export default StyleSheet.create({
    modal: {
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: height - 400,
        height: 400,
        width: 300,
        padding: 30,
        backgroundColor: colours.header,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: colours.icon,
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5

    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    title: {
        fontSize: 30,
        // colour: colours.header
    },
    body: {
        fontSize: 15,
        // colour: colours.header
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderBottomColor: colours.icon,
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 0.5
    }
})