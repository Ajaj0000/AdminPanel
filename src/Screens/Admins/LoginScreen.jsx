import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import { styles } from './LoginStyle';
import icGoogle from '../../Assets/Icons/google.png';
import icFacebook from '../../Assets/Icons/facebook.png';
import icApple from '../../Assets/Icons/apple.png';
import icUser from '../../Assets/Icons/key.png';
import { Route } from '../../Navigations/Route';

const LoginScreen = (props) => {

    const [email, setEmail] = useState('g')
    const [pass, setPass] = useState('h')
    const [home, setHome] = useState(true)

    const LogInuser = () => {
        if (email) {
            if (pass) {
                setHome(true)
            } else {
                alert('invalid Pass')
            }
        } else {
            alert('user not found')
        }
    }

    return (
        <>
            {
                home ?
                    <>
                        
                        <Route />
                    </>

                    :

                    <View style={styles.container}>
                        <Text style={styles.title}>Welcome</Text>
                        <Text style={styles.subtitle}>Login to your account</Text>

                        <TextInput
                            placeholder="Email/Mobile Number"
                            style={styles.input}
                            keyboardType="email-address"
                            onChangeText={(e) => setEmail(e)}
                            value={email}
                        />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry
                            onChangeText={(e) => setPass(e)}
                            value={pass}
                        />

                        <TouchableOpacity style={styles.loginButton} onPress={LogInuser}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                        <Text style={styles.signInPasskeyText}>
                            <Image source={icUser} style={styles.singInPerson} />
                            Sign in with passkey
                        </Text>

                        <View style={styles.dividerContainer}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.orText}>or</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <View style={styles.socialLoginContainer}>
                            <TouchableOpacity style={styles.socialLoginButton}>
                                <Image
                                    source={icApple}
                                    style={styles.socialIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialLoginButton}>
                                <Image
                                    source={icFacebook}
                                    style={styles.socialIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialLoginButton}>
                                <Image
                                    source={icGoogle}
                                    style={styles.socialIcon}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>New to tradly?</Text>
                            <TouchableOpacity>
                                <Text style={styles.signUpLink}> Get started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </>
    );
};

export default LoginScreen;
