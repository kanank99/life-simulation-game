import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 140,
        paddingTop: 40,
        justifyContent: 'center',
        backgroundColor: '#1e1f1c',
    },
    box: {
        flexDirection: 'row',
        color: "white",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        height: '100%',
    },
    statsContainer: {
        flex: 1,
        gap: 4,
    },
    statsHappiness: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    statsHealth: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    statsMentalHealth: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    happinessText: {
        color: '#FAFAFC',
    },
    healthText: {
        color: '#FAFAFC',
    },
    mentalHealthText: {
        color: '#FAFAFC',
    },
    ageContainer: {
        flex: 1.3,
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'white',
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    ageText: {
        textAlign: 'center',
        color: '#FAFAFC',
        fontSize: 27,
        fontWeight: 900,
        textShadowColor: 'red',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 0,
    },
    age: {
        textAlign: 'center',
        color: '#FAFAFC',
        fontSize: 34,
        textShadowColor: 'red',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 0,
    },
    money: {
        flex: 1,
        textAlign: 'right',
        color: '#FAFAFC',
        fontSize: 30,
        textShadowColor: 'green',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 0,
    }
  });
  
  export { styles };
  