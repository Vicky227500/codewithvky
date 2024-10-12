function Employee(props){
    let {person}= props;
    let {name, age, ismarried, city}= person;
    console.log(ismarried)

    return(
        <>
            <p>Employee name is {name} he is {age} year old </p>
            <p> Is married: {ismarried?"yes":"no"}</p>
            <p>{ismarried&&city==="chennai"?"Qualified":"Rejected"}</p>
        </>
    )
}
export default Employee;