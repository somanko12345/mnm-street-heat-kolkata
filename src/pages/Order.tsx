
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ShoppingBag, Phone, User, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    item: searchParams.get('item') || "",
    size: "",
    instagram: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order Placed Successfully! 🎉",
        description: "We'll contact you on WhatsApp soon to confirm your order.",
      });
      
      // Redirect to WhatsApp
      const message = `Hi M&M Fashion! I'd like to order:
Name: ${formData.name}
Phone: ${formData.phone}
Item: ${formData.item}
Size: ${formData.size}
Instagram: ${formData.instagram}`;
      
      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        item: "",
        size: "",
        instagram: ""
      });
    }, 1500);
  };

  const popularItems = [
    "Oversized Streetwear Hoodie",
    "Graphic Print Tee",
    "Cargo Utility Pants",
    "Distressed Denim Jacket",
    "Vintage Wash Tee",
    "Wide Leg Trousers",
    "Bucket Hat",
    "Cropped Hoodie"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-brand-grey py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <ShoppingBag size={48} className="text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-white">PLACE YOUR</span>
            <span className="gradient-text"> ORDER</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to level up your streetwear game? Fill out the form below and we'll get your fresh fits ready!
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-grey rounded-2xl p-8 border border-brand-charcoal">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  <User size={20} className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-brand-charcoal border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  <Phone size={20} className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-brand-charcoal border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Item Selection */}
              <div>
                <label htmlFor="item" className="block text-white font-semibold mb-2">
                  <ShoppingBag size={20} className="inline mr-2" />
                  Item Selected *
                </label>
                <select
                  id="item"
                  name="item"
                  value={formData.item}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-brand-charcoal border border-gray-600 rounded-lg text-white focus:border-brand-gold focus:outline-none transition-colors"
                >
                  <option value="">Select an item</option>
                  {popularItems.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                  <option value="other">Other (mention in WhatsApp)</option>
                </select>
              </div>

              {/* Size Selection */}
              <div>
                <label htmlFor="size" className="block text-white font-semibold mb-2">
                  Size *
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-brand-charcoal border border-gray-600 rounded-lg text-white focus:border-brand-gold focus:outline-none transition-colors"
                >
                  <option value="">Select size</option>
                  <option value="S">S (Small)</option>
                  <option value="M">M (Medium)</option>
                  <option value="L">L (Large)</option>
                  <option value="XL">XL (Extra Large)</option>
                  <option value="XXL">XXL (Double XL)</option>
                  <option value="28">28" Waist</option>
                  <option value="30">30" Waist</option>
                  <option value="32">32" Waist</option>
                  <option value="34">34" Waist</option>
                  <option value="36">36" Waist</option>
                  <option value="One Size">One Size</option>
                </select>
              </div>

              {/* Instagram Handle */}
              <div>
                <label htmlFor="instagram" className="block text-white font-semibold mb-2">
                  <Instagram size={20} className="inline mr-2" />
                  Instagram Handle (Optional)
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-brand-charcoal border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  placeholder="@yourusername"
                />
                <p className="text-gray-400 text-sm mt-1">
                  Tag us when you get your fit for a chance to be featured! 📸
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold text-brand-black py-4 px-6 rounded-lg font-bold text-lg hover:bg-brand-darkgold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-black"></div>
                    Processing Order...
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    Place Order via WhatsApp
                  </>
                )}
              </button>
            </form>

            {/* Order Info */}
            <div className="mt-8 p-6 bg-brand-charcoal rounded-lg border border-gray-600">
              <h3 className="text-white font-semibold mb-3">📦 Order Information</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Orders are confirmed via WhatsApp within 24 hours</li>
                <li>• Free delivery in Bhawanipur & nearby areas</li>
                <li>• Cash on delivery available</li>
                <li>• 7-day exchange policy on all items</li>
                <li>• Follow @mandm.fashion_ for exclusive drops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
