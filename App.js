import React, { cloneElement } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Alert } from 'react-native';
import { useState, useEffect } from 'react';

const request = async(callback) =>{
  const Response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/12/modelos");
  const parsed = await Response.json();
  callback(parsed.modelos);
}

export default function App() {
  const [registros, setRegistros] = useState([]);
  
  useEffect(()=>{
    request(setRegistros)
  }, []
  );
  
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>API Carros</Text>

      <FlatList
        data={registros}
        renderItem={
          ({item}) =>
          <View style={styles.div}>
            <Text style={styles.apitxt}>Código: {item.codigo}</Text>
            <Text style={styles.apitxt}>Modelo: {item.nome}</Text>
          </View>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#696969'
  },
  titulo: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  div: {
    margin: 10,
    backgroundColor: '#f7223a',
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff'
  },
  apitxt:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
});
