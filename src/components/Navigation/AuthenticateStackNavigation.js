import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Chat from '../../screens/Chat';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { MaterialIcons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

const AuthenticateStackNavigation = () => {

    const logOut = () => {
        signOut(auth).then(() => {
            console.log('loged out');
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <Stack.Navigator screenOptions={{ headerRight: () => (
            <TouchableOpacity
                style={{
                    marginRight: 10
                }}
                onPress={logOut}
            >
                <MaterialIcons name="logout" size={24} color="black" />
            </TouchableOpacity>
        )}}>
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default AuthenticateStackNavigation;