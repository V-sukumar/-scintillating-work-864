import { Box, Button, Flex, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from  './styles/SingleDataPage.module.css'

export default function SingleDataPage() {
  return (
    <div >
      <Navbar />
      <Box className={styles.parent}>
        <Box>
          <Image src='https://ii2.pepperfry.com/media/catalog/product/i/n/1250x625/ines-sofa-cum-bed-in-sandy-brown-colour-by-casacraft-ines-sofa-cum-bed-in-sandy-brown-colour-by-casa-0uh2ni.jpg'/>
        </Box>


        <Box className={styles.rightBox}>
          <Text as="h2">Ines Fabric Pull Out Sofa Cum Bed In Sandy Brown Colour With Storage<Text as="span"> By Casacraft from Pepperfry</Text></Text>
          <hr />
          <Text as="h5">MRP <Text as="span">₹82,999</Text></Text>
          <Text>Offer price <Text as="span">₹72,499</Text></Text>
          <hr />
          <Text>Today’s Deal <Text as="span">
₹57,999
</Text></Text>
          <Box className={styles.qtyBox}>
          <Select width='100px' placeholder='QTY 1'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </Select>
          <Text fontSize="sm">Total Price <Text fontWeight="700" as="span">₹57,999</Text></Text>
          </Box>
          <Box marginTop="10px">
          <Flex  width="80%" margin="auto" justify="space-between">
            
            <Button width="40%" borderColor="#EC6D33" color="#EC6D33" variant="outline">Add To Cart</Button>
            <Button colorScheme="#EC6D33"  width="40%" bg="#EC6D33"  color="white">Buy Now</Button>
            </Flex>
          </Box>
        </Box>
        
      </Box>
      <Footer />
    </div>
  )
}
