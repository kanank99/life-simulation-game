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
        gap: 6,
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
        fontSize: 16,
    },
    healthText: {
        color: '#FAFAFC',
        fontSize: 16,
    },
    mentalHealthText: {
        color: '#FAFAFC',
        fontSize: 16,
    },
    ageContainer: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        height: '100%',
    },
    ageText: {
        textAlign: 'center',
        color: '#FAFAFC',
        fontSize: 23,
        fontWeight: 800,
        textShadowColor: 'red',
        letterSpacing: 1,
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 0,
    },
    age: {
        textAlign: 'center',
        color: '#FAFAFC',
        fontSize: 30,
        fontWeight: 400,
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 0,
    },
    moneyBox: {
        flex: 1,
        justifyContent: 'center',
        gap: 4,
        height: '100%',
    },
    money: {
        textAlign: 'right',
        color: '#FAFAFC',
        fontSize: 20,
        textShadowColor: 'green',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 0,
    },
    moneyText: {
        textAlign: 'right',
        color: '#FAFAFC',
        fontSize: 16,
        // textShadowColor: 'green',
        // textShadowOffset: {width: 2, height: 2},
        // textShadowRadius: 0,
        fontWeight: 200,
        letterSpacing: 0.5,
    },
  });
  
  export { styles };
  