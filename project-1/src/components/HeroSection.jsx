const HeroSection = ( )=>{
    return(
<main className="hero">
    <div className="hero-content">
    <h1 className="bg-gradient-to-r from-blue-500 to-purple-700">YOUR FEET  DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
    <div className="hero-button">
        <button>Shop Now</button>
        <button className ="secondry-btn">Category</button>
    </div>
    <div className="shopping"><p>Also Available On</p>
    <div className="brand-icons">
        <img src = "/images/amazon.png" alt="logo"/>
        <img src = "/images/flipkart.png" alt="logo"/>
       
    </div>
    </div>
    
    </div>
    <div className="hero-image"> <img src = "/images/shoe_image.png" alt="logo"/>
    </div>
</main>
    );

};
export default HeroSection;