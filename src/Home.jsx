import React from 'react'
import { useState } from 'react'
import { useCart } from './hooks/useCart'
import ItemCard from './components/ItemCard'
import WhatsAppButton from './components/WhatsAppButton'
import { categoriesData, faqData, termsData } from './data/itemsData'
import { WHATSAPP_NUMBER } from './config'

const Home = () => {
  const [activeTab, setActiveTab] = useState(categoriesData[0]?.id || 'popular')
  const [activeGlassCategory, setActiveGlassCategory] = useState('all')
  const [activeFaqIndex, setActiveFaqIndex] = useState(null)
  const { addToCart, getTotalItems } = useCart()

  const handleAddToCart = (item) => {
    addToCart(item)
  }

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index)
  }

  return (
    <div>
      {/* Welcome Section */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 mb-6">
              Welcome to Cade Party Solution Event Rentals
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              Your trusted partner for exceptional event rentals. Whether you're hosting an intimate gathering, a corporate function, or a grand celebration, we provide premium rental items to bring your vision to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <i className="fas fa-glass-cheers text-4xl text-orange-600 mb-4"></i>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">Elegant Tableware</h3>
                <p className="text-gray-600">From chafing dishes to fine cutlery for any occasion</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <i className="fas fa-utensils text-4xl text-orange-600 mb-4"></i>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">Professional Equipment</h3>
                <p className="text-gray-600">Complete catering equipment for flawless service</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <i className="fas fa-star text-4xl text-orange-600 mb-4"></i>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">Stress-Free Events</h3>
                <p className="text-gray-600">Let us handle the details so you can enjoy your event</p>
              </div>
            </div>
            
            <a href="#categories" className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
              Explore Our Rentals
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            Everything You Need to Host in Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Explore Dinner plates, Chafing dishes, Cutleries, Cups & More
          </p>
          <a href="#categories" className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 mb-6">
            View Rentals
          </a>
          <div className="flex items-center justify-center bg-white/20 p-4 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
            <i className="fas fa-shopping-cart text-2xl mr-3"></i>
            <p className="text-white m-0">Add items to your order and click WhatsApp to complete your booking!</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Rental Collection</h2>
            <p className="text-lg text-gray-600">Quality items for your next event</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2">
            {categoriesData.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeTab === category.id 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {categoriesData.map(category => (
            <div
              key={category.id}
              id={category.id}
              className={`${activeTab === category.id ? 'block' : 'hidden'}`}
            >
              {category.id === 'glass-chargers' && (
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeGlassCategory === 'all' 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400'
                    }`}
                    onClick={() => setActiveGlassCategory('all')}
                  >
                    All Glass Chargers
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeGlassCategory === 'gold' 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400'
                    }`}
                    onClick={() => setActiveGlassCategory('gold')}
                  >
                    Gold Collection
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeGlassCategory === 'silver' 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-400'
                    }`}
                    onClick={() => setActiveGlassCategory('silver')}
                  >
                    Silver Collection
                  </button>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {([...category.items].sort((a,b) => a.name.localeCompare(b.name))).map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terms Section */}
      <section id="terms" className="bg-orange-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Terms & Conditions</h2>
          
          <div className="bg-white rounded-lg p-6 mb-12 max-w-2xl mx-auto shadow-md border-t-4 border-orange-600">
            <div className="flex items-center justify-center gap-3 mb-4">
              <i className="fas fa-clock text-orange-600 text-xl"></i>
              <h3 className="text-xl font-semibold text-gray-800 m-0">Our Working Hours</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-semibold text-gray-800">Monday:</span>
                <span>9:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-semibold text-gray-800">Tuesday:</span>
                <span>9:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-semibold text-gray-800">Wednesday:</span>
                <span>9:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-semibold text-gray-800">Thursday:</span>
                <span>9:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-semibold text-gray-800">Friday:</span>
                <span>9:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-semibold text-gray-800">Saturday:</span>
                <span>2:00pm – 6:00pm</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="font-semibold text-gray-800">Sunday:</span>
                <span>2:00pm – 6:00pm</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {termsData.map((termsGroup, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 flex items-center gap-3">
                  <i className="fas fa-file-contract text-xl"></i>
                  <h3 className="text-xl font-semibold m-0">Terms & Conditions</h3>
                </div>
                <div className="p-6">
                  {termsGroup.map((term, termIndex) => (
                    <div key={termIndex} className="flex gap-4 mb-5 items-center">
                      <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {term.number}
                      </div>
                      <div className="text-gray-700 leading-relaxed text-sm">
                        {term.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple process to get your rentals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">1. Browse Items</h3>
              <p className="text-gray-600">Explore our premium rental collection and select what you need for your event.</p>
            </div>
            
            <div className="text-center p-8 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">2. Order on WhatsApp</h3>
              <p className="text-gray-600">Send us your order via WhatsApp with your preferred items and quantities.</p>
            </div>
            
            <div className="text-center p-8 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">3. Confirm & Pickup</h3>
              <p className="text-gray-600">We'll confirm availability and arrange pickup for your event date.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg mt-12 text-center italic border-l-4 border-orange-600 max-w-4xl mx-auto">
            <p className="m-0 text-gray-700">
              🔁 <strong>We don't auto-book dates</strong> — you're still in control of which orders you accept.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                <div 
                  className={`p-5 bg-white cursor-pointer flex justify-between items-center font-semibold transition-colors hover:bg-gray-50 ${
                    activeFaqIndex === index ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <i className={`fas ${activeFaqIndex === index ? 'fa-minus' : 'fa-plus'} text-orange-600`}></i>
                </div>
                <div className={`px-5 overflow-hidden transition-all duration-300 ${
                  activeFaqIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl mb-8">Get in touch via WhatsApp to check availability and place your order</p>
            <div className="flex items-center justify-center bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-8">
              <i className="fas fa-shopping-cart text-2xl mr-3"></i>
              <p className="m-0">After adding items, click below to send your order via WhatsApp</p>
            </div>
            <WhatsAppButton itemCount={getTotalItems()} className="mb-8" />
            
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://www.instagram.com/cadepartysolution" target="_blank" rel="noopener noreferrer" className="text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home