
import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid, List } from "lucide-react";

const Lookbook = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'hoodies', name: 'Hoodies' },
    { id: 'tees', name: 'T-Shirts' },
    { id: 'pants', name: 'Pants' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const products = [
    {
      id: 1,
      name: "Oversized Streetwear Hoodie",
      price: "₹1,999",
      category: "hoodies",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Oversized Graphic Print Tee",
      price: "₹899",
      category: "tees",
      image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=400&h=500&fit=crop",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Oversized Cargo Utility Pants",
      price: "₹2,499",
      category: "pants",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      sizes: ["28", "30", "32", "34", "36"]
    },
    {
      id: 4,
      name: "Oversized Distressed Denim Jacket",
      price: "₹3,299",
      category: "hoodies",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "Oversized Vintage Wash Tee",
      price: "₹1,199",
      category: "tees",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f4ad2?w=400&h=500&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Oversized Wide Leg Trousers",
      price: "₹2,799",
      category: "pants",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      sizes: ["28", "30", "32", "34"]
    },
    {
      id: 7,
      name: "Oversized Bucket Hat",
      price: "₹699",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
      sizes: ["One Size"]
    },
    {
      id: 8,
      name: "Oversized Cropped Hoodie",
      price: "₹1,799",
      category: "hoodies",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      sizes: ["S", "M", "L", "XL"]
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-brand-grey py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="text-white">THE</span>
              <span className="gradient-text"> LOOKBOOK</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Curated streetwear pieces that speak the language of Gen Z. Each piece tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-brand-black py-8 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={20} className="text-gray-400" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-brand-gold text-brand-black'
                      : 'bg-brand-grey text-white hover:bg-brand-charcoal'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-brand-grey rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-brand-gold text-brand-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-brand-gold text-brand-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className={`group cursor-pointer ${
                  viewMode === 'list' ? 'flex gap-6 bg-brand-grey rounded-lg p-6' : ''
                }`}
              >
                <div className={`relative overflow-hidden rounded-lg ${
                  viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-[4/5] mb-4'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/order?item=${encodeURIComponent(product.name)}`}
                      className="bg-brand-gold text-brand-black px-6 py-3 rounded-lg font-semibold hover:bg-brand-darkgold transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
                
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brand-gold font-bold text-xl mb-3">{product.price}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.sizes.map((size) => (
                      <span 
                        key={size}
                        className="px-2 py-1 bg-brand-charcoal text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  
                  {viewMode === 'list' && (
                    <Link
                      to={`/order?item=${encodeURIComponent(product.name)}`}
                      className="inline-block bg-brand-gold text-brand-black px-6 py-2 rounded-lg font-semibold hover:bg-brand-darkgold transition-colors"
                    >
                      Order Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
