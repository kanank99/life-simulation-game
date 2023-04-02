


import { useState } from 'react';
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./navigation.style";


const Navigation = (props) => {

    const [careerOpacity, setCareerOpacity] = useState(opacityLevel);
    const [identityOpacity, setIdentityOpacity] = useState(1);
    const [recreationOpacity, setRecreationOpacity] = useState(opacityLevel);
    const [relationshipsOpacity, setRelationshipsOpacity] = useState(opacityLevel);
    const [healthOpacity, setHealthOpacity] = useState(opacityLevel);
    const [bankOpacity, setBankOpacity] = useState(opacityLevel);

    const opacityLevel = 0.5

    const renderCareer = () => {
        props.setCareer(true);
        props.setIdentity(false);
        props.setRecreation(false);
        props.setRelationships(false);
        props.setHealth(false);
        props.setBank(false);
        opacitate();
        setCareerOpacity(1);
        
    }

    const renderIdentity = () => {
        props.setCareer(false);
        props.setIdentity(true);
        props.setRecreation(false);
        props.setRelationships(false);
        props.setHealth(false);
        props.setBank(false);
        opacitate();
        setIdentityOpacity(1);
    }
    const renderRecreation = () => {
        props.setCareer(false);
        props.setIdentity(false);
        props.setRecreation(true);
        props.setRelationships(false);
        props.setHealth(false);
        props.setBank(false);
        opacitate();
        setRecreationOpacity(1);
    }
    const renderRelationships = () => {
        props.setCareer(false);
        props.setIdentity(false);
        props.setRecreation(false);
        props.setRelationships(true);
        props.setHealth(false);
        props.setBank(false);
        opacitate();
        setRelationshipsOpacity(1);
    }
    const renderHealth = () => {
        props.setCareer(false);
        props.setIdentity(false);
        props.setRecreation(false);
        props.setRelationships(false);
        props.setHealth(true);
        props.setBank(false);
        opacitate();
        setHealthOpacity(1);
    }
    const renderBank = () => {
        props.setCareer(false);
        props.setIdentity(false);
        props.setRecreation(false);
        props.setRelationships(false);
        props.setHealth(false);
        props.setBank(true);
        opacitate();
        setBankOpacity(1);
    }

    const opacitate = () => {
        setCareerOpacity(opacityLevel);
        setIdentityOpacity(opacityLevel);
        setRecreationOpacity(opacityLevel);
        setRelationshipsOpacity(opacityLevel);
        setHealthOpacity(opacityLevel);
        setBankOpacity(opacityLevel);
    }

return (
    <View style={styles.navigation}>
        <Pressable onPress={renderBank}> 
            <Image style={{
                width: 50,
                height: 50,
                opacity: bankOpacity,
            }} source = {require('../icons/bank-icon.png')} />
        </Pressable>
        <Pressable onPress={renderCareer}> 
            <Image style={{
                width: 50,
                height: 50,
                opacity: careerOpacity,
            }} source = {require('../icons/career-icon.png')} />
        </Pressable>
        <Pressable onPress={renderHealth}> 
            <Image style={{
                width: 50,
                height: 50,
                opacity: healthOpacity,
            }} source = {require('../icons/health-icon.png')} />
        </Pressable>
        <Pressable onPress={renderRecreation}> 
            <Image style={{
                width: 50,
                height: 50,
                opacity: recreationOpacity,
            }} source = {require('../icons/recreation-icon.png')} />
        </Pressable>
        <Pressable onPress={renderRelationships}> 
            <Image style={{
                width: 50,
                height: 50,
                opacity: relationshipsOpacity,
            }} source = {require('../icons/relationships-icon.png')} />
        </Pressable>
        <Pressable onPress={renderIdentity}> 
            <Image style={{
                width: 50,
                height: 50,
                opacity: identityOpacity,
            }} source = {require('../icons/identity-icon.png')} />
        </Pressable>
    </View>
    )
  }
  
  export { Navigation };

  /* 
            setIdentity={setIdentity}
            setRecreation={setRecreation}
            setRelationships={setRelationships}
            setCareer={setCareer}
            setHealth={setHealth}
            setBank={setBank}
  */