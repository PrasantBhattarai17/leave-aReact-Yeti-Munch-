import logo from "../utils/ggg.png";
const About=()=>{
return(
    <div className="flex justify-center">
<div className="mx-2 p-4 w-6/12 flex flex-col bg-amber-50 items-center justify-center shadow-xl rounded-xl border-2  min-h-screen space-y-5 ">
<img  className="w-4/12" alt="Yeti Munch" src={logo}/>
<h1 className="text-2xl  text-[blueviolet] font-sans font-bold text-center ">Welcome to Yeti Munch - Your Ultimate Food Delivery Companion</h1>
<p className="text-lg  font-mono  text-center">At Yeti Munch, we believe that great food should be just a few taps away.
     Whether you're craving comfort food from your favorite local diner or 
     exploring exotic cuisines from top-rated restaurants, Yeti Munch is here to
      deliver.Our platform combines convenience with a wide array of culinary delights,
      making dining in as delightful as dining out.</p>

      <h2 className="text-xl font-serif text-[blueviolet] font-bold">Key Features:</h2>
<p className="text-xl text-start font-mono">-Wide Selection: Explore a diverse range of restaurants,
     from cozy cafes to upscale eateries, all available at your fingertips. <br/>
-Easy Ordering: Effortlessly browse menus, customize your orders,
 and securely pay online for a seamless experience.<br/>
-Real-time Tracking: Stay updated with real-time tracking of your order,
 ensuring you know exactly when to expect your delicious meal.<br/>
-Exclusive Offers: Enjoy exclusive deals and discounts on select restaurants, 
making every meal a satisfying deal.<br/>
-User-friendly Interface: Our intuitive app and website design make navigating 
through choices and placing orders a breeze.<br/>
-Customer Support: Need assistance? Our dedicated customer support team is available
 around the clock to help with any queries or concerns.</p>

<h3 className="text-xl font-bold font-serif text-[blueviolet]"> Restaurant Partners:</h3>
<p className="text-xl text-center font-mono">Yeti Munch partners with a wide network of restaurants renowned for their quality and taste.
 From local favorites to popular chains, we bring you the best culinary experiences from your 
 neighborhood and beyond.</p>  
<h3 className="text-xl font-bold font-serif text-[blueviolet]">Delivery Excellence:</h3>
<p className="text-xl text-center font-mono">We pride ourselves on timely deliveries. Serving across Kathmandu Valley and Pokhara, our efficient
 logistics ensure your food arrives hot and fresh, just as you like it.</p>

<h3 className="text-xl font-bold font-serif text-[blueviolet]">Get Started:</h3>
<p className="text-xl text-center font-mono">Ready to explore Yeti Munch? Download our app on App Store/Google Play store, or visit our website at
 yetimunch.com. Discover new flavors, rediscover old favorites, and let Yeti Munch bring the joy of
  good food right to your doorstep.</p>

</div>
</div>
);
}

export default About;