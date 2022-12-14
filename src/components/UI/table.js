import React, { Fragment, useState, useEffect } from 'react'
import { items } from '../data/Items'
import SearchBar from './searchBar';
import classes from './table.module.css'


const Table = (props) => {

    const [listItems, setListItems] = useState(items);


    function sort(key) {
        console.log(key);
        const tempItems = [...listItems];
        let temp;
        for (let i = 0; i < tempItems.length; i++) {
            let minvalue = i;
            for (let j = i + 1; j < (tempItems.length); j++) {
                console.log(tempItems[minvalue][key])
                console.log(tempItems[j][key])

                if (tempItems[j][key] < tempItems[minvalue][key]) {
                    minvalue = j;
                    temp = tempItems[i];
                    tempItems[i] = tempItems[minvalue];
                    tempItems[minvalue] = temp;
                }
            };
        }
        setListItems(tempItems);
    }


    const getInputValue = (e) => {
        console.log(e.target.value.toLowerCase());
            if (e.target.value == ''){
                setListItems(listItems);
            }else{
                for(var i=0; i < listItems.length; i++){
                    if(listItems[i].Desserts.toLowerCase() == e.target.value.toLowerCase()){
                        console.log(listItems[i].Carbs);
                        setListItems([listItems[i]])
                    }
                }
            }
    };



    return <Fragment>
        <div className={classes.SearchBar}>
            <input placeholder="Type to search Desserts in the list" type="text" onChange={getInputValue} />
        </div>
        <div className={classes.table}>
            <table  >

                <tbody  >
                    <tr>
                        <th onClick={() => sort('id')}>S.No.</th>
                        <th onClick={() => sort('Desserts')}>Desserts</th>
                        <th onClick={() => sort('Calories')}>Calories</th>
                        <th onClick={() => sort('Fats')}>Fats</th>
                        <th onClick={() => sort('Carbs')}>Carbs</th>
                        <th onClick={() => sort('Protiens')}>Protiens</th>
                    </tr>

                    {
                        listItems.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.Desserts}</td>
                                    <td>{item.Calories}</td>
                                    <td>{item.Fats}</td>
                                    <td>{item.Carbs}</td>
                                    <td>{item.Protiens}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    </Fragment >
}

export default Table;