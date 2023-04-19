import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Furniture(){
  let  data1=[
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_1.jpg",
           title:"Sofas"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_2.jpg",
           title:"Sectional Sofas"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_3.jpg",
           title:"Sofa Cum Beds"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_4.jpg",
           title:"Futons"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_5.jpg",
           title:"Chaise Loungers"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_6.jpg",
           title:"Bean Bags"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_7.jpg",
           title:"Recliners"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_8.jpg",
           title:"Sofa Chairs"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_9.jpg",
           title:"Settees & Benches"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_10.jpg",
           title:"Ottomans"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_11.jpg",
           title:"Chairs"
       },
       {
           image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_12.jpg",
           title:"Gaming Chairs"
       }
   ]
  let data2=[
   {
       image:"https://ii3.pepperfry.com/assets/856ae6_1676550674345_Mattress_1280_careforyourfurniture_15feb_1.jpg",
   },
   {
       image:"https://ii2.pepperfry.com/assets/11ae96_1676550686612_Mattress_1280_careforyourfurniture_15feb_2.jpg",
   }
   ]
   let data3=[
       {
           image:"https://ii1.pepperfry.com/assets/bc655f_1676553477070_Furniture_1280_shopbestsellers_15feb_1.jpg",
           title:"Beds with Box Storage",
           desc:"300 + Options, Starting ₹10710"
       },
       {
           image:"https://ii1.pepperfry.com/assets/74c0d4_1676553491362_Furniture_1280_shopbestsellers_15feb_2.jpg",
           title:"3 Door Wardrobes",
           desc:"120+ Options, Starting ₹13759"
       },
       {
           image:"https://ii2.pepperfry.com/assets/4c4e5c_1676553520894_Furniture_1280_shopbestsellers_15feb_3.jpg",
           title:"Modern Writing Tables",
           desc:"180+ Options, Starting ₹2799"
       },
       {
           image:"https://ii2.pepperfry.com/assets/210c73_1676553555253_Furniture_1280_shopbestsellers_15feb_4.jpg",
           title:"Ergonomic Chairs",
           desc:"250+ Options, Starting ₹3799"
       },
       {
           image:"https://ii2.pepperfry.com/assets/72aeb3_1676553581614_Furniture_1280_shopbestsellers_15feb_5.jpg",
           title:"Modern Book Shelves",
           desc:"140+ Options, Starting ₹1079"
       },
       {
           image:"https://ii1.pepperfry.com/assets/43d3ba_1676553641331_Furniture_1280_shopbestsellers_15feb_6.jpg",
           title:"Shoe Cabinets",
           desc:"95+ Options, Starting ₹3499"
       }
   ]
   let data4=[
       {
           image:"https://ii1.pepperfry.com/assets/78c56a_1676463002000_Mattress_1280_discovernewlaunches_15feb_1.jpg",
           title:"Chippa Collection by Mudramark",
           desc:"18+ Options"
       },
       {
           image:"https://ii2.pepperfry.com/assets/962f84_1676463035057_Mattress_1280_discovernewlaunches_15feb_2.jpg",
           title:"Orange Tree",
           desc:"90+ Options"
       },
       {
           image:"https://ii2.pepperfry.com/assets/f9dff4_1676463075152_Mattress_1280_discovernewlaunches_15feb_3.jpg",
           title:"Cabinets and Sideboards",
           desc:"160+ Options"
       },
       {
           image:"https://ii2.pepperfry.com/assets/a61357_1676463123576_Mattress_1280_discovernewlaunches_15feb_4.jpg",
           title:"SpeedX Home Bars",
           desc:"10+ Options"
       }
        
   ]
   let data5=[
       {
           image:"https://ii3.pepperfry.com/assets/33159a_1676463432214_Mattress_1280_followtrends_15feb_1.jpg",
           title:"Jewel Toned 3 Seater Sofas",
           desc:"240+ Options"
       },
       {
           image:"https://ii2.pepperfry.com/assets/faedcb_1676463458834_Mattress_1280_followtrends_15feb_2.jpg",
           title:"Modern TV Consoles",
           desc:"75+ Options"
       },
       {
           image:"https://ii1.pepperfry.com/assets/0d36cb_1676463483202_Mattress_1280_followtrends_15feb_3.jpg",
           title:"Marble & Glass Top Dining Sets",
           desc:"50+ Options"
       },
       {
           image:"https://ii3.pepperfry.com/assets/40e97f_1676463507968_Mattress_1280_followtrends_15feb_4.jpg",
           title:"Upholstered King Size Beds",
           desc:"60+ Options"
       },
       {
           image:"https://ii3.pepperfry.com/assets/c6a5e2_1676463541666_Mattress_1280_followtrends_15feb_5.jpg",
           title:"Cozy Wing Chairs",
           desc:"30+ Options"
       },
       {
           image:"https://ii3.pepperfry.com/assets/a843d2_1676463573832_Mattress_1280_followtrends_15feb_6.jpg",
           title:"Bone Inlay Tables",
           desc:"20+ Options"
       }
   ]
   
   let data6=[
       {
           image:"https://ii1.pepperfry.com/assets/7b1e8b_1676463731811_Mattress_1280_curatedcollection_15feb_1.jpg",
           title:"Noyes Collection by Amberville",
           desc:"Modern Color Palette and Timeless Colonial Style Legs"
       },
       {
           image:"https://ii2.pepperfry.com/assets/8bfa4c_1676463823208_Mattress_1280_curatedcollection_15feb_2.jpg",
           title:"Flair Collection by Woodsworth",
           desc:"Inspired by Handicraft - Tarakashi, Combinaiton of Wood & Brass"
       },
       {
           image:"https://ii2.pepperfry.com/assets/0a6570_1676463859492_Mattress_1280_curatedcollection_15feb_3.jpg",
           title:"Traditional Furniture by Aakriti Art Creations",
           desc:"Teak Wood Traditional Furniture"
       }
   ]
   let data7=[
       {
           image:"https://ii3.pepperfry.com/assets/38a3bf_1676463932184_Mattress_1280_popularbrands_15feb_1.jpg"
       },
       {
           image:"https://ii3.pepperfry.com/assets/19635a_1676464338249_Mattress_1280_popularbrands_15feb_2.jpg"
       },
       {
           image:"https://ii3.pepperfry.com/assets/e753a8_1676464368221_Mattress_1280_popularbrands_15feb_3.jpg"
       },
       {
           image:"https://ii3.pepperfry.com/assets/917a43_1677155397702_Mattress_1280_popularbrands_15feb_4.jpg"
       },
       {
           image:"https://ii3.pepperfry.com/assets/b0ec4b_1676464435004_Mattress_1280_popularbrands_15feb_5.jpg"
       },
       {
           image:"https://ii2.pepperfry.com/assets/c7cf67_1676464529860_Mattress_1280_popularbrands_15feb_6.jpg"
       }
   ]
   let data8=[
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
       }
   ]
   return (
      <div>
        <Navbar />
           <div>
           <img style={{width:"90%",marginTop:"20px",margin:"auto"}} src="https://ii3.pepperfry.com/assets/77764c_1676462366378_Furniture_1280_promobanner_15feb_1.jpg" alt="err" />
           </div>
           <div style={{fontFamily:"Manrope, sans-serif"}}>
           <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Shop By Categories</h2>
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

               <Link to="/FurnitureProducts" style={{color:"#ff7035"}} >Show all Products</Link>
               
           </div>
           <div style={{fontFamily:"Manrope, sans-serif"}}>
                <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Care For Your Furniture</h2>
           </div>
           <div style={{display:"flex",gap:"10px",width:"90%",margin:"auto",marginTop:"20px",fontFamily:"Manrope, sans-serif",fontWeight:"400px"}}>
               {data2.map((ele)=>(
                   <div>
                       <img style={{borderRadius:"3px",width:"100%"}} src={ele.image} alt="err" />
                   </div>
               ))}
           </div>
           <div style={{fontFamily:"Manrope, sans-serif"}}>
                <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Shop Best Sellers</h2>
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
                <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Discover New Launches</h2>
           </div>
           <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
               {data4.map((ele)=>(
                   <div>
                       <img style={{borderRadius:"3px",width:"330px"}} src={ele.image} alt="err" />
                       <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                       <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                   </div>
               ))}
           </div>
           <div style={{fontFamily:"Manrope, sans-serif"}}>
                <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Follow Trends In Furniture</h2>
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
                <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Check Out These Curated Collections</h2>
           </div>
           <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>

               {data6.map((ele)=>(
                   <div>
                       <img style={{borderRadius:"3px",width:"450px"}} src={ele.image} alt="err" />
                       <h4 style={{textAlign:"start",color:"#605b5b",marginTop:"0px"}}>{ele.title}</h4>
                       <p style={{textAlign:"start",fontSize:"12px",color:"#a8a9a8"}}>{ele.desc}</p>
                   </div>
               ))}
           </div>
           <div style={{fontFamily:"Manrope, sans-serif"}}>
                <h2 style={{color:"#a57137",fontWeight:"700",marginTop:"20px",fontSize:"18px"}}>Explore Popular Brands</h2>
           </div>
           <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"90%",margin:"auto",fontFamily:"Manrope, sans-serif",fontWeight:"400px",marginTop:"20px"}}>
               {data7.map((ele)=>(
                   <div>
                       <img style={{borderRadius:"3px",width:"220px"}} src={ele.image} alt="err" />
                   </div>
               ))}
           </div>
           <div style={{fontFamily:"Manrope, sans-seri",marginLeft:'75px',marginRight:"75PX"}}>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>Buy Wooden Furniture Online</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>Buy furniture online @ Pepperfry - India's largest home shopping destination offering a wide range of home and office furniture online. Choosing the right furniture for your home online will add elegance and functionality to your interior decor, while it will also be cost effective and long lasting at the same time. Enjoy fast shipping as well as cash on delivery at our online store.</p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>Things to Consider Before Buying Furniture</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>There are so many furniture designs available nowadays. Looking at these, you may end up in a confusion of which one to buy. However, you must understand your requirements before purchasing the furniture. Here is a list of common factors that can help you understand your needs better:</p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>
                   <li>Size of the area where the furniture will be placed</li><br />
                   <li>Size of the furniture</li><br />
                   <li>Purpose of the furniture, whether bed, sofa, or cabinet</li><br />
                   <li>Features of the furniture</li><br />
                   <li>Its material, design, and color</li><br />
                   <li>Your budget</li><br />
                   Who said furniture should only fulfill its purpose? You can go a mile extra with your creativity skills by mixing and matching different furniture designs to beautify your home dcor. For example, you can set up quirky benches as a seating arrangement instead of sofas in the living area and amp up the liveliness of your home. Similarly, your bedroom furniture design reflects your personality, so it is all in the way you style it, then be it a modular wardrobe or a loft bed with storage and desk functionality.
               </p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>Exclusive Range of Furniture Online</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>Pepperfry.com is the best place to buy metal as well as wooden furniture online in India. Here at Pepperfry, we are committed to offering our customers the widest range in home furniture like tables, sofas, chairs for living room as well as beds, sofa set, wardrobes, side tables, dressing tables for bedroom and crockery cabinets, chest of drawers for kitchen especially in solid wood and sheesham furniture designs, so that it is easy and hassle free to buy furniture online. Our furniture is intelligently designed to give both comfort and functionality; while we also go to great lengths to ensure that we source only the highest quality raw materials and use the latest technologies to manufacture each individual piece.</p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>Wooden Furniture in Solid Wood & Sheesham Designs</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>Our exhaustive range offers multiple options in solid, mango, teak, rubber, acacia, ply, engineered and sheesham wood furniture pieces, while all our wooden furniture can also be customized to suit the individual needs of our customers. We also offer solid wood furniture in beds, dining tables, shoe racks, storage and reception cabinets at our online marketplace. See various sofa designs side by side, compare prices and finishes and find exclusive modular furniture pieces that you would not find at local furniture stores.</p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>Frequently Asked Questions</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>What is the most popular furniture style?</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>The most popular furniture styles include rustic farmhouse, modern, glam, and traditional. The chances of these furniture styles going out of trend are minimal.</p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>What are the latest trends in furniture?</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>The latest trends in furniture include bamboo furniture, denim, jungle prints and neutral palette upholstered furniture, multi-functional furniture, unique metal furniture, and artisan-inspired furniture.</p>
               <p style={{fontSize:"15px",textAlign:"justify"}}><b>What wood is best for furniture?</b></p>
               <p style={{fontSize:"15px",textAlign:"justify"}}>Hardwoods such as maple, oak, teak, mahogany, walnut, ash, acacia are some of the most commonly used wood types that are best for furniture.</p>
           </div>

           <Footer />

       </div>
   )
}
export default Furniture
