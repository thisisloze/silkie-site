import React, { useState } from 'react';
import { Menu, X, Egg, Feather, ShoppingBag, Camera, Info, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'prices', label: 'Prices', icon: <ShoppingBag size={20} /> },
    { id: 'pictures', label: 'Pictures', icon: <Camera size={20} /> },
    { id: 'info', label: 'Silkie Info', icon: <Info size={20} /> },
    { id: 'about', label: 'About Us', icon: <Feather size={20} /> },
    { id: 'order', label: 'Order Now', icon: <Egg size={20} />, highlight: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-silkie-white/90 backdrop-blur-md shadow-sm z-50 h-16 flex items-center justify-between px-6">
      <div className="text-xl font-bold flex items-center gap-2">
        <span className="text-3xl">🐣</span> The Silkie Squad
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
              activeTab === item.id 
                ? 'bg-silkie-accent text-white shadow-md' 
                : 'hover:bg-silkie-soft'
            } ${item.highlight ? 'bg-silkie-dark text-white hover:bg-black' : ''}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-silkie-white shadow-lg p-6 flex flex-col gap-4 border-b border-silkie-soft md:hidden"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className="flex items-center gap-4 text-xl p-4 hover:bg-silkie-soft rounded-xl"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setActiveTab }) => (
  <div className="min-h-screen pt-16 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-silkie-soft/30 to-white relative overflow-hidden">
    {/* Background Image Layer */}
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
       <img src="./images/chick-1.jpg" className="w-full h-full object-cover blur-sm" alt="Background" />
    </div>

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-2xl z-10"
    >
      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img src="./images/chick-1.jpg" alt="Hero Chick" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-silkie-dark">
        Fluffiest. Chicks. Ever.
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Hand-raised, kid-loved Silkie chickens for your backyard.
        <br />Hatching all summer long!
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => setActiveTab('order')}
          className="bg-silkie-accent text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition-transform"
        >
          Reserve a Chick
        </button>
        <button 
          onClick={() => setActiveTab('prices')}
          className="bg-white border-2 border-silkie-accent text-silkie-accent px-8 py-4 rounded-full text-xl font-bold hover:bg-silkie-soft transition-colors"
        >
          See Prices
        </button>
      </div>
    </motion.div>
  </div>
);

const Prices = () => (
  <div className="pt-24 px-4 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Our Pricing</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Chicks Card */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-3xl shadow-xl border-4 border-silkie-soft flex flex-col items-center"
      >
        <div className="text-6xl mb-4">🐣</div>
        <h3 className="text-3xl font-bold mb-2">Hatched Chicks</h3>
        <p className="text-gray-500 mb-6 text-center">Day-old to 1-week old fluffy babies. Unsexed.</p>
        <div className="text-5xl font-bold text-silkie-accent mb-6">$12 <span className="text-xl text-gray-400 font-normal">/ each</span></div>
        <ul className="text-left space-y-3 mb-8 w-full">
          <li className="flex gap-2">✅ Purebred Silkie</li>
          <li className="flex gap-2">✅ Hand-handled daily</li>
          <li className="flex gap-2">✅ Various colors</li>
        </ul>
      </motion.div>

      {/* Eggs Card */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-3xl shadow-xl border-4 border-silkie-soft flex flex-col items-center"
      >
        <div className="text-6xl mb-4">🥚</div>
        <h3 className="text-3xl font-bold mb-2">Hatching Eggs</h3>
        <p className="text-gray-500 mb-6 text-center">Fertilized eggs ready for your incubator.</p>
        <div className="text-5xl font-bold text-silkie-accent mb-6">$5 <span className="text-xl text-gray-400 font-normal">/ each</span></div>
        <ul className="text-left space-y-3 mb-8 w-full">
          <li className="flex gap-2">✅ Freshly collected</li>
          <li className="flex gap-2">✅ High fertility rate</li>
          <li className="flex gap-2">✅ Dozen discount available</li>
        </ul>
      </motion.div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="pt-24 px-4">
    <h2 className="text-4xl font-bold text-center mb-12">The Fluff Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-silkie-soft"
      >
        <img 
          src="./images/chick-1.jpg" 
          alt="White Silkie Chick" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-silkie-soft"
      >
        <img 
          src="./images/chick-group.jpg" 
          alt="Group of Silkie Chicks" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-silkie-soft"
      >
        <img 
          src="./images/chick-girl.jpg" 
          alt="Girl with Silkies" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Placeholders for more images */}
      {[4, 5, 6].map((i) => (
        <div key={i} className="aspect-square bg-silkie-soft rounded-2xl flex items-center justify-center text-4xl text-silkie-accent/50 font-bold">
          [Image {i}]
        </div>
      ))}
    </div>
    <p className="text-center mt-8 text-gray-500">Send us your pictures to be featured!</p>
  </div>
);

const InfoSection = () => (
  <div className="pt-24 px-4 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-8">Why Silkies?</h2>
    <div className="space-y-6 text-lg text-gray-700">
      <p>
        Silkies are known as the <strong>"Lap Dogs of the Chicken World."</strong> They have unique fluffy plumage that feels like satin or silk.
      </p>
      <div className="bg-silkie-soft/50 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-2">Fun Facts:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>They have black skin and bones!</li>
          <li>They have 5 toes (most chickens have 4).</li>
          <li>They are incredibly gentle and great for kids.</li>
          <li>They are terrible flyers (so they stay in your yard easily).</li>
        </ul>
      </div>
    </div>
  </div>
);

const Order = () => (
  <div className="pt-24 px-4 max-w-2xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Reserve?</h2>
    <p className="text-xl text-gray-600 mb-12">
      We hatch small batches (18 at a time) to give them the best care.
      <br />Spots fill up fast!
    </p>

    <div className="space-y-4">
      <a 
        href="https://m.me/yourusername" 
        target="_blank" 
        className="block w-full bg-[#0084FF] text-white py-4 rounded-xl text-xl font-bold shadow-md hover:opacity-90 transition-opacity"
      >
        Message on Messenger 💬
      </a>
      <a 
        href="mailto:example@gmail.com"
        className="block w-full bg-gray-800 text-white py-4 rounded-xl text-xl font-bold shadow-md hover:opacity-90 transition-opacity"
      >
        Email Us ✉️
      </a>
    </div>

    <div className="mt-12 bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
      <h3 className="font-bold text-yellow-800 mb-2">Next Hatch Date:</h3>
      <p className="text-2xl text-yellow-900">June 15th, 2026</p>
    </div>
  </div>
);

const About = () => (
  <div className="pt-24 px-4 max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">The Silkie Squad</h2>
    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-silkie-soft">
      <p className="text-xl leading-relaxed mb-6">
        Hi! We are the kids of the <strong>[Family Name]</strong> family.
        This summer, we decided to start a business raising our favorite animals.
      </p>
      <p className="text-lg text-gray-600">
        Our goal is to raise enough money to buy [Goal: e.g., a trampoline, new bikes] while learning how to run a real business.
        We take care of the incubator, turn the eggs, and raise the chicks by hand until they are ready for your home.
      </p>
    </div>
  </div>
);

// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-silkie-white text-silkie-dark pb-20">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'home' && <Hero setActiveTab={setActiveTab} />}
        {activeTab === 'prices' && <Prices />}
        {activeTab === 'pictures' && <Gallery />}
        {activeTab === 'info' && <InfoSection />}
        {activeTab === 'order' && <Order />}
        {activeTab === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
