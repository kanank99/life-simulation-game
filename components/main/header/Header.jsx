import { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { styles } from "./header.style";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import AnimateNumber from 'react-native-animate-number'

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
                    <Text style={styles.happinessText}><AnimateNumber value={100} 
                    formatter={(val) => {
                        return parseFloat(val).toFixed(0)
                    }}/>
                    %</Text>
                </View>
                <View style={styles.statsHealth}>
                    <Image style={{
                                width: 20,
                                height: 20,
                        }} source = {require('../icons/health.png')} 
                    />
                    <Text style={styles.healthText}><AnimateNumber value={100} 
                    formatter={(val) => {
                        return parseFloat(val).toFixed(0)
                    }}/>
                    %</Text>
                </View>
                <View style={styles.statsMentalHealth}>
                    <Image style={{
                                width: 20,
                                height: 20,
                        }} source = {require('../icons/mentalhealth.png')} 
                    />
                    <Text style={styles.mentalHealthText}><AnimateNumber value={100} 
                    formatter={(val) => {
                        return parseFloat(val).toFixed(0)
                    }}
                    />%</Text>
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
                backgroundColor="#6CC644"
                // backgroundColorOnComplete="#6CC644"
                />
            </View>
            <View style={styles.moneyBox}>
                <View>
                    <Text style={styles.moneyText}>Debit</Text>
                    <Text style={styles.money}><AnimateNumber value={props.debitBalance} 
                        formatter={(val) => {
                            return '$ ' + parseFloat(val).toFixed(2)
                        }}/>
                    </Text>
                </View>
                <View>
                    <Text style={styles.moneyText}>Savings</Text>
                    <Text style={styles.money}><AnimateNumber value={props.savingsBalance} 
                        formatter={(val) => {
                            return '$ ' + parseFloat(val).toFixed(2)
                        }}/>
                    </Text>
                </View>
            </View>
        </View>
    </View>
    )
  }
  
  export { Header };