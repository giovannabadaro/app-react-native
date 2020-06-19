import React,{ useState, useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar, Button} from 'react-native'
// import { Container } from './styles';
import api from '../src/services/api'
// todos o componentes vem com Display: flex
// não há herança de estilos

function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  },[])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="blue"/>
      <View style={styles.container}>
        {projects.map(project => 
          <Text key={project.id}>{project.title}</Text>
          ) }
      </View>
    </>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#bdbdbd"
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default App;