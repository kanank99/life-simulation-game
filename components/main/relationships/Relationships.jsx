import { useState, useCallback } from 'react';
import { View, Text, ScrollView, Image, Pressable, Modal } from "react-native";
import { styles } from "./relationships.style";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { Shadow } from 'react-native-shadow-2';
import { FireSwipe } from './FireSwipe';


const Relationships = (props) => {

    const [fireSwipeModalVisible, setFireSwipeModalVisible] = useState(false);

    // === FONTS === //

    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded] = useFonts({
        'Fasthand-Regular': require('../Fasthand-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
        await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }    

    // === Swipe === //

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <ScrollView style={styles.scrollContainer} onLayout={onLayoutRootView} bounces={false}>
            <LinearGradient
                colors={["#ec366e","#f5b161"]}
                locations={[0, 1]}
                style={styles.linearGradient}
            >
                <View style={styles.allContent}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Love</Text>
                    </View>
                    <Shadow distance={1} startColor={'#e7f0fd'} endColor={'#accbee'} style={styles.fireSwipeBox} >
                        <View style={styles.fireSwipeIconAndTitle}>
                            <View style={styles.fireSwipeIcon}>
                                <Image source={require('../icons/fireSwipe-icon.png')} style={styles.fireSwipeImage} />
                            </View>
                            <Text style={styles.fireSwipeTitle}>FireSwipe</Text>
                        </View>
                        <View style={styles.fireSwipeDescriptionBox}>
                            <Text style={styles.fireSwipeDescriptionText}>Spark your love life with FireSwipe - the hottest dating app. Swipe to find your match today!</Text>
                        </View>
                        <View style={styles.fireSwipeButtonBox}>
                            <Pressable onPress={() => setFireSwipeModalVisible(true)}>
                                <Text style={styles.fireSwipeButtonText}>Open App</Text>
                            </Pressable>
                        </View>
                    </Shadow>
                    <Modal animationType="slide" transparent={true} visible={fireSwipeModalVisible} >
                        <View style={styles.fireSwipeModalContainer}>
                            <View style={styles.fireSwipeModalContent}>
                                <View style={styles.fireSwipeModalHeader}>
                                    <Text style={styles.fireSwipeModalHeaderText}>FireSwipe</Text>
                                    <Image source={require('../icons/fireSwipe-icon.png')} style={styles.fireSwipeModalImage} />
                                </View>
                                <View style={styles.fireSwipeModalBody}>
                                    <FireSwipe />
                                </View>
                                <View style={styles.fireSwipeModalCloseButtonBox}>
                                    <Pressable onPress={() => setFireSwipeModalVisible(false)}>
                                        <Text style={styles.fireSwipeModalCloseButtonText}>Close</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
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
                </View>

            </LinearGradient>

    </ScrollView>
    
    )
  }
  
  export { Relationships };