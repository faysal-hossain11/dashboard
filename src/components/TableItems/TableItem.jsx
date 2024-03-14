import React from 'react';
import Pizza from '../../assets/images/pizza.png'

const TableItem = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" className='bg-gray' /></td>
                        <td><p>01</p></td>
                        <td><img src={Pizza} alt="" /></td>
                        <td><p>TestofferNetId232ds232new</p></td>
                        <td><p>Max</p></td>
                        <td><p>Chocolate</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableItem;