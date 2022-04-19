import React from 'react';
import {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
const ListPage = () => {
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function callApi() {
            try {
                const result = await axios.get('https://625e1159d434c6001c55fd04.mockapi.io/member?p=1&l=10')
                setData(result.data);
                // setLoading(false);
            }catch (error) {
                console.log(error);
                // setLoading(false);
            }
        }
            callApi();
    }, []);
    function handleDeleteItem(key){
        const newData = [...data]
        newData.splice(key, 1);
        console.log(key);
        setData(newData);
    }
    function handleDeleteAll()  {
        setData([])
    }
    const itemRow = ()=>{
        return data.map((value, index) => { 
            return (<tr key ={index}>
                <th >
                    {value.id}
                </th>
                <td>
                    {value.name}
                </td>
                <td>
                    <img src={value.avatar} alt="" width="5%" />
                </td>  
                <td>
                    <button className="btn btn-danger"
                        onClick={()=>handleDeleteItem(index)}
                    >
                        Delete
                    </button>
                </td>
            </tr> )                   
        })            
    }
    return (
        <div className="container">
            {
                <>
                    <Table hover>
                        <thead>
                            <tr>
                                <th >
                                    ID
                                </th>
                                <th>
                                    Username
                                </th>
                                <th>
                                    Avatar 
                                </th>
                            </tr>
                        </thead>
                        <tbody>{
                            itemRow()
                        } 
                        </tbody>
                    </Table>
                    <button className="btn btn-danger"
                        onClick={handleDeleteAll}
                    >
                        Delete All
                    </button>  
                </>
            }
        </div>
    );
};

export default ListPage;