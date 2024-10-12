import Employee from "./employee";
import Tech from "./map";
import Devices from "./mobile";

function Main(){
    let People={
        name:"Arun",
        age:25,
        ismarried: true , //1
        city:"chennai"
    }
    return(
        <>
            <p>test</p>
            <Devices price="1500"/>
            <Employee person={People}/> 
            {/* person={
        name:"Arun",
        age:25,
        ismarried: true,//1
        city:"chennai"
    } */}
            <Tech/>
        </>
    );
}
export default Main;