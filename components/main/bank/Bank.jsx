import { useState } from 'react';
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { styles } from "./bank.style";
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import AnimateNumber from 'react-native-animate-number'


const Bank = (props) => {

    // WHEN DEPOSITING INTO SAVINGS, THE AMOUNT IS SUBTRACTED FROM DEBIT BALANCE

    const deposit10Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.debitBalance * .1) * -1).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.debitBalance * .1)).toFixed(2))
    }
    const deposit25Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.debitBalance * .25) * -1).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.debitBalance * .25)).toFixed(2))
    }
    const deposit50Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.debitBalance * .5) * -1).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.debitBalance * .5)).toFixed(2))
    }
    const deposit100Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.debitBalance * 1) * -1).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.debitBalance * 1)).toFixed(2))
    }

    // WHEN WITHDRAWING FROM SAVINGS, THE AMOUNT IS ADDED TO DEBIT BALANCE

    const withdraw10Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.savingsBalance * .1)).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.savingsBalance * .1) * -1).toFixed(2))
    }
    const withdraw25Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.savingsBalance * .25)).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.savingsBalance * .25) * -1).toFixed(2))
    }
    const withdraw50Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.savingsBalance * .5)).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.savingsBalance * .5) * -1).toFixed(2))
    }
    const withdraw100Percent = () => {
        props.setSavingsBalance((props.savingsBalance - (props.savingsBalance * 1)).toFixed(2))
        props.setDebitBalance((props.debitBalance - (props.savingsBalance * 1) * -1).toFixed(2))
    }

return (
    <ScrollView style={styles.scrollContainer} bounces={false}>
        <LinearGradient
            colors={["#e7f0fd","#accbee"]}
            locations={[0, 1]}
            style={styles.linearGradient}
         >
            <View style={styles.allContent}>
                <View style={styles.titleBox}>
                    <Text style={styles.bankName}>Capital Valley Bank</Text>
                    <View style={styles.titleTextBox}>
                        <Text style={styles.titleText}>Good Afternoon,</Text>
                        <Text style={styles.titleTextName}>{props.firstName}</Text>
                    </View>
                    
                                       
                </View> 
                <Shadow distance={1} startColor={'#e7f0fd'} endColor={'#accbee'} style={styles.debitBox} > 
                    <View >
                        <Text style={styles.debitAccount}>Debit Account ...7292</Text>
                        <View style={styles.balanceBox}>
                            <Text style={styles.debitBalance}><AnimateNumber value={props.debitBalance} 
                                formatter={(val) => {
                                    return '$ ' + parseFloat(val).toFixed(2)
                                }}/></Text>
                            <Text style={styles.debitBalanceExtra}>Available Balance</Text>
                        </View>
                    </View> 
                </Shadow>
                <Shadow distance={1} startColor={'#e7f0fd'} endColor={'#accbee'} style={styles.savingsBox} > 
                    <View >
                        <Text style={styles.debitAccount}>Savings Account ...3195</Text>
                        <View style={styles.balanceBox}>
                            <Text style={styles.debitBalance}><AnimateNumber value={props.savingsBalance} 
                        formatter={(val) => {
                            return '$ ' + parseFloat(val).toFixed(2)
                        }}/></Text>
                            <View style={styles.interestRateBox}>
                                <Text style={styles.debitBalanceExtra}>Available Balance</Text>
                                <Text style={styles.interestRateText}>Interest Rate: 3.87%</Text>
                            </View>
                            <View style={styles.depositWithdrawSavingsBox}>
                                <Text style={styles.depositText}>  Deposit</Text>
                                <View style={styles.depositOptions}>
                                    <Pressable style={styles.depositOption} onPress={deposit10Percent}>
                                        <Text style={styles.depositOptionText}>10%</Text>
                                    </Pressable>
                                    <Pressable style={styles.depositOption} onPress={deposit25Percent}>
                                        <Text style={styles.depositOptionText}>25%</Text>
                                    </Pressable>
                                    <Pressable style={styles.depositOption} onPress={deposit50Percent}>
                                        <Text style={styles.depositOptionText}>50%</Text>
                                    </Pressable>
                                    <Pressable style={styles.depositOption} onPress={deposit100Percent}>
                                        <Text style={styles.depositOptionText}>100%</Text>
                                    </Pressable>
                                </View>
                                <Text style={styles.depositText}>  Withdraw</Text>
                                <View style={styles.depositOptions}>
                                    <Pressable style={styles.depositOption} onPress={withdraw10Percent}>
                                        <Text style={styles.depositOptionText}>10%</Text>
                                    </Pressable>
                                    <Pressable style={styles.depositOption} onPress={withdraw25Percent}>
                                        <Text style={styles.depositOptionText}>25%</Text>
                                    </Pressable>
                                    <Pressable style={styles.depositOption} onPress={withdraw50Percent}>
                                        <Text style={styles.depositOptionText}>50%</Text>
                                    </Pressable>
                                    <Pressable style={styles.depositOption} onPress={withdraw100Percent}>
                                        <Text style={styles.depositOptionText}>100%</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.disclaimer}>  Disclaimer: 0.0001% fee applied after every transaction.</Text>
                    </View> 
                </Shadow>
            </View>
            <Text>.</Text>
        </LinearGradient>
    </ScrollView>
    
    )
  }
  
  export { Bank };


