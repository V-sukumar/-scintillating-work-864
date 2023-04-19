import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useReducer, useState } from "react";
import styles from './styles/SignUp.module.css'


const getUser = async(state) =>{
  try {
    let res=await fetch(`https://ill-lime-cummerbund.cyclic.app/users`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state)
    })
    let data=await res.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const initialState={
  UserName:"",
  email:"",
  password:"",
  mobile:""

}

const Reducer = (state,action) =>{
  switch (action.type) {
    case "USER_NAME":{
      return {...state,UserName:action.payload}
    }
    case "USER_EMAIL":{
      return {...state,email:action.payload}
    }
    case "USER_PASSWORD":{
      return {...state,password:action.payload}
    }
    case "USER_MOBILE":{
      return {...state,mobile:action.payload}
    }

    default:
      throw new Error(`Invalid Action`)
  }
}


function SignUp() {

const [state,dispatch]  = useReducer(Reducer,initialState)
const {UserName,email,password,mobile} = state

const CheckUser = () =>{
  getUser(state)
}

const handleSigUp = () =>{
  CheckUser()
  alert("Account Created")
  window.location.href="/"

  console.log(state);

}
  
    return (
      <Box className={styles.MainBox}>
        <Text fontWeight="700" fontSize="22px" color="#9D6A37">SignUP</Text>
        <Box>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input value={UserName} onChange={(e)=> dispatch({type:"USER_NAME",payload:e.target.value})}/>
            <FormLabel>Email</FormLabel>
            <Input value={email} onChange={(e)=> dispatch({type:"USER_EMAIL",payload:e.target.value})} type="email" />
            <FormLabel>Mobile No</FormLabel>
            <Input value={mobile} onChange={(e)=> dispatch({type:"USER_MOBILE",payload:e.target.value})} type="number" />
            <FormLabel>Password</FormLabel>
            <Input  value={password} onChange={(e)=> dispatch({type:"USER_PASSWORD",payload:e.target.value})} type="password" />
          </FormControl>
          <Button colorScheme="#EB5934" bg="#EB5934" onClick={handleSigUp}>Submit</Button>

      
        </Box>
      
      </Box>
    )
  }
  export default SignUp