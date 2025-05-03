export default function UserItem(props) {
    const { user } = props;

    return (<>
        <img src={user.avatar} alt={`${user.name}'s avatar`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.createdAt}</p>
    </>)

}
