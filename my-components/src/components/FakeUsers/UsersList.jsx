import {useEffect, useState} from "react";
import UserItem from "./UserItem.jsx";

const API_URL = 'https://68161b0532debfe95dbd75a5.mockapi.io/users'

export default function UsersList() {

    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    const fetchUsersAsync = async () => {
        setLoading(false)
        setError(null)
        try {
            const response = await fetch(API_URL)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(true)
        }
    }

    const fetchUsersPromise = () => {
        setLoading(false)
        setError(null)

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(true)
            })
    }

    useEffect(() => {
        fetchUsersPromise()
    }, []);

//

    if (error){
        console.log(error.message)
        return (
            <div>Error: {error.message}</div>
        )
    }

    if (!loading) return (
        <div>Loading...</div>
    )

    return(<>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {users.map((user) => (
                <div key={user.id} style={{ flex: '1 1 calc(25% - 16px)', boxSizing: 'border-box' }}>
                    <UserItem user={user} />
                </div>
            ))}
        </div>
    </>)
}