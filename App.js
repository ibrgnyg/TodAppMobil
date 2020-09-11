import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Button,FlatList ,useEffect} from 'react-native';
import axios from 'react-native-axios';

class App  extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      isLoading: true
    };
  }
  
  list() {
    axios.get('http://localhost:60938/api/todos')
    .then(response => this.setState({result:response.data}))
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });


      
  }
  componentDidMount (){
    this.list();
  }
  deletetodo (){
   
    alert("");
  }
  
  render(){
    return(
      <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Bügün Ne yapacaksın?"/>


      <View style={styles.btn}>
       <Button title="Ekle" color='#4DB7FE' ></Button>
      </View>
      {/* <View style={styles.btna}>
        <Button title="A-Z" ></Button>
      </View>
      <View style={styles.btnz}>
      <Button title="Z-A" > </Button>
      </View>
      <View style={styles.btncomp}>
        <Button title="Tamamlandı" color="green"></Button>
      </View>*/ }


    <FlatList
      data={this.state.result}
      renderItem={({item}) => 
        <View >
          <Text style={styles.item} >{item.todoName}</Text>
          <Button style={styles.menuButton} onPress={() => this.deletetodo(item.id)} title="Sil" color="red" >
          </Button>
        </View> 
      }
    />
  

     
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f4df8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22
  },

  input:{
  
  borderWidth:8,
  borderColor:'#eee',
  backgroundColor:'#FFFFFF',
  padding: 10,
  margin:0,
  marginRight:140,
  width:260,
  borderRadius:6,
  top:30
  },
   
  btn :{
   // padding:10,
    marginLeft:180,
   top:-20,
    

  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 59,
    color:"#858A8E",
    fontWeight: 'bold',
    backgroundColor:"#fff",
    top:22,
    width:380,
    borderRadius:4
  },
 btna:{
   padding:4,
   marginRight:80
 },
 btnz:{
  top:-40,
  marginLeft:3
 },
 btncomp:{
  top:-74,
  marginLeft:157
 }

  
 
});

export default App;

