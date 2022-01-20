import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import api from "../../services/api";

export default function ListarAnimal() {

    const[ animais, setAnimais] = React.useState([]);

    React.useEffect( () => {
        api.get('animal').then(  (response)  => {
                setAnimais(response.data);
                console.log(animais);
        } );
    },[]);

   

    return (
      <View>
       <FlatList
          data = {animais}
          renderItem = {  ({item}) => 
             <View style={estilos.item}>
                 <Text style={estilos.prod}>{item.nome}</Text>
            </View>
          }
       />

      </View>
    );
}

const estilos  = StyleSheet.create({

item:{
  backgroundColor: '#008',
  padding: 12,
  marginVertical:8,
  marginHorizontal:16
},
prod:{
  fontSize: 18,
  color: '#fff'
}

    
});

