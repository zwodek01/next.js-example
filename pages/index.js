import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Index = () => {
    let [repos, setRepos] = useState([])
    useEffect(() => axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            setRepos(res.data)
        }), [])

    return (
        <div>
            {repos.map(item => <div>{item.name}</div>)}
        </div>
    );
};
export default Index;