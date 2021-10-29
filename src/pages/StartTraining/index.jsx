import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

import Maps from "../../components/Maps";
import Times from '../../components/Times'


const StartTraining = () => {
  return(
    <View style={styles.container}>
      <View style={{ flex: 6}}>
        <Maps />
      </View>
      <Times />
      <View style={styles.contentBottom}>
          <TouchableOpacity style={styles.ButtonStop}>
            <Text style={styles.TextButton}>Parar</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default StartTraining;