import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer: {
        borderBottomWidth: 2,
    },
    linearGradient: {
        // justifyContent: 'center',
    },
    allContent: {
        paddingLeft: 20,
        paddingRight:20,
        paddingTop:  15,
    },
    bankName: {
        fontSize: 24,
        marginBottom: 15,
        fontWeight: 800,
        letterSpacing: 1,
    },
    titleTextBox: {
        marginBottom: 25,
    },
    titleText: {
        fontSize: 36,
        fontWeight: 200,
        letterSpacing: 1,
    },
    titleTextName: {
        fontSize: 36,
        fontWeight: 200,
        letterSpacing: 1,
    },
    debitBox: {
        backgroundColor: '#fff',
        padding: 12,
        marginTop: 0,
        borderRadius: 5,
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        
    },
    debitAccount: {
        fontWeight: 800,
        marginBottom: 5,
    },
    balanceBox: {
        
    },
    debitBalance: {
        fontSize: 30,
        fontWeight: 300,
        color: '#118C4F',
        letterSpacing: 1.2,
    },
    debitBalanceExtra: {
        fontSize: 12,
        fontWeight: 300,
    },
    savingsBox: {
        backgroundColor: '#fff',
        padding: 12,
        marginTop: 20,
        borderRadius: 5,
        width: '100%',
    },
    interestRateBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    },
    interestRateText: {
        fontSize: 13,
    },
    depositText: {
        fontSize: 26,
        fontWeight: 300,
        letterSpacing: 1.2,
        marginTop: 15,
    },
    depositOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10, 
    },
    depositOption: {
        backgroundColor: '#e7f0fd',
        padding: 10,
        borderRadius: 5,
        width: '20%',
        alignItems: 'center',
        borderWidth: 1,
    },
    depositOptionText: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 1,
    },
    disclaimer: {
        fontSize: 8,
        fontWeight: 300,
        alignSelf: 'center',
        paddingTop: 10,
    },
    
});
  
  export { styles };
  