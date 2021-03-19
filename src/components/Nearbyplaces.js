import React from 'react'
import './Nearbyplaces.css'
import {nearbyplacesdata} from '../data/nearbyplacesdata'
import FirstCard from './FirstCard'


function Nearbyplaces() {
    return (
        <div className="nearbyplaces">
            {
                nearbyplacesdata.map(({place, time, img}) => (
                    <FirstCard  
                        place={place}
                        time={time}
                        img={img}
                        />
                ))
            }
            {/* <div className="nearbyplace">
                <img 
                    src="https://holeinthedonut.com/wp-content/uploads/2018/03/Nepal-Pokhara-Wooden-boats-on-Phewa-Lake.jpg"
                    alt=""
                    />
                <div className="nearbyplace__contents">
                    <span>Pokhara</span>
                    <p>2 hour drive</p>
                </div>
                
            </div>

            <div className="nearbyplace">
                <img 
                    src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2017/03/One-horn-rhino.jpg"
                    alt=""
                    />
                <div className="nearbyplace__contents">
                    <span>Chitwan</span>
                    <p>2.5 hour drive</p>
                </div>
                
            </div>

            <div className="nearbyplace">
                <img 
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/40/02/28/nagarkot.jpg?w=1000&h=700&s=1"
                    alt=""
                    />
                <div className="nearbyplace__contents">
                    <span>Nagarkot</span>
                    <p>1.5 hour drive</p>
                </div>
                
            </div>
            <div className="nearbyplace">
                <img 
                    src="https://omgnepal.com/wp-content/uploads/2019/02/featyre-768x505.jpg"
                    alt=""
                    />
                <div className="nearbyplace__contents">
                    <span>Gorkha</span>
                    <p>2.5 hour drive</p>
                </div>
                
            </div> */}
        </div>
    )
}

export default Nearbyplaces
