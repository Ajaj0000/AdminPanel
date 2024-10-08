import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { styles } from './LoginStyle';
import { Route } from '../../Navigations/Route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { IsAdmin } from '../../Store/ReduxSlice';


const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [admin, setAdmin] = useState({});
    const [home, setHome] = useState(false);



    const dispatch = useDispatch();

    const GetApi = async () => {
        try {
            const response = await fetch('http://172.22.128.1:8036/auth/admin-login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: pass
                })
            });

            if (!response.ok) {
                console.log('response error')
            }
            const getRes = await response.json();

            setAdmin(getRes);
            console.warn(getRes.responsePacket?.accessToken, 'responcePacket')
            setHome(true);
            dispatch(IsAdmin(getRes.responsePacket?.accessToken))

        } catch (error) {
            console.log(error, 'login api error');
        }
    };


    // console.warn(admin.success, 'admin-status');

    const LogInuser = async () => {
        GetApi();
    }


    return (
        <>
            {
                home ? (
                    <Route />
                ) : (
                    <View style={styles.container}>
                        <View style={styles.innerContainer}>

                            <Text style={styles.title}>Welcome to Books24</Text>
                            <Text style={styles.subtitle}>Login to your account</Text>

                            <TextInput
                                placeholder="Email/Mobile Number"
                                style={styles.input}
                                keyboardType="email-address"
                                onChangeText={(e) => setEmail(e)}
                                value={email}
                                placeholderTextColor="black"
                            />
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                                secureTextEntry
                                onChangeText={(e) => setPass(e)}
                                value={pass}
                                placeholderTextColor="black"
                            />

                            <TouchableOpacity style={styles.loginButton} onPress={LogInuser}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
        </>
    );
};

export default LoginScreen;
