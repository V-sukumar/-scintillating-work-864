import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
export default function KitchenAndDining() {
  let data1=[
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_1.jpg",
        title:"Serveware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_2.jpg",
        title:"Cookware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_4.jpg",
        title:"Dinnerware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_3.jpg",
        title:"Teaware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_9.jpg",
        title:"Bakeware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_7.jpg",
        title:"Knives & Cutlery"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_5.jpg",
        title:"Drinkware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_6.jpg",
        title:"Barware"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_10.jpg",
        title:"Table Linen"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_8.jpg",
        title:"Table Essentials"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_11.jpg",
        title:"Kitchen Organizers"
    },
    {
        image:"https://ii1.pepperfry.com/media/wysiwyg/banners/Kitchen&dining_1440_category_16feb_12.jpg",
        title:"Kitchen Linen"
    }
]
let data2=[
    {
        image:"https://ii3.pepperfry.com/assets/82501c_1676643199782_kitchen%26dining_1280_deal_17feb_1.jpg",
    },
    {
        image:"https://ii1.pepperfry.com/assets/f3a1bf_1676643218185_kitchen%26dining_1280_deal_17feb_2.jpg",
    }
]
let data3=[
    {
        image:"https://ii3.pepperfry.com/assets/c67a50_1676543149580_kitchen%26dining_1280_bestseller_16feb_1.jpg",
        title:"Coffee Mugs",
        desc:"170 + Options, Starting ₹242"
    },
    {
        image:"https://ii2.pepperfry.com/assets/e99ef4_1676543190085_kitchen%26dining_1280_bestseller_16feb_2.jpg",
        title:"Serving Trays",
        desc:"151 + Options, Starting ₹259"
    },
    {
        image:"https://ii1.pepperfry.com/assets/e67f63_1676543238980_kitchen%26dining_1280_bestseller_16feb_3.jpg",
        title:"Dinnerware Sets",
        desc:"225 + Options, Starting ₹1109"
    },
    {
        image:"https://ii3.pepperfry.com/assets/2c90f4_1676543368726_kitchen%26dining_1280_bestseller_16feb_4.jpg",
        title:" Cutlery Sets",
        desc:"120 + Options, Starting ₹150"
    },
    {
        image:"https://ii1.pepperfry.com/assets/71bacf_1676543403483_kitchen%26dining_1280_bestseller_16feb_5.jpg",
        title:"Jars and Containers",
        desc:"235 + Options, Starting ₹207"
    },
    {
        image:"https://ii1.pepperfry.com/assets/0e31bb_1676543434202_kitchen%26dining_1280_bestseller_16feb_6.jpg",
        title:"Pots and Handis",
        desc:"130 + Options, Starting ₹399"
    }
]
let data4=[
    {
        image:"https://ii2.pepperfry.com/assets/67fb1f_1676543668090_kitchen%26dining_1280_discover_16feb_1.jpg",
        title:"Lunch Boxes",
        desc:"8 + Options, Starting ₹169"
    },
    {
        image:"https://ii3.pepperfry.com/assets/6bbc45_1676543706031_kitchen%26dining_1280_discover_16feb_2.jpg",
        title:"Frying Pans",
        desc:"55 + Options, Starting ₹355"
    },
    {
        image:"https://ii3.pepperfry.com/assets/e0f4cd_1676543737462_kitchen%26dining_1280_discover_16feb_3.jpg",
        title:"Cloche",
        desc:"25 + Options, Starting ₹1090"
    },
    {
        image:"https://ii1.pepperfry.com/assets/5e64fc_1676543766716_kitchen%26dining_1280_discover_16feb_4.jpg",
        title:"Bottles",
        desc:"75+ Options, Starting ₹369"
    }
]
let data5=[
    {
        image:"https://ii2.pepperfry.com/assets/8f57d2_1676544160531_kitchen%26dining_1280_exploretrends_16feb_1.jpg",
        title:"Wine Glasses",
        desc:"40 + Options, Starting ₹849"
    },
    {
        image:"https://ii2.pepperfry.com/assets/3e0e8b_1676544204717_kitchen%26dining_1280_exploretrends_16feb_2.jpg",
        title:"Wooden Platters",
        desc:"255 + Options, Starting ₹790"
    },
    {
        image:"https://ii2.pepperfry.com/assets/546117_1676544235147_kitchen%26dining_1280_exploretrends_16feb_3.jpg",
        title:"Wooden Casseroles",
        desc:"50 + Options, Starting ₹1404"
    },
    {
        image:"https://ii2.pepperfry.com/assets/5a771e_1676544264366_kitchen%26dining_1280_exploretrends_16feb_4.jpg",
        title:"Cake Stands",
        desc:"85 + Options, Starting ₹660"
    },
    {
        image:"https://ii1.pepperfry.com/assets/1dc6286c-d652-4ffa-860b-7c6ae1f4dabf.jpg",
        title:"Ceramic Dinner Sets",
        desc:"50 + Options, Starting ₹1100"
    },
    {
        image:"https://ii2.pepperfry.com/assets/010d8e_1676544324751_kitchen%26dining_1280_exploretrends_16feb_6.jpg",
        title:"Bamboo Serving Baskets",
        desc:"20 + Options, Starting ₹599"
    }
]
let data6=[
    {
        image:"https://ii2.pepperfry.com/assets/a8b671_1676544977059_kitchen%26dining_1280_popularbrands_16feb_1.jpg"
    },
    {
        image:"https://ii2.pepperfry.com/assets/273952_1676545026697_kitchen%26dining_1280_popularbrands_16feb_2.jpg"
    },
    {
        image:"https://ii1.pepperfry.com/assets/33e19e_1676545057701_kitchen%26dining_1280_popularbrands_16feb_3.jpg"
    },
    {
        image:"https://ii2.pepperfry.com/assets/06169d_1676545085597_kitchen%26dining_1280_popularbrands_16feb_4.jpg"
    },
    {
        image:"https://ii3.pepperfry.com/assets/dff4c1_1676545113952_kitchen%26dining_1280_popularbrands_16feb_5.jpg"
    },
    {
        image:"https://ii3.pepperfry.com/assets/5e8db0_1676545144947_kitchen%26dining_1280_popularbrands_16feb_6.jpg"
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
            <img style={{width:"90%",marginTop:"20px",margin:"auto"}} src="https://ii3.pepperfry.com/assets/6c024d_1676542865470_kitchen%26dining_1280_promobanner_16feb.jpg" alt="err"/>
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
            <Link to="/KitchenAndDiningProducts" style={{color:"#ff7035"}} >Show all Products</Link>
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
                        <img style={{borderRadius:"3px",width:"330px"}} src={ele.image} alt="err" />
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
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Revamp Your House with Lavish Home Decor</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>A home is what you make it! You spend so many hours every single day in your haven, shouldnt it be a pleasant and appealing place to exist? Your home, your sanctuary should be a beautiful place to live in – a place where you feel a sense of calm and belongingness, a sense of pleasure in plain existence. Therefore you should pay special attention to your home and its interiors, and create a charming place for yourself by decorating it to your hearts desire.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>Be it small or big, decorate your home with stylish home decor and enhance its appeal for anyone who spends time there! From the floor to walls and the ceiling, decorate your home all around with the choicest furnishing and decor items that you can buy from Pepperfry.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>Pepperfry has the largest collection of home decor products carefully curated to please every taste, decor and furniture, and complement the unique style of every space. From traditional, modern and contemporary, to Scandinavian and industrial home interiors, find products to match whatever style youve picked for your home. Be it your living room, bedroom or your bath, we have an extensive range of products for every nook and corner of your home. Check out the collection and indulge in some home decor online shopping for your abode.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Different Home Decor Items Available Online</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>You are provided with a galore of Decor options that you can choose from at Pepperfry. Be it setting up your kitchen, bedroom, living room, kids room, or bathroom; you can select products that will blend along with your home. Following are some Decor ideas that you can give a thought to:</p> 
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Garden Decor:</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>If your house features an open space or balcony, you can own a mini garden. You can decorate it with the alluring garden decoration items such as garden figurines, pots and planters, artificial flowers, artificial grass, bird houses, decorative pebbles, and outdoor lighting.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Kitchen Decor:</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>Browse through a lavish collection of homeware to set up your kitchen. You can choose from products such as dinner table, utensil holders, kitchen baskets, everyday glasses, pitchers and decanters, mason jars, coasters, salt and pepper shakers, table linen, and so on. Decorate your kitchen with subtle lighting and simple wall paintings to give it a chic look.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Bedroom Decor:</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>Bedroom decoration can be a tedious task because if not set right, it can mess up with your sleeping and dressing. Pepperfry has a wide range of bedroom furniture and bedding. You can choose from different bed types, such as upholstered, sofa cum bed, trundle, loft, bunk, novelty, and others. There are even cribs available for the kid's room. Bedding options include mattresses, duvets, comforters, mattress protectors, duvet covers, pillows, and bed wedges. Lighting plays an important role; the placement of bedside lamps should be proper. You can even install wall sconces or hanging lights to give it a luxe touch. Choose from bedside tables, study tables, and bean bags to perfectly match your theme.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Living Room Decor:</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>You can style up your living room with plush decor such as recamiers, lounge chairs, end tables, console tables, coffee tables, cabinets, shoe racks, show pieces, planters, indoor fountain, wall art, & photo frames. Add a chandelier, hanging lantern, or any suitable lighting, and you're ready to go.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Shop from Pepperfry</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}>Live life king size in your home with lavish interiors that speak of your opulence and style. From living room decor to bedroom, dining and bath interiors, decorate your home to your hearts content with an extensive and wide range of home decor online, only on Pepperfry. Every product on Pepperfry is quality assured by our expert stylists and team to ensure their functionality and use. Since, its festive season, also avail best prices and heavy discounts on all your purchases.</p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Popular Searches in Home Decor:</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Wall Art</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Canvas Paintings</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Clocks</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Mandirs</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Indoor Planters</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Pebbles</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Ganesh Murtis</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Indoor Fountains</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Candles</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Figurines</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Photo Frames</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Acrylic Paintings</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Wall Shelves</b></p>
                <p style={{fontSize:"15px",textAlign:"justify"}}><b>Vases</b></p>
            </div>
      <Footer />
    </div>
  )
}