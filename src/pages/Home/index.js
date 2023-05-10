import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles.js';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home(){
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App de abertura de conta</Text>
      <Image style={styles.image} source={require("./../../../assets/conta-bancaria-app.png")}></Image>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('form')}>
        <Text style={styles.textoButton}>Criar conta</Text>
        <FontAwesome name="user-plus" size={25} color="#ffffff"/>
      </TouchableOpacity>
    </View>
  )
}