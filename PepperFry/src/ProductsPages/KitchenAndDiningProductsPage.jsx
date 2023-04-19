import { useEffect, useReducer } from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import axios from "axios"
import { Box, Button, Image, Select, Text } from "@chakra-ui/react"
import styles from "./Products.module.css"

const getData = () =>{
  return axios.get(`https://ill-lime-cummerbund.cyclic.app/Kitchen&Dining`)
}


const initialState = {
  loading:false,
  data:[],
  err:false
}
const reducer = (state,action) =>{

  switch (action.type) {
    case "FETCH_LOADING":{
      return {...state,loading:!state.loading}
    }
    case "FETCH_SUCCESS":{
      return {...state,data:action.payload}
    }
    case "FETCH_ERROR":{
      return {...state,err:true}
    }
      
    default:
      throw new Error(`Invalid Action`)
  }

}


function KitchenAndDiningProductsPage() {

  const [state,dispatch] = useReducer(reducer,initialState)

  
  const fetchAndRender = ()=>{
    dispatch({type:"FETCH_LOADING"})
    getData()
    .then((res)=>{
      console.log(res.data);
      dispatch({type:"FETCH_SUCCESS",payload:res.data})
    })
    .catch((err)=>{
      dispatch({type:"FETCH_ERROR"})
    })
    .finally(()=>{
      dispatch({type:"FETCH_LOADING"})
    })
  }

  useEffect(()=>{
    fetchAndRender()
  },[])

  const {data,loading,err} = state


  return (
    <Box>
        <Navbar />
    
        <Box  className={styles.head}>
        <Box className={styles.filterNav}>
          <Box>
            <Box className={styles.filterbox}>
              <Text>Filter By</Text>
              <Button size="sm" variant="outline">Brand</Button>
              <Text as="h4" fontSize="14px" color="#EC6D33" marginLeft="10px" cursor="pointer" fontWeight="300">More Filters</Text>
            </Box>
          </Box>
          <Box className={styles.SelectFilter}>
            <Text fontSize="sm" marginRight="10px" fontWeight="700" marginLeft="10px" color="#5b5b5b">Sort By</Text>
            <Select width="70%" placeholder="Relevance">
              <option value="Relevence">Relevence</option>
              <option value="Lowest">Lowest Priced First</option>
              <option value="Heighest">Heighest Priced First</option>
            </Select>
          </Box>
        </Box>
          <Box className={styles.container}>
            {data.map((card)=>(
              <Box cursor='pointer' _hover={{boxShadow:'xl'}} bg="white" paddingBottom="30px" fontFamily="Manrope, sans-serif">
                <Image src={card.image} />
                <Box paddingLeft="10px" paddingTop="20px">
                <Text fontSize="14px" lineHeight='20px' color="#5b5b5b" fontWeight="700">{card.description}</Text>
                <Text fontSize="12px" lineHeight="20px" fontWeight="500" color="#848484">{card.title}</Text>
                <Text  color="#67AD5B" fontSize="12px" fontWeight="700" lineHeight="20px">Today's Deal</Text>
                <Text color="#121212" fontWeight='700' fontSize='20px'>₹{card.price} <Text textDecoration="line-through" color="#848484" lineHeight="24px" fontWeight="400" fontSize="16px" as="span">₹{card.originalPrice}</Text></Text>
                <Text color="#848484" fontSize="12px" fontWeight="700" lineHeight="20px">You Save ₹{(card.originalPrice)-(card.price)} <Text as="span"  color="#67AD5B" fontSize="12px" fontWeight="700" lineHeight="20px">({card.offer}%off)</Text></Text>
                </Box>
                
              </Box>
            ))}

          </Box>
        </Box>

        
        <Footer />
    </Box>
  )
}

export default KitchenAndDiningProductsPage

