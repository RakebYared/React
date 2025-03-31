
import React, { useEffect, useMemo, useState, useCallback} from 'react'

const Search = () => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((c) => c.json())
        .then((data) => setUsers(data))
        }, []);
    
    const handleSearch = useCallback((e) => {
        setQuery(e.target.value);
        }, []);

    const filteredUsers = useMemo(
        () => users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase())),
    [query, users]);

  
 
  return (
    <div>
      <input type="text" value = {query} onChange={handleSearch} />
      <ul>
        {filteredUsers.map((user)=>(
            <li key = {user.id}>{user.name}</li>
        ))}
      </ul>
    </div>

  )
}

export default Search
