import { View, ActivityIndicator,StyleSheet} from 'react-native';
import React, {useContext, useState, useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UnAuthenticateStackNavigation from './UnAuthenticateStackNavigation';
import AuthenticateStackNavigation from './AuthenticateStackNavigation';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthenticationUserContext } from '../../utils/context';
import { auth } from '../../../config/firebase';

const RootNavigation = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(useContext(AuthenticationUserContext));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            async authenticateUser => {
                authenticateUser ? setUser(authenticateUser) : setUser(null);
                setIsLoading(false);
            });
    
        return () => {
            unsubscribe();
        };
    }, [user]);
    if (isLoading){
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' />
            </View>);
    }
    return (
        <NavigationContainer>
            {user 
                ?(<AuthenticateStackNavigation/>)
                :(<UnAuthenticateStackNavigation/>)
            }
        </NavigationContainer>
    );
};

export default RootNavigation;

const styles = StyleSheet.create({
    loadingContainer:{ 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' }
});