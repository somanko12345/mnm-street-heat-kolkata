
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
    { id: 'jerseys', name: 'Jerseys' },
    { id: 'shirts', name: 'Shirts' },
  ];

  const products = [
    {
      id: 1,
      name: "Oversized Graphic Print Tee",
      price: "₹899",
      category: "tees",
      image: "/lovable-uploads/b6e58205-7179-45e0-8ce7-2c98b66b2397.png",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Oversized Football Jersey Collection",
      price: "₹1,499",
      category: "jerseys",
      image: "/lovable-uploads/b7ceb631-03d6-4ba6-9bf1-f7dab8c868e2.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Oversized Vintage Washed Shirt",
      price: "₹1,299",
      category: "shirts",
      image: "/lovable-uploads/c03c488e-b3fe-45bf-953f-084778665bf4.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "Oversized Argentina Jersey",
      price: "₹1,399",
      category: "jerseys",
      image: "/lovable-uploads/2dcb935d-6da2-4e44-b831-4162bd710fb7.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 5,
      name: "Oversized Sports Jersey Collection",
      price: "₹1,599",
      category: "jerseys",
      image: "/lovable-uploads/9bd4aa75-b402-42e4-bbd0-d86ab5801897.png",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Oversized Street Graphics Tee",
      price: "₹999",
      category: "tees",
      image: "/lovable-uploads/9fbdc85a-ff8a-47af-a44e-aa29254f38fd.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 7,
      name: "Oversized Hip-Hop Culture Tee",
      price: "₹899",
      category: "tees",
      image: "/lovable-uploads/25630896-ef77-41b7-baa0-63a31203e046.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 8,
      name: "Oversized Boxy Fit Shirt",
      price: "₹1,199",
      category: "shirts",
      image: "/lovable-uploads/d6e239ed-6447-4a9a-9445-e6a8795c766e.png",
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
