import { Button, StyleSheet, View } from "react-native";

export default function App() {
    return (

        <View style={estilos.botao}> 
           <Button
                    onPress={Incluir}
                    title="Incluir Animal"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
        </View>
    )
}

export function Incluir(){
    
}


const estilos  = StyleSheet.create({

    botao:{
      backgroundColor: '#fff',
      paddingTop: 100,
      marginVertical:8,
      marginHorizontal:16,
      fontSize: 18,
      color: '#fff'
    }

});