import { useEffect, useState } from "react"
function Admin(){
    const [data,setData]=useState([])
    const [email,setEmail]=useState([])
    const [password,setpassword]=useState([])
    
    const getdata=async()=>{
        try {
            let res=await fetch (`https://ill-lime-cummerbund.cyclic.app/admin`)
            let data=await res.json()
            setData(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getdata()
    },[])
    
    const handleSubmit=()=>{
        // e.preventDefault()
        
            let flag=false
            data.map((ele)=>{
                if(ele.email===email&&ele.password===password){
                    flag=true
                    alert("Login Successful")
                    return
                }
            })
            if(!flag){
                alert("Wrong Details")
                return false
            }
    }
    
    return (
        <div>
            <h1>Adimn Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
                    <br />
                    <br />
                    <label>Password: </label>
                    <input type="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
                    <br />
                    <br />
                    <input type="submit" placeholder="submit" />
                </form>
            </div>
        </div>
    )
}
export default Admin