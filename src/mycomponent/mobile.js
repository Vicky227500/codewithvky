function Devices(prps){
    let{price}=prps;
    
    let mobiles = 
         {brand:"Xiaomi", ram:"4gb", rom:"64Gb"}
        ;
    

    return(
        <>
            <p> I have a {mobiles.brand} mobile with {mobiles.ram} ram and {mobiles.rom} Rom. price is {price}</p>
        </>
    )
}
export default Devices;