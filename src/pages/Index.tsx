
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/lovable-uploads/9bd4aa75-b402-42e4-bbd0-d86ab5801897.png')`
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
                className="bg-brand-gold text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-darkgold transition-all duration-300 hover-scale flex items-center gap-2"
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
          <div className="w-1 h-8 bg-brand-gold rounded-full opacity-60"></div>
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
                title: "Oversized Graphic Tees",
                price: "₹899",
                image: "/lovable-uploads/b6e58205-7179-45e0-8ce7-2c98b66b2397.png"
              },
              {
                title: "Oversized Jersey Collection",
                price: "₹1,499",
                image: "/lovable-uploads/b7ceb631-03d6-4ba6-9bf1-f7dab8c868e2.png"
              },
              {
                title: "Oversized Vintage Shirts",
                price: "₹1,299",
                image: "/lovable-uploads/c03c488e-b3fe-45bf-953f-084778665bf4.png"
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
                      className="bg-brand-gold text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkgold transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-brand-gold font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/lookbook"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-200 font-semibold text-lg"
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
            {[
              "/lovable-uploads/9fbdc85a-ff8a-47af-a44e-aa29254f38fd.png",
              "/lovable-uploads/25630896-ef77-41b7-baa0-63a31203e046.png",
              "/lovable-uploads/d6e239ed-6447-4a9a-9445-e6a8795c766e.png",
              "/lovable-uploads/2dcb935d-6da2-4e44-b831-4162bd710fb7.png",
              "/lovable-uploads/b7ceb631-03d6-4ba6-9bf1-f7dab8c868e2.png",
              "/lovable-uploads/9bd4aa75-b402-42e4-bbd0-d86ab5801897.png",
              "/lovable-uploads/b6e58205-7179-45e0-8ce7-2c98b66b2397.png",
              "/lovable-uploads/c03c488e-b3fe-45bf-953f-084778665bf4.png"
            ].map((image, index) => (
              <div key={index} className="aspect-square bg-brand-grey rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={image}
                  alt={`M&M Fashion Style ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://instagram.com/mandm.fashion_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-darkgold text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-brand-gold/25 transition-all duration-300 hover-scale"
            >
              <Instagram size={20} />
              @mandm.fashion_
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-gold to-brand-darkgold">
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
