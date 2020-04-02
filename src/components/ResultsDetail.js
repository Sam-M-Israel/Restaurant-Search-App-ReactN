import React from "react";
import { Text, StyleSheet, Image, View} from "react-native";


const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.imageStyles} source={{ uri: result.image_url }}/>
        <Text style={styles.nameStyles}>{result.name}</Text>
        <Text style={styles.reviewStyles}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    imageStyles: {
        height: 120,
        width: 250, 
        borderRadius: 4,
        marginBottom: 5
    }, 
    nameStyles: {
        fontWeight: 'bold'
    },
    reviewStyles: {
        
    }
});

export default ResultsDetail;
