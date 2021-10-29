import {StyleSheet} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: "column"
    },
    
    content: {
        flex: 6, 
        height: "30%"
    },
    
    contentBottom: {
        flex:1
    }

})

export default styles

