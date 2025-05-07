import React, { useContext } from 'react';
import { USerConsumer, UserProvider } from './userContext';
import ComponentA from './ComponentA';

function ComponentB() {
    const context = useContext(UserProvider)
    return (
        <div>
            {context}
            <ComponentA/>
        </div>
    )
}

export default ComponentB;
