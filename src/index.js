import React,{ useState, useEffect} from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
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

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `"Novo Projeto ${Date.now()}"`,
      owner: 'Giovanna Badaró'
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="purple"/>

      <FlatList 
        style={styles.container}
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project })=>( //convertendo uma variável item em uma variável project 
          <Text style={styles.container}>
            {project.title}
          </Text>
        )} 
      />

     <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.8}
      onPress={handleAddProject}
      >

       <Text style={styles.buttonText}>
         Adicionar um projeto
       </Text>

     </TouchableOpacity>

      {/* <View style={styles.container}>
        {projects.map(project => 
          <Text key={project.id}>{project.title}</Text>
          ) }
      </View> */}
    </>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: "#eee",
    fontWeight: "bold"
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: 'purple',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems:'center'

  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'

  }
});

export default App;
