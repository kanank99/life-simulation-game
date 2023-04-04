import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer: {
        borderBottomWidth: 2,
        // flexGrow: 2
    },
    allContent: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    headerContainer: {
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Fasthand-Regular',
        fontSize: 70,
        color: 'white',
    },
    fireSwipeBox: {
        flex: 1,
        width: '100%',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fireSwipeIconAndTitle: {
        alignItems: 'center',
        gap: 8,
    },
    fireSwipeIcon: {
        padding: 13,
        backgroundColor: 'black',
        borderRadius: 18,
    },
    fireSwipeImage: {
        width: 40,
        height: 40,
        padding: 5,
    },
    fireSwipeTitle: {
        fontSize: 16,
        fontWeight: 600,
    },
    fireSwipeDescriptionBox: {
        flex: 2,
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
    },
    fireSwipeDescriptionText: {
        fontSize: 14,
        fontWeight: 300,
        lineHeight: 15,
    },
    fireSwipeButtonBox: {
        flex: 1,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 9,
    },
    //button
    fireSwipeButtonText: {
        fontSize: 14,
        fontWeight: 600,
        color: 'white',
        width: '100%',
        textAlign: 'center',
        
    },

    //Modal Styles// 

    fireSwipeModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    fireSwipeModalContent: {
        height: '100%',
        width: '100%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        
    },
    fireSwipeModalHeader: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'black',
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 30,
    },
    fireSwipeModalHeaderText: {
        fontFamily: 'Fasthand-Regular',
        fontSize: 50,
        color: 'white',
    },
    fireSwipeModalImage: {
        width: 45,
        height: 45,
    },
    fireSwipeModalBody: {
        // flex: 4,
        marginBottom: 50,
    },
    fireSwipeModalCloseButtonBox: {
        // flex: 1,
        backgroundColor: 'black',
        borderRadius: 50,
        width: 100,
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
        zIndex: -1,
    },
    fireSwipeModalCloseButtonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },

});
  
  
  export { styles };
  