import React from 'react';
import Columns from './Columns';


function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <Columns />
            </tbody>
        </table>
    )
}

export default Table;