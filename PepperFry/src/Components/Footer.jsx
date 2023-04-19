import React from 'react'
import { VStack } from '@chakra-ui/react'
import styles from "./styles/footer.module.css"

function Footer() {


  return (


    <div className={styles.parent}>

        <div className={styles.container} >
            <div>
                <ul>
                <h2>Corporate</h2>
                <li>About Us</li>
                <li>Corporate Governance</li>
                <li>Pepperfry in the News</li>
                <li>Careers</li>
                </ul>
            </div>
            <div>
            <ul>
                <h2>Useful Links</h2>
                <li>Explore Gift Cards</li>
                <li>Buy in Bulk</li>
                <li>Discover Our Brands</li>
                <li>Check Out Bonhomie, Our Blog</li>
                <li>Find a Studio</li>
            </ul>
            </div>
            <div>
                <ul >
                <h2>Partner With Us</h2>
                <li>Sell on Pepperfry</li>
                <li>Become a Franchisee</li>
                <li>Become Our Channel Partner</li>
                <li>Become Our Pep Homie</li>
                <li>Our Marketplace Policies</li>
                <li>Merchant Dashboard Login</li>
                </ul>
            </div>
            <div>
                <ul>
                <h2>Need Help?</h2>
                <li>FAQs</li>
                <li>Policies</li>
                <li>Contact Us</li>
                </ul>
            </div>
            <VStack>
            <div>
                <p style={{fontSize:"16px",fontWeight:"700"}}>Download our App</p>
            </div>
            <div>
                <img width="200px" src="https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-apple-appstore-logo_2x.png" />
            </div>
            <div>
                <img width="200px" src="https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-google-playstore-logo_2x.png" />
            </div>
            </VStack>
        
        </div>
        
        <div className={styles.container2}>
        <div>
            <h2>Popular Categories</h2>
            <p>
                Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves,TV & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study Tables,Office Furniture,Dining Tables,Carpets,Wall Art
            </p>
        </div>
        <div>
            <h2>Popular Brands</h2>
            <p>
                Mintwud,Woodsworth,CasaCraft,Amberville,Mudramark,Bohemiana,Clouddio,Spacewood,Durian,Star India,Adiko Systems,Crystal Furnitech,Springtek,Story@Home,Furnitech,Trevi Furniture,Durfi,Muebles Casa,Febonic,Smartsters
            </p>
        </div>
        <div>
            <h2>Popular cities</h2>
            <p>
                Bengaluru,Mumbai,Navi Mumbai,Delhi,Hyderabad,Pune,Chennai,Gurgaon,Kolkata,Noida,Goa,Ghaziabad,Faridabad,Jaipur,Lucknow,Kochi,Visakhapatnam,Chandigarh,Vadodara,Nagpur,Thiruvananthapuram,Indore,Mysore,Bhopal,Surat,Jalandhar,Patna,Ludhiana,Ahmedabad,Nashik,Madurai,Kanpur,Aurangabad
            </p>
        </div>
        </div>
        <hr />

        <div className={styles.bottomCard}>
            <div>
            <p>We accept</p>
            <div>
                <img src="https://ii2.pepperfry.com/assets/w23-pf-visa.jpg"  />
                <img src="https://ii3.pepperfry.com/assets/w23-pf-master-card.jpg"  />
                <img src="https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg"  />
                <img src="https://ii3.pepperfry.com/assets/w23-pf-american-express.jpg"/>
                <img src="https://ii3.pepperfry.com/assets/w23-pf-rupay.jpg"  />
                <img src="https://ii3.pepperfry.com/assets/w23-pf-dinners-club.jpg"  />
                <img src="https://ii2.pepperfry.com/assets/w23-pf-wallet.jpg"  />
                <img src="https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg"  />
            </div>
            </div>
            <div>
                <p>Like What You See? Follow us Here</p>
                <div>
                    <img src="https://ii1.pepperfry.com/assets/w23-pf-social-insta.png" />
                    <img src="https://ii2.pepperfry.com/assets/w23-pf-social-fb.png" />
                    <img src="https://ii3.pepperfry.com/assets/w23-pf-social-pinterest.png" />
                    <img src="https://ii2.pepperfry.com/assets/w23-pf-social-linkedin.png" />
                    <img src="https://ii2.pepperfry.com/assets/w23-pf-social-youtube.png" />
                    <img src="https://ii2.pepperfry.com/assets/w23-pf-social-twitter.png"  />
                </div>

            </div>
        </div>
        <hr />
        <div className={styles.bottomText}>
            <div>
                <p>Whitehat</p>
                <p>Sitemap</p>
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
                <p>Your Data and Security</p>
                <p>Grievance Redressal</p>
            </div>
            <div>
                <p>© Copyright Pepperfry Limited</p>
            </div>
        </div>
    </div>


  )
}
export default Footer