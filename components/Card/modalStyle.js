import { StyleSheet , Dimensions} from "react-native"
import {colours} from '../../assets/standardized'

let width = Dimensions.get('window').width
export default StyleSheet.create({
    modal: {
        alignSelf:'center',
        height: 400,
        width: 300,
        flexDirection: 'row',
        padding: 30,
        backgroundColor: colours.icon,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
    },
   
    
})