import React from 'react';
import { USerConsumer } from './userContext';

function ComponentA() {
    return (
        <div>
            <USerConsumer>
                {
                    (userName) => {
                        return <div>{userName}</div>
                    }
                }
            </USerConsumer>
        </div>
    )
}

export default ComponentA;