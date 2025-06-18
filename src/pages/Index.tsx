
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1200&h=800&fit=crop')`
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-white">STREETSTYLE</span>
              <br />
              <span className="gradient-text">STARTS HERE</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bold. Affordable. Local. Discover the latest streetwear drops that define Gen Z fashion in Kolkata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/lookbook"
                className="bg-brand-neon text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-neon/90 transition-all duration-300 hover-scale flex items-center gap-2"
              >
                Explore the Collection
                <ArrowRight size={20} />
              </Link>
              
              <a
                href="https://instagram.com/mandm.fashion_"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-black transition-all duration-300 hover-scale flex items-center gap-2"
              >
                <Instagram size={20} />
                Follow Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-brand-neon rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">LATEST</span>
              <span className="gradient-text"> DROPS</span>
            </h2>
            <p className="text-gray-400 text-lg">Fresh fits that hit different</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Oversized Hoodies",
                price: "₹1,999",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop"
              },
              {
                title: "Cargo Pants",
                price: "₹2,499",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop"
              },
              {
                title: "Graphic Tees",
                price: "₹899",
                image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=500&fit=crop"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to="/order"
                      className="bg-brand-neon text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-neon/90 transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-brand-neon font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/lookbook"
              className="inline-flex items-center gap-2 text-brand-neon hover:text-white transition-colors duration-200 font-semibold text-lg"
            >
              View Full Collection
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">FRESH FROM</span>
              <span className="text-white"> THE GRAM</span>
            </h2>
            <p className="text-gray-400 text-lg">See how our community styles M&M Fashion</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-brand-grey rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-brand-neon/20 to-brand-electric/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Instagram size={32} className="text-white/50" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://instagram.com/mandm.fashion_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-neon to-brand-electric text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-brand-neon/25 transition-all duration-300 hover-scale"
            >
              <Instagram size={20} />
              @mandm.fashion_
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-neon to-brand-electric">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Zap size={32} className="text-brand-black" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-black mb-6">
            READY TO LEVEL UP YOUR STYLE?
          </h2>
          <p className="text-brand-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the M&M Fashion community and stay ahead of the streetwear game. New drops every week.
          </p>
          <Link
            to="/order"
            className="bg-brand-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-grey transition-colors duration-300 hover-scale"
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
