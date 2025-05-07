import React from 'react';

const UserContext = React.createContext("HEY HEY")

const UserProvider = UserContext.Provider
const USerConsumer = UserContext.Consumer
 
export { UserProvider, USerConsumer };



