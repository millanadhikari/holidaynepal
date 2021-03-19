import React from 'react'
import './Footersocial.css'
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Footersocial() {
    return (
        <div className="footersocial">
            <div>
               <div>
                    <div><LanguageIcon/></div> <div>English</div>

                
                    <div><MonetizationOnIcon/></div> <div>AUD</div>

               </div>
                    
                <div><FacebookIcon/></div>
                <div><InstagramIcon/></div>
                <div> <YouTubeIcon/></div>

                
                

            </div>
           
            <div>
                <div>
                    <h5>Download the app</h5>
                </div>
                
                <div>
                    <div>
                         <img src="https://powerbox-na-file.trend.org/SFDC/DownloadFile_iv.php?jsonInfo=%7B%22Query%22:%22Y73vob57cpwg61BVySI15AM/b6KfVWlrILBAlttJQHrF8Bw65Ls4bSDZmNeHUYeSc2wAG%2BLmkJjB/lq7G9JWox8GUVGKFUCYi8UwLYTxNIeTinOraa2zQ1/SsCEsbOVn1O%2B/5eh%2BwkXBJ/zxx9mYPlu16uwwHgyJDysHIpSAkWlFakI023%2B41OOWNOGyjXh7Hvhx9%2BsA2RvVYTIMdawGs4OP3tu2XxXxhZVoBxy/KXOjO0e9kycM7pSoUNfWZ2BWiH3gGzIKltvdfYfdyBC7a4iqvKyQuW4xK3EJrAnFYgU%3D%22%2C%22iv%22:%22e36ff6e957247366dac435e34afd1db9%22%7D"/>
                    </div>
                    <div>
                         <img src="https://miro.medium.com/max/1146/1*POlwgD8liUYUqiEU6IU1Pw.png"/>
                    </div>
                    
                </div>
               

            </div>
           
            
        </div>
    )
}

export default Footersocial
