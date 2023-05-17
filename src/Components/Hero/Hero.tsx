
import mock1 from "../../assets/mock1.png";
import mock2 from "../../assets/mock2.png";
import mock4 from "../../assets/mock4.png";
import mock5 from "../../assets/mock5.png";




import './Hero.css'
function Hero() {




    return (
        <div className="heroContain">
            <div className='heroText'>
                <div className="heroHeader">
                    <p className='heroText1'> Empowering Seamless Crypto Payments  </p>
                </div>
                <div className="heroSubHeader">
                    <p className='heroText2'>Friday the all-in-one crypto wallet app that simplifies your digital asset management. Securely store, send, and receive cryptocurrencies with ease. Join Friday and unlock the potential of the crypto world confidently. </p>
                </div>
            </div>
            <div className='heroDisplay'>

                <div className="bannercontainer">
                    <img src={mock2} alt="banner" className='banner' />
                </div>
                <div className="bannercontainer">
                    <img src={mock4} alt="banner2" className='banner' />
                </div>

            </div>
        </div>
    )
}

export default Hero;