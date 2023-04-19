import { Box, Flex, Image, Input, Text,  Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    useDisclosure, } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"
import { useState } from "react";
import styles from "./styles/Navbar.module.css"
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
function Navbar(){
    const [searchAn,setSearchAn] = useState("80%");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Links = [
        { path:'/Furniture', text:"Furniture"},
        { path:'/Mattresses', text:"Mattresses"},
        { path:'/HomeDecor', text:"Home Decor"},
        { path:'/Furnishing', text:"Furnishings"},
        { path:'/KitchenAndDining', text:"Kitchen & Dining"},
        { path:'/LampsAndLighting', text:"Lamps & Lighting"},
        { path:'/Appliances', text:"Appliances"},
        { path:'/Modular', text:"Modular"},
        { path:'/GiftCard', text:"Gift Cards"},
    ]


    return(<Box>
        <Box>
            <Flex w="90%" margin="auto" justifyContent="space-between" alignItems="center">

            <Box>
                <Flex alignItems="center" w={searchAn}>
                    <InputGroup >
                <Input  borderBottomColor="black" variant="flushed" onMouseLeave={()=> setSearchAn("80%")} onClick={()=> setSearchAn("180%")} placeholder="Search" w="100%"/>
                <InputRightElement  pointerEvents="none" children={<SearchIcon cursor="pointer" />} />
            
                    </InputGroup>
                </Flex>  
            </Box>
            <Box>
            <Link to="/" style={{color:"#E93F33",fontSize:"30px"}}   >Pepperfry</Link>
            </Box>
            <Box  w="20%">
            <Flex justifyContent="space-between" m="15px" >
            <Popover>
                
            <PopoverTrigger>
            <Image w="35px" cursor="pointer" src="https://ii1.pepperfry.com/assets/w22-profile-icon.svg" />
            </PopoverTrigger>
            <PopoverContent >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Welcome</PopoverHeader>
            <PopoverBody>
                <Text fontSize="sm">Regist now and Get Exclusive Benifits !</Text>
                <Button onClick={onOpen}  colorScheme="#EB5934" bgGradient="linear(to-r, red.500, orange.400)" cursor="pointer" color="white">LOGIN/SIGNUP</Button>
                <Login isOpen={isOpen} onClose={onClose}/>

            </PopoverBody>
            </PopoverContent>
            </Popover>
            <Image w="35px" cursor="pointer" src="https://ii1.pepperfry.com/assets/w22-pf-notification-icon.svg"/>
            <Image w="35px" cursor="pointer" src="https://ii1.pepperfry.com/assets/w22-pf-wishlist-icon.svg"/>
            <Image w="35px" cursor="pointer"  src="https://ii1.pepperfry.com/assets/w22-pf-cart-icon.svg"/>
            </Flex>
            </Box>
            </Flex>


            <div className={styles.secondNav} >
                <a href="*">SELL ON PEPPERFRY</a>
                <a href="*">BECOME A FRANCHISEE</a>
                <a href="*">BUY IN BULK</a>
                <a href="*">FIND A STUDIO</a>
                <a href="*">GET INSPIRED</a>
                <a href="*">TRACK YOUR ORDER</a>
                <a href="*">CONTACT US</a>
            </div>
            <div className={styles.thirdNav}>
                <div className={styles.div1}>
                    {Links.map((link)=>(
                        <NavLink key={link.path} to={link.path}>{link.text}</NavLink>
                    ))}
                </div>
                
            </div>
           
        </Box>
    </Box>)
     
}
export default Navbar