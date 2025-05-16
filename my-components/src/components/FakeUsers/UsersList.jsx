import {useEffect, useState} from "react";
import UserItem from "./UserItem.jsx";

const API_URL = 'https://68161b0532debfe95dbd75a5.mockapi.io/users'

export default function UsersList() {

    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    //pagination
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3)


    const fetchUsersAsync = async () => {
        setLoading(false)
        setError(null)
        try {
            // const response = await fetch(API_URL)
            const response = await fetch(`${API_URL}?limit=${limit}&page=${page}&sortBy=name`)
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

        fetch(`${API_URL}?limit=${limit}&page=${page}&sortBy=name`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                setUsers((prevUsers) => [...prevUsers, ...data])
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
    }, [page]);



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
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <p>Страница {page} из {Math.ceil(100 / limit)}</p> {/* Предполагается, что всего 100 пользователей */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Предыдущая
                </button>
                <button onClick={() => setPage((prev) => prev + 1)}>
                    Следующая
                </button>
            </div>
        </div>
    </>)
}