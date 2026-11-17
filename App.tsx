import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Maincard from './Maincard';
import { useState } from 'react';

export default function App() {
  const nombre = "Kenneth";
  const apellido = "Hernandez";
  const [isLoading, setIsloading] = useState(false);

  const btntitle = isLoading ? "Mostrar" : "Cargar";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mi nombre es {nombre} {apellido}</Text>
      <StatusBar style="auto" />
      <Button title={btntitle} onPress={() => setIsloading(!isLoading)}/>

      <Maincard loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text:{color: '#000000'} 
});