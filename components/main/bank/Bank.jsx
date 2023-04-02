import { useState } from 'react';
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { styles } from "./bank.style";
import { LinearGradient } from 'expo-linear-gradient';


const Bank = (props) => {


return (
    <ScrollView style={styles.scrollContainer} bounces={false}>
        <LinearGradient
            colors={["#e7f0fd","#accbee"]}
            locations={[0, 1]}
            style={styles.linearGradient}
         >
            <View style={styles.allContent}>
                <View style={styles.titleBox}>
                    <Text>Capital Valley Bank</Text>
                    <View style={styles.titleTextBox}>
                        <Text style={styles.titleText}>Good Afternoon,</Text>
                        <Text style={styles.titleText}>Name</Text>
                    </View>                    
                </View>
            </View>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
            <Text>.</Text>
        </LinearGradient>
    </ScrollView>
    
    )
  }
  
  export { Bank };


