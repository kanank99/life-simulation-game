import { useState, useCallback } from 'react';
import { View, Text, StatusBar, TextInput, Image, Pressable } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { styles } from "./main.style";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { Identity } from "./identity/Identity";
import { Career } from "./career/Career";
import { Bank } from "./bank/Bank";
import { Health } from './health/Health'
import { Recreation } from './recreation/Recreation'
import { Relationships } from './relationships/Relationships'


const Main = (props) => {

    // For Rendering  //
    const [showIdentity, setIdentity] = useState(true);
    const [showRecreation, setRecreation] = useState(false);
    const [showRelationships, setRelationships] = useState(false);
    const [showCareer, setCareer] = useState(false);
    const [showHealth, setHealth] = useState(false);
    const [showBank, setBank] = useState(false);

    // === FONTS === //

    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded] = useFonts({
        'Slabo-Regular': require('./Slabo27px-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }    

    return (
    <View style={styles.container} onLayout={onLayoutRootView} >
        <StatusBar
            barStyle={'light-content'}
        />
        <View style={styles.headerAndContentAndNav}>
            <Stack.Screen 
                options={ {
                    header: () => (<Header 
                            debitBalance={props.debitBalance}
                            savingsBalance={props.savingsBalance}
                    />),
                }}
            />
            {showIdentity ? <Identity
                firstName={props.firstName}
             /> : null}
            {showRelationships ? <Relationships /> : null}
            {showRecreation ? <Recreation /> : null}
            {showHealth ? <Health /> : null}
            {showCareer ? <Career /> : null}
            {showBank ? <Bank 
                firstName={props.firstName}
                debitBalance={props.debitBalance}
                setDebitBalance={props.setDebitBalance}
                savingsBalance={props.savingsBalance}
                setSavingsBalance={props.setSavingsBalance}
            /> : null}

            <Navigation
            showIdentity={showIdentity}
            setIdentity={setIdentity}
            showRecreation={showRecreation}
            setRecreation={setRecreation}
            showRelationships={showRelationships}
            setRelationships={setRelationships}
            showCareer={showCareer}
            setCareer={setCareer}
            showHealth={showHealth}
            setHealth={setHealth}
            showBank={showBank}
            setBank={setBank}
        />
        </View>


    </View>
    )
  }
  
  export { Main };