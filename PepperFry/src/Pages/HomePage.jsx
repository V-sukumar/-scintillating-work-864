import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function HomePage() {

    const SmallCards=[
        {
            img:"https://ii3.pepperfry.com/media/catalog/product/g/r/494x544/green-artificial-grass-solid-12x18-inches-anti-skid--doormat-by-status-green-artificial-grass-solid--drkll9.jpg",
            text:"Green Artificial Grass",
            price:79,
            originalPrice:399,
            offer:37
        },
        {
            img:"https://ii3.pepperfry.com/media/catalog/product/p/h/494x544/philodendron-oxycardium-green-natural-plant-in-white-self-watering-plastic-pot-by-ugaoo-philodendron-2aij6d.jpg",
            text:"Blue Floral Cotton Blend Queen",
            price:589,
            originalPrice:2199,
            offer:73
        },
        {
            img:"https://ii3.pepperfry.com/media/catalog/product/m/u/494x544/multicolor-floral-280-tc-cotton-blend-double-queen-size-bedsheet-with-2-pillow-covers-by-hosta-homes-7p2zmo.jpg",
            text:"Carolie Beige Jute Night Lamp",
            price:775,
            originalPrice:2499,
            offer:69
        },
        {
            img:"https://ii3.pepperfry.com/media/catalog/product/f/a/494x544/fashionable-beige-jute-shade-table-lamp-with-black-base-by-new-era-fashionable-beige-jute-shade-tabl-amwn49.jpg",
            text:"Cream Abstract Polyester 2.5 ft",
            price:351,
            originalPrice:599,
            offer:41
        },
        {
            img:"https://ii3.pepperfry.com/media/catalog/product/c/r/494x544/cream-abstract-machine-made-nylon-carpet-2-5x2-5-feet-by-status-cream-abstract-machine-made-nylon-ca-afvfjo.jpg",
            text:"Hexagon Mirror Base Black Glass",
            price:818,
            originalPrice:1575,
            offer:48
        },
        {
            img:"https://ii3.pepperfry.com/media/catalog/product/b/l/494x544/black---metal-and-glass-hexagonal-vanity-tray-by-lamjum-black---metal-and-glass-hexagonal-vanity-tra-m1rrxk.jpg",
            text:"Blue Ceramic Moroccan Roots",
            price:549,
            originalPrice:799,
            offer:31
        }
    ]

    const BigCards1=[
        {
            img:"https://ii3.pepperfry.com/assets/91990c7e-aeb4-42ee-8b10-698a67eb103a.jpg",
            heading:"Dining Sets",
            desc:"2, 4, 6 & 8 Seater Dining Sets"
        },
        {
            img:"https://ii3.pepperfry.com/assets/0d20f243-0482-4841-ab31-5daecea7bf9e.jpg",
            heading:"Nature Print Cushion Covers",
            desc:"Floral & Colourful Cushion Covers"
        },
        {
            img:"https://ii2.pepperfry.com/assets/e4fd9c02-9561-4041-b00d-7b8ce9b73cbd.jpg",
            heading:"Floral Queen Bedsheets",
            desc:"Cotton & Microfibre Bedsheets"
        },
        {
            img:"https://ii1.pepperfry.com/assets/4353fcc5-7549-4e52-9505-663f41386523.jpg",
            heading:"Wardrobes",
            desc:"2, 3,4 Door, Sliding Door"
        },
        {
            img:"https://ii3.pepperfry.com/assets/b446a01d-f410-445c-af74-9baee4320b91.jpg",
            heading:"Study Tables",
            desc:"Writing,Office and Computer Tables"
        },
        {
            img:"https://ii3.pepperfry.com/assets/153cfa16-9066-4222-a34b-81f0d6af676b.jpg",
            heading:"3 Seater Sofas",
            desc:"Modern, Contemporary, Chesterfield Sofas"
        }
    ]

    const smallCards2=[
        {
            img:"https://ii2.pepperfry.com/assets/c5286320-6f53-4b7e-a589-13bfce02e181.jpg",
            heading:"Living Room Trunks",
            price:1499
        },
        {
            img:"https://ii1.pepperfry.com/assets/ea0ecae4-c87e-4c67-8f57-1f431cabfb2c.jpg",
            heading:"House Keeping",
            price:269
        },
        {
            img:"https://ii1.pepperfry.com/assets/f51ab974-11a6-46ac-871e-ef1ebb7208fb.jpg",
            heading:"Sadora Baby- Kids Furniture",
            price:12000
        },
        {
            img:"https://ii1.pepperfry.com/assets/51341bc8-0c30-4f95-b05b-c911f0502078.jpg",
            heading:"Bath Accessories",
            price:319
        }
    ]

    const bigCards2=[
        {
            img:"https://ii1.pepperfry.com/assets/0c642088-2ee3-43ce-8f63-c01274b41bc4.jpg",
            heading:"Vintage Style Chesterfield Sofas",
            options:50,
            price:32400
        },
        {
            img:"https://ii3.pepperfry.com/assets/d2fa3bd1-d8f0-4bf4-b869-4dda35a3f297.jpg",
            heading:"Maximalist Wall Plates",
            options:580,
            price:774
        },
        {
            img:"https://ii1.pepperfry.com/assets/7a18c792-464a-4540-a19e-e3b7a6710643.jpg",
            heading:"Self Love Time- Arm Chairs",
            options:160,
            price:8455
        },
        {
            img:"https://ii3.pepperfry.com/assets/246614ff-5194-4eb0-a9e9-2888fe46a642.jpg",
            heading:"Multipurpose Floor Lamps",
            options:540,
            price:1750
        },
        {
            img:"https://ii2.pepperfry.com/assets/28231635-f5e9-4d47-96ee-32dfadc4c5b6.jpg",
            heading:"Rom-Com Aesthetic Upholstered Beds",
            options:75,
            price:9367
        },
        {
            img:"https://ii3.pepperfry.com/assets/013ea4be-3b4f-4b46-aabf-4494db34d700.jpg",
            heading:"Ceramic Tea Cups",
            options:360,
            price:389
        }
    ]
    const smCards3=[
        {
            img:"https://ii3.pepperfry.com/assets/52d7986a-0666-42f0-a930-6e703b98876a.jpg",
            heading:"Aalankar Collection",
            options:25,
            price:7999
        },
        {
            img:"https://ii2.pepperfry.com/assets/ffeff351-6f79-4765-8cf8-29c3970e2cfe.jpg",
            heading:"Kosmo Weave Collection",
            options:7,
            price:3440
        },
        {
            img:"https://ii3.pepperfry.com/assets/7bb333f8-b1de-4d87-acd2-79b8b22a9221.jpg",
            heading:"Gafieira Collection",
            options:12,
            price:13999
        }
    ]

    const Secondbanner = [
        {
            img:"https://ii1.pepperfry.com/assets/01998fbf-bc2e-47ad-ab31-bd31cb9e1bcd.jpg"
        },
        {
            img:"https://ii2.pepperfry.com/assets/6299634e-8266-494e-9590-cdb72e756ec8.jpg"
        },
        {
            img:"https://ii1.pepperfry.com/assets/14a06640-f0b2-4137-b9b7-accfef67ab92.jpg"
        }
    ]

  return (
    <div>
        <Navbar />
    <div style={{width:"90%",margin:"auto"}}>
        <div style={{marginTop:"30px"}}>
        <img style={{cursor:"pointer"}} src="https://ii3.pepperfry.com/assets/8ae75f55-413f-4c2a-90c9-28bf23673cde.jpg" alt='err'/>
        </div>
        <div style={{display:"grid" ,gridTemplateColumns:"repeat(3,1fr)",marginTop:"25px",alignItems:"center",gap:"15px",cursor:"pointer"}}>
            {Secondbanner.map((bannner)=>(

            <div>
                <img src={bannner.img} alt="Not found"/>
            </div>

            ))}

        </div>

        <div style={{marginTop:"25px",cursor:"pointer"}}>
            <img src="https://ii3.pepperfry.com/assets/7d5b52d6-b3c5-4d27-b3c3-228c9063d1c6.jpeg"  alt='Not found'/>
        </div>

        <div style={{marginTop:"60px",fontFamily:"Poppins, sans-serif",fontWeight:"700",color:"#9d6a37",fontSize:"20px"}}> 
            <p>Shop What the Fry Deals</p>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)",margin:"auto",gap:"12px",marginTop:"20px",fontFamily:"Manrope, sans-serif",fontSize:"14px",fontWeight:"700",lineHeight:"24px",textAlign:"start"}}>

            {SmallCards.map((cards)=>(
            <div style={{cursor:"pointer"}}>
                <img src={cards.img}  alt={cards.text}/>
                <div>
                <p style={{fontSize:"12px",fontWeight:"600"}}>{cards.text}</p>
                <p>₹{cards.price} <span style={{textDecoration:"line-through",color:"#5b5b5b",fontWeight:"500"}}>₹{cards.originalPrice}</span> <span style={{color:"#67AD5B"}}>{cards.offer}%</span></p>
                </div>
            </div>
            ))}
        </div>

        <div style={{marginTop:"60px",fontFamily:"Poppins, sans-serif",fontWeight:"700",color:"#9d6a37",fontSize:"20px"}}> 
            <p>Explore Most Wanted</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"10px",textAlign:"start",marginTop:"20px",         fontFamily:"Manrope, sans-serif",fontWeight:"700",color:"#5b5b5b"}}>
            {BigCards1.map((bgCards)=>(
                <div style={{cursor:"pointer"}}>
                    <img src={bgCards.img} alt={bgCards.heading}/>
                    <h4 >{bgCards.heading}</h4>
                    <p style={{fontSize:"11px"}}>{bgCards.desc}</p>
                </div>
            ))}
        </div>

        <div style={{marginTop:"60px",fontFamily:"Poppins, sans-serif",fontWeight:"700",color:"#9d6a37",fontSize:"20px"}}> 
            <p>Discover Our Newest Arrivals</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"10px",textAlign:"start",marginTop:"20px",         fontFamily:"Manrope, sans-serif",fontWeight:"700",color:"#5b5b5b"}}>
                {smallCards2.map((smCards)=>(
                    <div style={{cursor:"pointer"}}>
                        <img src={smCards.img} alt={smCards.heading}/>
                        <h4>{smCards.heading}</h4>
                        <p style={{fontSize:"12px"}}>Starting ₹{smCards.price}</p>
                    </div>
                ))}
        </div>

        <div style={{marginTop:"60px",fontFamily:"Poppins, sans-serif",fontWeight:"700",color:"#9d6a37",fontSize:"20px"}}> 
            <p>Follow Home Interior Trends</p>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"10px",textAlign:"start",marginTop:"20px",         fontFamily:"Manrope, sans-serif",fontWeight:"700",color:"#5b5b5b"}}>
            {bigCards2.map((cards)=>(
                <div>
                     <img src={cards.img} alt={cards.heading}/>
                    <h4 >{cards.heading}</h4>
                    <p style={{fontSize:"11px"}}>{cards.options}+ Options, Explore Starting ₹{cards.price}</p>
                </div>
            ))}
        </div>

        <div style={{marginTop:"60px",fontFamily:"Poppins, sans-serif",fontWeight:"700",color:"#9d6a37",fontSize:"20px"}}> 
            <p>Check Out These Collections</p>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"10px",textAlign:"start",marginTop:"20px",         fontFamily:"Manrope, sans-serif",fontWeight:"700",color:"#5b5b5b",marginBottom:"70px"}}>
            {smCards3.map((cards)=>(
                <div>
                <img src={cards.img} alt={cards.heading}/>
               <h4 >{cards.heading}</h4>
               <p style={{fontSize:"11px"}}>{cards.options}+ Options, Explore Starting ₹{cards.price}</p>
           </div>
            ))}
        </div>
        <hr />

        <div style={{width:"80%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",alignItems:"center",margin:"auto",fontSize:"14px",textAlign:"center",fontWeight:"700",color:"#5b5b5b",padding:"30px"}}>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src="https://ii1.pepperfry.com/assets/w22-delivery-usp-icon.svg" alt='err'/>
            <p>10 Million Happy Deliveries</p>
            </div>
            <div style={{display:"flex" ,alignItems:"center"}}>
            <img src="https://ii1.pepperfry.com/assets/w22-studio-usp-icon.svg" alt='err'/>
            <p>200 Studios Across 95 Cities</p>
            </div>
            <div style={{display:"flex" ,alignItems:"center"}}>
            <img src="https://ii1.pepperfry.com/assets/w22-return-usp-icon.svg" alt='err'/>
            <p>7 Day Easy Return Policy</p>
            </div>
        </div>
    </div>
    <Footer />

    </div>
  )
}

export default HomePage
