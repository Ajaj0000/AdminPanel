import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Green background
        justifyContent: 'center',
        paddingHorizontal: 25,
        
    },
    innerContainer:{
        // backgroundColor:"red",
        padding:20,
        elevation:1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        backgroundColor: 'white',
        // borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 1,
        color:'black'
    },
    loginButton: {
        backgroundColor: 'black',
        // borderRadius: 25,
        borderWidth:1,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    signInPasskeyText: {
        color: '#333',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    orText: {
        marginHorizontal: 10,
        color: '#333',
        fontSize: 16,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    socialLoginButton: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: 60,
        height: 60,
        justifyContent: 'center',
    },
    socialIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpText: {
        color: 'white',
        fontSize: 14,
    },
    signUpLink: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export {styles}