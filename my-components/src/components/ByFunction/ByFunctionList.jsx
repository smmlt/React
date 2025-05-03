import ByFunctionItem from "./ByFunctionItem.jsx";

function ByFunctionList() {
    const items = ['Audi', 'BMW', 'Mercedes', 'Porsche', 'Volkswagen', 'Toyota', 'Honda', 'Nissan', 'Ford', 'Chevrolet'];
    return(
        <>
            <ul>
                {items.map((item, index) => (
                    <ByFunctionItem key={index} index={index} item={item}/>
                ))}
            </ul>
        </>
    )
}

 export default ByFunctionList;