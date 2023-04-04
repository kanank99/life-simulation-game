import { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import TinderCard from 'react-tinder-card';


const db = [
    {
        name: 'Richard Hendricks',
        img: require('./images/girl-1.png')
    },
    {
        name: 'Erlich Bachman',
        img: require('./images/girl-2.png')
    },
    {
        name: 'Monica Hall',
        img: require('./images/girl-3.png')
    },
    {
        name: 'Jared Dunn',
        img: require('./images/girl-4.png')
    },
    {
        name: 'Dinesh Chugtai',
        img: require('./images/girl-5.png')
    },
    {
        name: 'Richard Hendricks',
        img: require('./images/girl-6.png')
    },
    {
        name: 'Erlich Bachman',
        img: require('./images/girl-7.png')
    },
    {
        name: 'Monica Hall',
        img: require('./images/girl-8.png')
    },
    {
        name: 'Jared Dunn',
        img: require('./images/girl-9.png')
    },
    {
        name: 'Dinesh Chugtai',
        img: require('./images/girl-10.png')
    }
]

const styles = {
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
      color: '#000',
      fontSize: 30,
      marginBottom: 20,
      textTransform: 'uppercase',
      letterSpacing: 1,
      width: 250,   
      textAlign: 'center',
      fontWeight: '300',
    },
    cardContainer: {
      width: '100%',
      maxWidth: 260,
      height: 300,
    borderRadius: 20,
    },
    card: {
      position: 'absolute',
      backgroundColor: '#fff',
      width: '100%',
      maxWidth: 260,
      height: 300,
      padding: 10,
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      borderRadius: 15,
      resizeMode: 'cover',
    },
    cardImage: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: 20,
    },
    cardTitle: {
      position: 'absolute',
      bottom: -5,
      margin: 5,
      color: 'black',
      fontSize: 20,
      fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1

    },
  }


  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    // setLastDirection(direction)
    }


const FireSwipe = (props) => {





    return (
        <View style={styles.container}>
            <Text style={styles.header}>Swipe</Text>
            <View style={styles.cardContainer}>
                {db.map((person) => (
                    <TinderCard
                        className="swipe"
                        // key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        
                    >
                        <View style={styles.card}>
                            <ImageBackground
                                source={person.img}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 20 }}
                            >
                                <Text style={styles.cardTitle}>{person.name}</Text>
                            </ImageBackground>
                        </View>
                    </TinderCard>
                ))}
            </View>
            {/* <View>
                <Text>Left</Text>
                <Text>Right</Text>
            </View> */}
        </View>
     
      )
  }
  
  export { FireSwipe };

//   const db = [
//     {
//         name: 'Richard Hendricks',
//         img: require('./images/girl-1.png')
//     },
//     {
//         name: 'Erlich Bachman',
//         img: require('./images/girl-2.png')
//     },
//     {
//         name: 'Monica Hall',
//         img: require('./images/girl-3.png')
//     },
//     {
//         name: 'Jared Dunn',
//         img: require('./images/girl-4.png')
//     },
//     {
//         name: 'Dinesh Chugtai',
//         img: require('./images/girl-5.png')
//     }
// ]
 