import { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { styles } from "./header.style";
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Header = (props) => {

return (
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.statsContainer}>
                <View style={styles.statsHappiness}>
                    <Image style={{
                                width: 20,
                                height: 20,
                        }} source = {require('../icons/happiness.png')} 
                    />
                    <Text style={styles.happinessText}>100%</Text>
                </View>
                <View style={styles.statsHealth}>
                    <Image style={{
                                width: 20,
                                height: 20,
                        }} source = {require('../icons/health.png')} 
                    />
                    <Text style={styles.healthText}>100%</Text>
                </View>
                <View style={styles.statsMentalHealth}>
                    <Image style={{
                                width: 20,
                                height: 20,
                        }} source = {require('../icons/mentalhealth.png')} 
                    />
                    <Text style={styles.mentalHealthText}>100%</Text>
                </View>
            </View>
            <View style={styles.ageContainer}>
                <Text style={styles.ageText}>Age</Text>
                <Text style={styles.age}>23</Text>
                <ProgressBarAnimated
                width={100}
                height={12}
                value={41}
                backgroundColorOnComplete="red"
                // backgroundColorOnComplete="#6CC644"
                />
            </View>
            <Text style={styles.money}>$3278</Text>
        </View>
    </View>
    )
  }
  
  export { Header };