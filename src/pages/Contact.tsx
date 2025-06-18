
import { MapPin, Phone, Instagram, MessageCircle, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-brand-grey py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-white">GET IN</span>
            <span className="gradient-text"> TOUCH</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Questions about our drops? Want to collab? Just want to say hi? We're here for it all!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Instagram DM */}
            <div className="bg-brand-grey rounded-2xl p-8 text-center hover:bg-brand-charcoal transition-colors duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand-neon/20 rounded-full group-hover:bg-brand-neon/30 transition-colors">
                  <Instagram size={32} className="text-brand-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Instagram DM</h3>
              <p className="text-gray-300 mb-6">
                Slide into our DMs for quick questions, style advice, or just to chat about streetwear!
              </p>
              <a
                href="https://instagram.com/mandm.fashion_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-neon text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-neon/90 transition-colors"
              >
                <Instagram size={16} />
                @mandm.fashion_
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-brand-grey rounded-2xl p-8 text-center hover:bg-brand-charcoal transition-colors duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand-electric/20 rounded-full group-hover:bg-brand-electric/30 transition-colors">
                  <MessageCircle size={32} className="text-brand-electric" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Need immediate help with orders? WhatsApp us for instant support and order updates.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-electric/90 transition-colors"
              >
                <MessageCircle size={16} />
                Message Us
              </a>
            </div>

            {/* Visit Store */}
            <div className="bg-brand-grey rounded-2xl p-8 text-center hover:bg-brand-charcoal transition-colors duration-300 group md:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand-neon/20 rounded-full group-hover:bg-brand-neon/30 transition-colors">
                  <MapPin size={32} className="text-brand-neon" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Store</h3>
              <p className="text-gray-300 mb-6">
                Come vibe with us IRL! Try on pieces, get styling tips, and feel the fabric quality firsthand.
              </p>
              <div className="text-brand-neon font-semibold">
                16A Ganga Prasad Mukherjee Road<br />
                Bhawanipur, Kolkata
              </div>
            </div>
          </div>

          {/* Store Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Info */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">
                <span className="gradient-text">STORE DETAILS</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-neon/20 rounded-lg">
                    <MapPin size={24} className="text-brand-neon" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Address</h3>
                    <p className="text-gray-300">
                      16A Ganga Prasad Mukherjee Road<br />
                      Bhawanipur, Kolkata - 700025<br />
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
                      <p className="text-brand-neon text-sm mt-2">
                        💡 Pro tip: Call before visiting for exclusive previews!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-neon/20 rounded-lg">
                    <Phone size={24} className="text-brand-neon" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-400 text-sm">
                      Available during store hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-brand-grey border border-brand-charcoal overflow-hidden">
                {/* Map placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-brand-charcoal to-brand-grey flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-brand-neon mx-auto mb-4" />
                    <p className="text-white font-semibold mb-2">Google Maps Integration</p>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Interactive map showing our exact location in Bhawanipur
                    </p>
                    <button className="mt-4 bg-brand-neon text-brand-black px-4 py-2 rounded-lg font-semibold hover:bg-brand-neon/90 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating contact buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <a
                  href="https://instagram.com/mandm.fashion_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-neon rounded-full hover:bg-brand-neon/90 transition-colors group"
                >
                  <Instagram size={20} className="text-brand-black" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-electric rounded-full hover:bg-brand-electric/90 transition-colors group"
                >
                  <MessageCircle size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-white">QUICK</span>
              <span className="gradient-text"> ANSWERS</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">How do I place an order?</h3>
                <p className="text-gray-300 text-sm">
                  Use our order form or DM us on Instagram. We'll confirm via WhatsApp!
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Do you offer exchanges?</h3>
                <p className="text-gray-300 text-sm">
                  Yes! 7-day exchange policy for all items in original condition.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Delivery areas?</h3>
                <p className="text-gray-300 text-sm">
                  Free delivery in Bhawanipur & nearby areas. Paid delivery across Kolkata.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Payment methods?</h3>
                <p className="text-gray-300 text-sm">
                  Cash on delivery, UPI, and all major digital payment methods.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">New drop notifications?</h3>
                <p className="text-gray-300 text-sm">
                  Follow @mandm.fashion_ on Instagram for instant updates on new arrivals!
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Custom orders?</h3>
                <p className="text-gray-300 text-sm">
                  Looking for something specific? Hit us up - we love creating unique pieces!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
