import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import api from '../services/api'

class Atores extends Component {
  constructor(props) {
    super(props);
    //console.log("teste", props)
  }

  mostrarFilmes(guardaFilmes) {
    Alert.alert(
      "Filmes relacionados",
      guardaFilmes.join(", "),  // .join é uma função de uma lista
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
      ],
    );
  }

  async verFilmes() {
    let guardaFilmes = [];
    let urlFilmes = this.props.personagem.films;
    for (let url of urlFilmes) {
      let titulo = await this.requisicaoFilmes(url);
      guardaFilmes.push(titulo);
    }
    this.mostrarFilmes(guardaFilmes)
  }

  async requisicaoFilmes(urlFilme) {
    try {
      const response = await api.get(urlFilme);
      return response.data.title;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    //console.log(this.props.personagem.name);
    return (
      <View style={styles.container}>
        <Text style={styles.nomeAtores}>{this.props.personagem.name}</Text>
        <TouchableOpacity onPress={() => this.verFilmes()} >
          <Text style={styles.btnVerFilmes}>Ver filmes</Text>
          
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnVerFilmes:{
    fontSize: 15,
    backgroundColor: '#000',
    color: '#FFF',
    margin: 10,
    padding: 10,
    borderRadius: 8
  },
  nomeAtores:{
    fontSize: 20
  }
})

export default Atores;
