
import { MapPin, Clock, Instagram, Heart, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-brand-grey py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-white">ABOUT</span>
            <span className="gradient-text"> M&M FASHION</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Born in the streets of Kolkata, crafted for the bold and fearless Gen Z
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                <span className="gradient-text">OUR STORY</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  M&M Fashion started as a passion project in the heart of Bhawanipur, Kolkata. 
                  We saw a gap in the local fashion scene - Gen Z wanted bold, affordable streetwear 
                  that reflected their personality, but couldn't find it anywhere.
                </p>
                <p>
                  So we decided to create it ourselves. What started as selling a few pieces to 
                  friends quickly grew into a community of young fashion enthusiasts who aren't 
                  afraid to stand out.
                </p>
                <p>
                  Today, M&M Fashion is more than just a clothing brand - we're a movement. 
                  We believe fashion should be accessible, bold, and authentic. Every piece 
                  we curate tells a story of rebellion, creativity, and youth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-square rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,255,136,0.1), rgba(255,51,102,0.1)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/20 to-brand-electric/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-grey">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">WHAT WE</span>
              <span className="gradient-text"> STAND FOR</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-neon/20 rounded-full">
                  <Zap size={32} className="text-brand-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">BOLD & FEARLESS</h3>
              <p className="text-gray-300">
                We create pieces that make statements. Fashion should never be boring, 
                and neither should you.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-electric/20 rounded-full">
                  <Heart size={32} className="text-brand-electric" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AFFORDABLE LUXURY</h3>
              <p className="text-gray-300">
                Premium streetwear shouldn't break the bank. Quality fashion 
                should be accessible to everyone.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-neon/20 rounded-full">
                  <Users size={32} className="text-brand-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">COMMUNITY DRIVEN</h3>
              <p className="text-gray-300">
                Our customers are our family. We create based on what you want 
                to see and how you want to express yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">
                <span className="gradient-text">VISIT OUR STORE</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-neon/20 rounded-lg">
                    <MapPin size={24} className="text-brand-neon" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-gray-300">
                      16A Ganga Prasad Mukherjee Road<br />
                      Bhawanipur, Kolkata<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-electric/20 rounded-lg">
                    <Clock size={24} className="text-brand-electric" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Store Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Saturday: 11:00 AM - 9:00 PM</p>
                      <p>Sunday: 12:00 PM - 8:00 PM</p>
                      <p className="text-brand-neon text-sm">*Always open on Instagram!</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-neon/20 rounded-lg">
                    <Instagram size={24} className="text-brand-neon" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Follow Our Journey</h3>
                    <p className="text-gray-300 mb-3">
                      Daily drops, style inspiration, and behind-the-scenes content
                    </p>
                    <a
                      href="https://instagram.com/mandm.fashion_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-neon to-brand-electric text-brand-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <Instagram size={16} />
                      @mandm.fashion_
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-brand-grey border border-brand-charcoal flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-brand-neon mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">Interactive Map</p>
                  <p className="text-gray-400 text-sm">
                    Find us in the heart of Bhawanipur
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-brand-electric/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-neon to-brand-electric">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-black mb-6">
            READY TO JOIN THE M&M FAMILY?
          </h2>
          <p className="text-brand-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Be part of a community that celebrates individuality, creativity, and fearless self-expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/order"
              className="bg-brand-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-grey transition-colors duration-300"
            >
              Shop Now
            </a>
            <a
              href="https://instagram.com/mandm.fashion_"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-black hover:text-white transition-colors duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
