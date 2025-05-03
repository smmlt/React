export default (props) => {
    const { item, index } = props;
    return (
        <ul>
            <li>{index} {item}</li>
        </ul>
    );
}
