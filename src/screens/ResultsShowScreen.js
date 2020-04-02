import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, FlatList, Linking} from "react-native";
import yelp from "../api/yelp";



const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() =>{
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <View style={styles.container}>
        <Text 
          onPress={()=>{Linking.openURL(`tel:${result.phone}`)}}
          style={styles.generalInfo}
          >Phone Number: {result.phone}
        </Text>
        <Text 
          onPress={() => {Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${result.name}+${result.location.city}`)}}
          style={styles.generalInfo}>Address: {result.location.address1}, {result.location.city}</Text>
        {result.location.cross_streets? <Text style={styles.generalInfo}>{result.location.cross_streets}</Text>: null}
      </View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyles} source={{ uri: item }} />
        }}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 200,
    width: 300, 
    borderRadius: 4,
    marginBottom: 2,
    alignSelf: 'center'
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
    
},
  generalInfo: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5
},
container: {
    margin: 10
}
});

export default ResultsShowScreen;
