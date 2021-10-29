import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Times = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.containerText}>_____________</Text>
      <Text style={styles.textTime}>tempo</Text>
      <Text style={styles.time}>00:00:02</Text>
    
      <View style={styles.contentTime}>
          <Text style={styles.contentDistance}>distância</Text>
          <Text style={styles.contentDistance}>velocidade(km/h)</Text>
      </View>

      <View style={styles.contentTraining}>
          <Text style={styles.textStopWatch}>00:00:02</Text>
          <Text style={styles.textStopWatch}>31.2</Text>
      </View>

    </View>
    )
}

export default Times;