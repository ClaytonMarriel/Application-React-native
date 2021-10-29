import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 8, backgroundColor: "white"
    },
    containerText: {
        alignItems: 'center', 
        textAlign: 'center', 
        fontWeight: 'bold',
        fontFamily: 'NeuzeitSBook'
    },
    textTime: {
        alignItems: 'center', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        marginTop: 30, 
        fontSize: 24
    },
    time: {
        alignItems: 'center', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        marginTop: 20, 
        fontSize: 64
    },
    contentTime:{
        display:'flex', 
        justifyContent:'space-evenly', 
        alignItems:'center', 
        flexDirection:"row", 
        marginTop:70, 
    },
    contentDistance:{
        alignItems:'center', 
        fontWeight:'bold',
    },
   
    contentTraining:{
        display:'flex', 
        justifyContent:'space-evenly', 
        alignItems:'center', 
        flexDirection:"row", 
        marginTop:5, 
    },
    textStopWatch:{
        alignItems:'center', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:32,
    },

    ButtonStop: {
        width: 344,
        height: 48,
        backgroundColor: 'red',
        borderRadius: 100,
       
        alignItems: 'center',
        textAlign:'center',
        marginLeft: 24,
        marginBottom: 10,
       marginTop:100
    },
    TextButton:{
        color: "#FFF"
    }
    
})

export default styles

