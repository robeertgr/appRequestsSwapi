import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import api from './src/services/api'
import Atores from './src/Atores/Atores'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      atores: []
    }
  }

  async componentDidMount(){
    try{
      const response = await api.get('api/people')
      //console.log(response.data.results)
      this.setState({
        atores: response.data.results
        
      })
    } catch (error) {
      console.log(error)
    }
    
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
        data={this.state.atores}
        keyExtractor={item => item.name}
        renderItem={ ({item}) => <Atores personagem={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

export default App