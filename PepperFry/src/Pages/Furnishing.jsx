import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

function Furnishing() {
  let data1=[
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_1.jpg",
        title:"Bed Sheets"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_3.jpg",
        title:"Quilts & Dohars"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_2.jpg",
        title:"Bed Linen"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_4.jpg",
        title:"Bath Linen"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_5.jpg",
        title:"Storage & Organizers"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_6.jpg",
        title:"Cushions & Covers"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_7.jpg",
        title:"Curtains"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_8.jpg",
        title:"Curtain Accessories"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_9.jpg",
        title:"Carpets"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_10.jpg",
        title:"Dhurries"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_11.jpg",
        title:"Runners"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/furnishing_1440_category_17feb_12.jpg",
        title:"Door Mats"
    }
]
let data2=[
    {
        image:"https://ii3.pepperfry.com/assets/4e2341_1676642654356_furnishing_1280_deal_17feb_1.jpg",
    },
    {
        image:"https://ii3.pepperfry.com/assets/804fd5_1676642667795_furnishing_1280_deal_17feb_2.jpg",
    }
]
let data3=[
    {
        image:"https://ii1.pepperfry.com/assets/fc9750_1676640251872_furnishing_1280_bestseller_17feb_1.jpg",
        title:"Nature Print Cushion C...",
        desc:"910 + Options, Starting ₹138"
    },
    {
        image:"https://ii2.pepperfry.com/assets/48dc8d_1676640317655_furnishing_1280_bestseller_17feb_2.jpg",
        title:"Floral Bed Sheets",
        desc:"710 + Options, Starting ₹189"
    },
    {
        image:"https://ii1.pepperfry.com/assets/acc2e7_1676640362957_furnishing_1280_bestseller_17feb_3.jpg",
        title:"Solid Bath Towels",
        desc:"190 + Options, Starting ₹349"
    },
    {
        image:"https://ii2.pepperfry.com/assets/d0aee7_1676640420618_furnishing_1280_bestseller_17feb_4.jpg",
        title:"Floral Door Curtains",
        desc:"303 + Options, Starting ₹765"
    },
    {
        image:"https://ii3.pepperfry.com/assets/d4af70_1676640452550_furnishing_1280_bestseller_17feb_5.jpg",
        title:"Abstract Carpets",
        desc:"265 + Options, Starting ₹1058"
    },
    {
        image:"https://ii1.pepperfry.com/assets/99f60d_1676640477570_furnishing_1280_bestseller_17feb_6.jpg",
        title:"Geometric Doormats",
        desc:"166 + Options, Starting ₹127"
    }
]
let data4=[
    {
        image:"https://ii2.pepperfry.com/assets/7033d4_1676641414242_furnishing_1280_discover_17feb_1.jpg",
        title:"Bath Robes",
        desc:"180 + Options, Starting ₹495"
    },
    {
        image:"https://ii1.pepperfry.com/assets/fb0d73_1676641450652_furnishing_1280_discover_17feb_2.jpg",
        title:"Travel Organizers",
        desc:"7 + Options, Starting ₹318"
    },
    {
        image:"https://ii1.pepperfry.com/assets/0ccf9e_1677156700044_furnishing_1280_discover_17feb_3.jpg",
        title:"Laundry Baskets",
        desc:"200 + Options, Starting ₹178"
    },
    {
        image:"https://ii2.pepperfry.com/assets/1247cc_1677156715700_furnishing_1280_discover_17feb_4.jpg",
        title:"Floor Cushions",
        desc:"70 + Options, Starting ₹649"
    }
]
let data5=[
    {
        image:"https://ii1.pepperfry.com/assets/c010ac_1676641712024_furnishing_1280_exploretrends_17feb_1.jpg",
        title:"Persian Carpets",
        desc:"135 + Options, Starting ₹649"
    },
    {
        image:"https://ii2.pepperfry.com/assets/842f9b_1676641962706_furnishing_1280_exploretrends_17feb_2.jpg",
        title:"Pastel Sofa Throws",
        desc:"165 + Options, Starting ₹399"
    },
    {
        image:"https://ii3.pepperfry.com/assets/60e6c2_1676641974541_furnishing_1280_exploretrends_17feb_3.jpg",
        title:"Jute Dhurries",
        desc:"13 + Options, Starting ₹529"
    },
    {
        image:"https://ii1.pepperfry.com/assets/695bf2_1676642013305_furnishing_1280_exploretrends_17feb_4.jpg",
        title:"Shag Carpets",
        desc:"20 + Options, Starting ₹2374"
    },
    {
        image:"https://ii2.pepperfry.com/assets/1662ea_1676642211702_furnishing_1280_exploretrends_17feb_5.jpg",
        title:"JShaped Cushions",
        desc:"80 + Options, Starting ₹440"
    },
    {
        image:"https://ii1.pepperfry.com/assets/b25670_1676642242634_furnishing_1280_exploretrends_17feb_6.jpg",
        title:"Abstract Bath Mats",
        desc:"35 + Options, Starting ₹99"
    }
]
let data6=[
    {
        image:"https://ii3.pepperfry.com/assets/a59788_1676642378012_furnishing_1280_popularbrands_17feb_1.jpg"
    },
    {
        image:"https://ii3.pepperfry.com/assets/f24336_1676642409765_furnishing_1280_popularbrands_17feb_2.jpg"
    },
    {
        image:"https://ii1.pepperfry.com/assets/b8f90e_1676642437815_furnishing_1280_popularbrands_17feb_3.jpg"
    },
    {
        image:"https://ii3.pepperfry.com/assets/1ff02e_1676642472054_furnishing_1280_popularbrands_17feb_4.jpg"
    },
    {
        image:"https://ii3.pepperfry.com/assets/ab2d3b_1676642498243_furnishing_1280_popularbrands_17feb_5.jpg"
    },
    {
        image:"https://ii1.pepperfry.com/assets/e7b256_1676642521468_furnishing_1280_popularbrands_17feb_6.jpg"
    }
]
let data7=[
    {
        image:"https://ii2.pepperfry.com/media/catalog/product/b/l/236x260/black-synthetic-wood-beautiful-family-memories-set-of-14-individual-wall-photo-frame--66x8--64x6--28-x9gcor.jpg",
        title:"Black Solid Wood Wade Set...",
        desc:"₹1,419"
    },
    {
        image:"https://ii2.pepperfry.com/media/catalog/product/b/l/236x260/black-synthetic-wood-set-of-08-photo-frames-with-3-mdf-plaque-by-random-black-synthetic-wood-set-of--zxuba5.jpg",
        title:"Black Solid Wood Set Of 8...",
        desc:"₹809"
    },
    {
        image:"https://ii1.pepperfry.com/media/catalog/product/s/h/236x260/shilpi-brown-wooden-partition-screen-room-divider-in-4-panel-shilpi-brown-wooden-partition-screen-ro-5bjm7s.jpg",
        title:"Solid Wood Ivan Room...",
        desc:"₹16,857"
    },
    {
        image:"https://ii3.pepperfry.com/media/catalog/product/b/l/236x260/black-engineered-wood-set-of-10-hanging-room-divider-by-random-black-engineered-wood-set-of-10-hangi-pjwro5.jpg",
        title:"Black Engineered Wood Set...",
        desc:"₹3,899"
    },
    {
        image:"https://ii1.pepperfry.com/media/catalog/product/j/i/236x260/jilda-brown-plexi-glass-designer-screen-dividers-jilda-brown-plexi-glass-designer-screen-dividers-npqcmr.jpg",
        title:"Plexi Glass Hanging Room...",
        desc:"₹3,114"
    },
    
    {
        image:"https://ii2.pepperfry.com/media/catalog/product/m/e/236x260/metal-antique-gold---blue-wall-art-by-malik-design-metal-antique-gold---blue-wall-art-by-malik-desig-oropln.jpg",
        title:"Metal Antique Gold & Blue...",
        desc:"₹1,129"
    },
    
]
  return (
    <div>
        <Navbar />
        <div>
            <img style={{width:"90%",marginTop:"20px",margin:"auto"}} src="https://ii2.pepperfry.com/assets/f5af64_1676639162863_furnishing_1028_promobanner_17feb.jpg" alt="err"/>
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
            <h2 style={{color:"#a57137",marginTop:"20px"}}>Shop By Categories</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data1.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"220px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}} >
            <Link to="/FurnishingProducts" style={{color:"#ff7035"}} >Show all Products</Link>
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Deals of the day</h2>
            </div>
            <div style={{display:"flex",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data2.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"100%"}} src={ele.image} alt="err" />
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Shop Best Sellers</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data3.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"220px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                        <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Discover New Launches</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data4.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"320px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                        <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Explore the Latest Trends</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data5.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"450px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                        <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Explore Popular Brands</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data6.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"220px"}} src={ele.image} alt="err" />
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-seri",marginLeft:'75px',marginRight:"75PX"}}>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Buy Home Furnishings Products Online at Best Prices in India</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>Pep up your interiors with lovely home furnishings. These products are ideal to add to your overall aesthetic theme and create a warm and lovely home.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Exciting Range of Home Furnishings Products at Pepperfry</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>When you're looking for fantastic furnishings, look no further than Pepperfry. We offer a great range of designer furnishings for you to choose from. Take your pick from funky cushion covers, blinds and shades, rugs, carpets, diwan sets and durries and runners when you're looking for great living room furnishings. Select from interesting table linen, cushion insters, floor mats, pillows, door curtains and curtain brackets and rods to add some luxury home furnishings. We also offer pillows and kids furnishings as well.Shop from Wide Range of Home Furnishings Products Online at Pepperfry.comAt Pepperfry, we offer over 10,000 products for you to choose from. With our convenient payment options (COD, Mastercard, Visa and Paypal), easy returns, free assembly and delivery, it's no secret why we are the leading brand in India in the furnishings segment. You can also avail discounts & offers on wide range of furniture, home decor, home & office furniture, decor items, furnishing products, bed & bath products online, kitchen products and accessories and electrical appliances online, housekeeping products, dining products for home, home bar accessories, hardware and electricals, Garden and Outdoor Products and kids products, that suit your need.</p> 
            </div>
        <Footer />
    </div>
  )
}

export default Furnishing