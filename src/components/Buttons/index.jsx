import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const ButtonTraining = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={styles.ButtonStart}
          onPress={() => navigation.navigate("StartTraining")}
        >
          <Text style={styles.TextButton}>Iniciar Atividade</Text>
          <Image
            source={require('../../../assets/next.png')}
            />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ButtonTraining;
