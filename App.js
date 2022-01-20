import { Button, StyleSheet, Text, View } from 'react-native';
import ListarAnimal from './src/components/ListarAnimal';
import IncluirAnimal from './src/components/IncluirAnimal';

export default function App() {
  return (
    <View style={styles.container}>
       <Text>Lista de Animais</Text>
      <IncluirAnimal/>
      <ListarAnimal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export function Incluir() {
}
