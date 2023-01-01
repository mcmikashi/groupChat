import React, {useState} from 'react';
import { AuthenticationUserContext } from '../../utils/context';

const AuthenticationProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <AuthenticationUserContext.Provider value={{user, setUser}}>
            {children}
        </AuthenticationUserContext.Provider>
    );
};

export default AuthenticationProvider;
