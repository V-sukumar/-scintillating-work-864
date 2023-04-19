import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function Mattresses() {
  let data1=[
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_1.jpg",
        title:"King Size"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_2.jpg",
        title:"Queen Size"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_3.jpg",
        title:"Single"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_4.jpg",
        title:"Foldable"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_5.jpg",
        title:"Crib Mattresses"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_6.jpg",
        title:"Pillows"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_9.jpg",
        title:"Bed Wedges"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_7.jpg",
        title:"Toppers"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_8.jpg",
        title:"Protectors"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_10.jpg",
        title:"Mattress Care"
    }
]
let data2=[
    {
        image:"https://ii2.pepperfry.com/assets/70d073_1676440574651_Mattress_1280_bestseller_14feb_1.jpg",
        title:"Queen Size",
        desc:"600+ Options, Starting at ₹4599"
    },
    {
        image:"https://ii3.pepperfry.com/assets/d44c4b_1676440607373_Mattress_1280_bestseller_14feb_2.jpg",
        title:"King Size",
        desc:"600+ Options, Starting at ₹6549"
    },
    {
        image:"https://ii1.pepperfry.com/assets/e2da5d_1676440743515_Mattress_1280_bestseller_14feb_3.jpg",
        title:"Single Size",
        desc:"570+ Options, Starting at ₹3049"
    },
    {
        image:"https://ii1.pepperfry.com/assets/e18bdd_1676440830604_Mattress_1280_bestseller_14feb_4.jpg",
        title:" Pillows",
        desc:"350+ Options, Starting at ₹319"
    },
    {
        image:"https://ii1.pepperfry.com/assets/8e0d28_1676440864885_Mattress_1280_bestseller_14feb_5.jpg",
        title:"Mattress Protectors",
        desc:"200+ Options, Starting at ₹3799"
    },
    {
        image:"https://ii1.pepperfry.com/assets/03d3a0_1676441660304_Mattress_1280_bestseller_14feb_6.jpg",
        title:"Mattress Toppers",
        desc:"King, Queen, Single; Starting at.."
    }
]
let data3=[
    {
        image:"https://ii3.pepperfry.com/assets/f0c581_1676386565582_Mattress_1280_popularbrands_14feb_1.jpg"
    },
    {
        image:"https://ii1.pepperfry.com/assets/9ca447_1676386600932_Mattress_1280_popularbrands_14feb_2.jpg"
    },
    {
        image:"https://ii1.pepperfry.com/assets/47fbd0_1676386627482_Mattress_1280_popularbrands_14feb_3.jpg"
    },
    {
        image:"https://ii2.pepperfry.com/assets/89c142_1676386660329_Mattress_1280_popularbrands_14feb_4.jpg"
    },
    {
        image:"https://ii3.pepperfry.com/assets/12829f_1676386695401_Mattress_1280_popularbrands_14feb_5.jpg"
    },
    {
        image:"https://ii2.pepperfry.com/assets/9e5ad4_1676386723762_Mattress_1280_popularbrands_14feb_6.jpg"
    }
]
let data4=[
    {
        image:"https://ii2.pepperfry.com/assets/3ce912_1676441992327_Mattress_1280_mattressbytype_14feb_1.jpg",
        title:"Best For Side Sleepers"
    },
    {
        image:"https://ii2.pepperfry.com/assets/7cf6cf_1676442013134_Mattress_1280_mattressbytype_14feb_2.jpg",
        title:"Best For Joint Pain"
    },
    {
        image:"https://ii3.pepperfry.com/assets/2d9ce2_1676442089072_Mattress_1280_mattressbytype_14feb_3.jpg",
        title:"Best For Support & Comfort"
    },
    {
        image:"https://ii2.pepperfry.com/assets/a1a2e9_1676442118462_Mattress_1280_mattressbytype_14feb_4.jpg",
        title:"Best For Restless Sleepers"
    },
    {
        image:"https://ii3.pepperfry.com/assets/83bf46_1676442152101_Mattress_1280_mattressbytype_14feb_5.jpg",
        title:"Best For Pressure Relief"
    },
    {
        image:"https://ii2.pepperfry.com/assets/61efd4_1676442172836_Mattress_1280_mattressbytype_14feb_6.jpg",
        title:"Best For Firm Support"
    }
]
let data5=[
    {
        image:"https://ii3.pepperfry.com/assets/c39703_1676386907910_Mattress_1280_mattressbyconfortlevel_14feb_1.jpg",
        title:"Soft",
        desc:"350+ Options"
    },
    {
        image:"https://ii3.pepperfry.com/assets/bb94fa_1676386932459_Mattress_1280_mattressbyconfortlevel_14feb_2.jpg",
        title:"Medium Soft",
        desc:"500+ Options"
    },
    {
        image:"https://ii1.pepperfry.com/assets/57ed47_1676386955774_Mattress_1280_mattressbyconfortlevel_14feb_3.jpg",
        title:"Medium Firm",
        desc:"1000+ Options"
    },
    {
        image:"https://ii3.pepperfry.com/assets/0186a1_1676386980120_Mattress_1280_mattressbyconfortlevel_14feb_4.jpg",
        title:"Firm",
        desc:"250+ Options"
    }
]
let data6=[
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
            <img style={{width:"90%",marginTop:"20px",margin:"auto"}} src="https://ii2.pepperfry.com/assets/2256f737-566f-4a88-bea0-47bd93a24715.jpg" alt="err"/>
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
            <h2 style={{color:"#a57137",marginTop:"20px"}}>Shop By Categories</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data1.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"265px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}} >
            <Link to="/MatteressesProducts" style={{color:"#ff7035"}} >Show all Products</Link>
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Shop Best Sellers</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data2.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"220px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                        <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Explore Popular Brands</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data3.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"220px"}} src={ele.image} alt="err" />
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Select Mattress by Type</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data4.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"450px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                    </div>
                ))}
            </div>
            <div style={{fontFamily:"Manrope, sans-serif"}}>
                 <h2 style={{color:"#a57137",marginTop:"20px"}}>Select Mattress by Comfort Level</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
                {data5.map((ele)=>(
                    <div>
                        <img style={{borderRadius:"3px",width:"335px"}} src={ele.image} alt="err" />
                        <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                        <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                    </div>
                ))}
            </div>
            <Footer />
          </div>
  )
}
