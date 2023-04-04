import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    header: {
      backgroundColor: '#1e1f1c',
    },
    headerTitle: {
      color: '#FAFAFC',
      fontWeight: "bold",
      fontSize: '20px',
    },
    nameBox: {
        flex: 1,
        justifyContent: 'center',
    },
    h3: {
        color: '#1e1f1c',
        fontSize: 27,
        fontWeight: 900,
    },
    namePlusRandom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    genderBox: {
        flex: 2,
    },
    genderAndSexHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    genderOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
    },
    sexualityOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
        gap: 15
    },
    input: {
        height: 40,
        fontSize: 20,
        // margin: 12,
        // borderWidth: 1,
        // padding: 10,
      },
      button: {
        borderWidth: 1,
        height: '7%',
        width: '85%',
        borderRadius: 5,
        backgroundColor: '#1e1f1c',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        
      },
      buttonText: {
        color: '#FAFAFC',
        letterSpacing: 0.25,
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 21
      }

  });
  
  export { styles };
  