import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex:13/100,
        
        alignSelf: 'stretch',

        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
      },
      camera: {
        position: 'absolute',
        top: -50,
        backgroundColor: '#666',
        width: 130,
        height: 130,
        borderRadius: 130/2
     }
})