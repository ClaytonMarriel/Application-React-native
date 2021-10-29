import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 400,
        height:'100%'
    },
    contentBottom:{
        flex:4, 
        backgroundColor: "white", 
        marginBottom:10,
        display: 'flex',
    },
    ButtonStop: {
        display: 'flex',
        flexDirection:'row',
        width: 344,
        height: 48,
        backgroundColor: '#FFF',
        justifyContent:'center',
        borderRadius: 100,
        alignItems: 'center',
        textAlign:'center',
        marginLeft: 24,
        marginBottom: 10,
        marginTop:100,
        borderWidth: 1,
        borderColor: '#FF2525',
    },

    TextButton:{
        color: "#FF2525",
        fontSize: 16,
    }
})

export default styles

