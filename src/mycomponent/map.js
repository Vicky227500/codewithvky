let mobiles = [
    {brand:"Xiaomi", ram:"4gb", rom:"64Gb"},
    {brand:"Nokia", ram:"2gb", rom:"32Gb"},
    {brand:"Samsung", ram:"8gb", rom:"128Gb"},
    {brand:"Oppo", ram:"4gb", rom:"64Gb"}
]

function Tech(){
    return(
            <>
                <ul>
               {mobiles.map(
                    (mobile, index)=>
                    (<li> I have a {mobile.brand} mobile with {mobile.ram} ram and {mobile.rom} Rom.</li>)
                    
                )}
                </ul>
            </>
    )
}
export default Tech;