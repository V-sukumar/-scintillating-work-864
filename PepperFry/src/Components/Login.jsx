import {Image, Modal , ModalBody,ModalOverlay,ModalContent,ModalCloseButton,Button, useDisclosure, FormControl, FormLabel, Center, Input , Text, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useReducer, useState } from "react";
import {FaFacebook} from "react-icons/fa"
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const getUser = () =>{
  return axios.get(`https://ill-lime-cummerbund.cyclic.app/users`)
}

const initialData={
  email:"",
  password:""
}

const Reducer = (state,action) =>{
  switch (action.type){
    case "USER_EMAIL":{
      return {...state,email:action.payload}
    }
    case "USER_PASSWORD":{
      return {...state,password:action.payload}
    }
    default :{
      throw new Error(`Invalid Action`)
    }
  }

}

function Login( {isOpen,onClose} ) {

  const [user,setUser] = useState([])

  const [state,dispatch] = useReducer(Reducer,initialData)

  const {email,password} = state

const CheckUser = () =>{
  getUser()
  .then((res)=>{
    console.log(res.data);
    setUser(res.data)
  })
  .catch((err)=>{
    alert(`Error`)
  })
}

const handleLogin = () =>{
  CheckUser()
  user.map((user)=>{
    if(email===user.email && password===user.password){
      alert(`Login Success`)
      window.location.href="/"
    }
    // else{
    //   alert(`No User Found`)
    // }
   
  })


}

  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay/>
          <ModalContent mt="100px" w="500px" height="600px" padding="20px" >
            <ModalCloseButton />
            <ModalBody>
                <Flex gap="20px"  direction="column" textAlign="Center">
             <Image src="https://ii1.pepperfry.com/assets/0bf4f521-093c-4008-8b8c-e4a850428f10.jpg"/>
             <FormControl>
                <FormLabel>
                    <Center color="#9D6A37">Log In</Center>
                </FormLabel>
             </FormControl>


                <Input value={email} onChange={(e)=> dispatch({type:"USER_EMAIL",payload:e.target.value})} placeholder="Enter Mobile Number or Email Id" />
                <Input type="password" value={password} onChange={(e)=> dispatch({type:"USER_PASSWORD",payload:e.target.value})}  placeholder="Enter Password"/>
                <Button colorScheme="#EB5934" color="white" bgGradient="linear(to-r, red.500, yellow.500)" onClick={handleLogin}>CONTINUE</Button>
                <Text fontSize="xs">By continuing, you agree to our <Text as="span" color="#ED6F34">Terms & Conditions</Text></Text>

                <Link to="/SignUp" style={{fontSize:"13px",color:"#E93F33",fontWeight:"700"}} >Create New Account</Link>

                <Text fontSize="sm">Or</Text>
                <Text fontSize="sm">Continue With</Text>
                <Button  variant="outline"><Image w="23px" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>   Signin With Google </Button>
                <Button  variant="outline" color="facebook.400" leftIcon={<FaFacebook />}>
    Facebook
  </Button>
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
        
      </>
    )
  }
  export default Login