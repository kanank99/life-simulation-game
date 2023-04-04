import { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, StatusBar } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { styles } from "./newlife.style";
import { generateName } from '../generateName';

const Newlife = (props) => {

    // Gender Image onPress

    const setMaleSetting = () => {
        props.setMale(true);
        props.setFemale(false);
        props.setGenderHeader('Male')
    }
    const setFemaleSetting = () => {
        props.setMale(false);
        props.setFemale(true);
        props.setGenderHeader('Female')
    }
    const setHeteroSetting = () => {
        props.setHetero(true);
        props.setHomo(false);
        props.setBi(false);
        props.setSexHeader('Heterosexual')
    }
    const setHomoSetting = () => {
        props.setHetero(false);
        props.setHomo(true);
        props.setBi(false);
        props.setSexHeader('Gay')
    }
    const setBiSetting = () => {
        props.setHetero(false);
        props.setHomo(false);
        props.setBi(true);
        props.setSexHeader('Bisexual')
    }
    const openMain = () => {
        props.start((start) => start = true)
    }
    const generateFirstName = () => {
        props.onChangeFirst(generateName());
    }
    const generateLastName = () => {
        props.onChangeLast(generateName());
    }

    return (
    <View style={styles.container} >
        <StatusBar
        barStyle={'light-content'}
      />
        <Stack.Screen 
            options={ {
                title: '✦ New Life ✦', 
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
            }}
        />
        <View style={styles.nameBox}>
            <View>
                <View style={styles.namePlusRandom}>
                    <Text style={styles.h3}>
                        First Name 🧑
                    </Text>
                    <Pressable onPress={generateFirstName}>
                        <Image style={{
                        width: 35,
                        height: 35,
                    }} source = {require('../icons/random-icon.png')} />
                    </Pressable>
                </View>
                <TextInput 
                    style={styles.input}
                    onChangeText={props.onChangeFirst}
                    placeholder='Tap to Enter'
                    placeholderTextColor={'grey'}
                    value={props.firstName}
                />
            </View>
            <View>
                <View style={styles.namePlusRandom}>
                    <Text style={styles.h3}>
                        Last Name 🌳
                    </Text>
                    <Pressable onPress={generateLastName}>
                        <Image style={{
                        width: 35,
                        height: 35,
                    }} source = {require('../icons/random-icon.png')} />
                    </Pressable>
                </View>
                <TextInput 
                    style={styles.input}
                    onChangeText={props.onChangeLast}
                    placeholder='Tap to Enter'
                    placeholderTextColor={'grey'}
                    value={props.lastName}
                />
            </View>
            
        </View>
        <View style={styles.genderBox}>
            <View style={styles.genderAndSexHeader}>
                <Text style={styles.h3}>
                    Gender 🚻
                </Text>
                <Text style={{alignSelf: 'flex-end', fontSize: 18}}>{props.genderHeader}</Text>
            </View>
            
            <View style={styles.genderOptions}>
                <Pressable onPress={setMaleSetting}> 
                    <Image style={{
                        width: 125,
                        height: 125,
                        opacity: props.isMale ? 1 : 0.4,
                    }} source = {require('../icons/male-icon.png')} />
                </Pressable>
                <Pressable onPress={setFemaleSetting}>
                    <Image style={{
                        width: 125,
                        height: 125,
                        opacity: props.isFemale ? 1 : 0.4,                       
                    }} source = {require('../icons/female-icon.png')} />
                </Pressable>
            </View>
            <View style={styles.genderAndSexHeader}>
                <Text style={styles.h3}>
                    Sexuality 💕
                </Text>
                <Text style={{alignSelf: 'flex-end', fontSize: 18}}>{props.sexHeader}</Text>
            </View>
            <View style={styles.sexualityOptions}>
                <Pressable onPress={setHeteroSetting}>
                    <Image style={{
                                width: 100,
                                height: 100,
                                opacity: props.isHetero ? 1 : 0.4,
                    }} source = {require('../icons/hetero-icon.png')} />
                </Pressable>
                <Pressable onPress={setHomoSetting}>
                    <Image style={{
                                width: 100,
                                height: 100,
                                opacity: props.isHomo ? 1 : 0.4,
                    }} source = {require('../icons/homo-icon.png')} />
                </Pressable>
                <Pressable onPress={setBiSetting}>
                    <Image style={{
                                width: 100,
                                height: 100,
                                opacity: props.isBi ? 1 : 0.4,
                    }} source = {require('../icons/bi-icon.png')} />
                </Pressable>                
            </View>
        </View>
        <Pressable style={styles.button} onPress={openMain}>
            <Text style={styles.buttonText}>Start Life</Text>
        </Pressable>

    </View>
    )
  }
  
  export { Newlife };