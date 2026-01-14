'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProductModal from '@/app/components/ProductModal';
import OrderForm from '@/app/components/OrderForm';
import { BsChevronLeft, BsChevronRight, BsSearch, BsFunnel } from 'react-icons/bs';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  images: string[];
  specs: string[];
  inStock: boolean;
  category: string;
}

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [productToOrder, setProductToOrder] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default');
  const productsPerPage = 12;

  // Product data
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 'RWF 1,549,000',
      description: 'Experience the latest flagship smartphone from Apple with cutting-edge technology, stunning display, and powerful performance.',
      image: 'https://i.pinimg.com/1200x/14/e1/24/14e124c7161f9e82cc27178d088fdaf1.jpg',
      images: [
        'https://i.pinimg.com/1200x/14/e1/24/14e124c7161f9e82cc27178d088fdaf1.jpg',
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80'
      ],
      specs: [
        'A17 Pro chip with 6-core GPU',
        '6.7-inch Super Retina XDR display',
        'Pro camera system with 48MP main',
        'Titanium design with Action button',
        'Up to 29 hours video playback'
      ],
      inStock: true,
      category: 'Smartphones'
    },
    {
      id: 2,
      name: 'MacBook Pro 14"',
      price: 'RWF 2,585,000',
      description: 'Supercharged by M3 Pro chip for incredible performance. Perfect for professionals and creators.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
        'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&q=80'
      ],
      specs: [
        'Apple M3 Pro chip',
        '18GB Unified Memory',
        '512GB SSD Storage',
        '14.2-inch Liquid Retina XDR display',
        'Up to 18 hours battery life'
      ],
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      price: 'RWF 555,000',
      description: 'Your essential companion for a healthy life. Now with new features and advanced health tracking.',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
        'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80',
        'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&q=80'
      ],
      specs: [
        'GPS + Cellular connectivity',
        '45mm Always-On Retina display',
        'Blood Oxygen & ECG apps',
        'Water resistant to 50 meters',
        'Up to 18 hours battery life'
      ],
      inStock: true,
      category: 'Smartwatches'
    },
    {
      id: 4,
      name: 'AirPods Pro 2',
      price: 'RWF 257,000',
      description: 'Immersive sound with Active Noise Cancellation. Adaptive Audio for the perfect listening experience.',
      image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80',
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
        'https://images.unsplash.com/photo-1588423771073-b8903fba77ac?w=800&q=80',
        'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=800&q=80'
      ],
      specs: [
        'Active Noise Cancellation',
        'Adaptive Audio',
        'Personalized Spatial Audio',
        'Up to 6 hours listening time',
        'MagSafe charging case'
      ],
      inStock: true,
      category: 'Accessories'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra',
      price: 'RWF 1,680,000',
      description: 'AI-powered flagship phone with the most advanced camera system and S Pen for ultimate productivity.',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80'
      ],
      specs: [
        'Snapdragon 8 Gen 3 processor',
        '6.8-inch Dynamic AMOLED 2X display',
        '200MP main camera with AI zoom',
        'Built-in S Pen',
        '5000mAh battery with fast charging'
      ],
      inStock: true,
      category: 'Smartphones'
    },
    {
      id: 6,
      name: 'Dell XPS 13',
      price: 'RWF 1,680,000',
      description: 'Premium ultraportable laptop with stunning InfinityEdge display and exceptional performance.',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
        'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80'
      ],
      specs: [
        'Intel Core i7 13th Gen',
        '16GB LPDDR5 RAM',
        '512GB PCIe NVMe SSD',
        '13.4-inch FHD+ display',
        'Up to 12 hours battery life'
      ],
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 7,
      name: 'iPad Pro 12.9"',
      price: 'RWF 1,420,000',
      description: 'The ultimate iPad experience with M2 chip. Perfect for creativity and productivity on the go.',
      image: 'https://i.pinimg.com/1200x/07/84/f0/0784f06ce144f22d9b688aac8b9ccc70.jpg',
      images: [
        'https://i.pinimg.com/1200x/07/84/f0/0784f06ce144f22d9b688aac8b9ccc70.jpg',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
        'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80',
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80'
      ],
      specs: [
        'Apple M2 chip',
        '12.9-inch Liquid Retina XDR display',
        '256GB storage',
        'ProMotion 120Hz refresh rate',
        'Support for Apple Pencil & Magic Keyboard'
      ],
      inStock: true,
      category: 'Tablets'
    },
    {
      id: 8,
      name: 'Sony WH-1000XM5',
      price: 'RWF 438,000',
      description: 'Industry-leading noise cancellation with exceptional sound quality and all-day comfort.',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80'
      ],
      specs: [
        'Industry-leading noise cancellation',
        '30-hour battery life',
        'Multi-point connection',
        'Touch sensor controls',
        'Speak-to-Chat technology'
      ],
      inStock: true,
      category: 'Accessories'
    },
    {
      id: 9,
      name: 'Google Pixel 8 Pro',
      price: 'RWF 1,320,000',
      description: 'Google AI at its best. Incredible photography and seamless Android experience.',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80'
      ],
      specs: [
        'Google Tensor G3 chip',
        '6.7-inch LTPO OLED display',
        'Triple camera system with AI',
        '12GB RAM, 256GB storage',
        'All-day battery with fast charging'
      ],
      inStock: true,
      category: 'Smartphones'
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      price: 'RWF 1,890,000',
      description: 'Convertible 2-in-1 laptop with stunning design and powerful performance for work and play.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800&q=80'
      ],
      specs: [
        'Intel Core i7 13th Gen',
        '16GB LPDDR4x RAM',
        '1TB PCIe NVMe SSD',
        '13.5-inch 3K2K OLED touchscreen',
        '360-degree convertible hinge'
      ],
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 11,
      name: 'Samsung Galaxy Watch 6',
      price: 'RWF 485,000',
      description: 'Advanced health tracking meets sleek design. Your perfect fitness companion.',
      image: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80',
        'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80'
      ],
      specs: [
        'Wear OS powered by Samsung',
        '44mm Super AMOLED display',
        'Advanced sleep tracking',
        'Body composition analysis',
        'Up to 40 hours battery life'
      ],
      inStock: true,
      category: 'Smartwatches'
    },
    {
      id: 12,
      name: 'Samsung Galaxy Tab S9',
      price: 'RWF 890,000',
      description: 'Premium Android tablet with S Pen included. Perfect for productivity and entertainment.',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80',
        'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=800&q=80',
        'https://images.unsplash.com/photo-1632634323650-6c5ea6d8e7d1?w=800&q=80',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80'
      ],
      specs: [
        'Snapdragon 8 Gen 2 processor',
        '11-inch Dynamic AMOLED 2X display',
        '8GB RAM, 256GB storage',
        'S Pen included',
        'IP68 water resistance'
      ],
      inStock: true,
      category: 'Tablets'
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      price: 'RWF 520,000',
      description: 'Premium wireless headphones with world-class noise cancellation and immersive audio.',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
        'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
        'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80'
      ],
      specs: [
        'CustomTune technology',
        'Immersive Audio mode',
        '24-hour battery life',
        'Premium materials & comfort',
        'Bluetooth 5.3 multipoint'
      ],
      inStock: true,
      category: 'Accessories'
    },
    {
      id: 14,
      name: 'ASUS ROG Zephyrus G14',
      price: 'RWF 2,180,000',
      description: 'Compact gaming powerhouse with AMD Ryzen and NVIDIA RTX graphics.',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
        'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80',
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80',
        'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=80'
      ],
      specs: [
        'AMD Ryzen 9 7940HS',
        'NVIDIA RTX 4060 8GB',
        '16GB DDR5 RAM',
        '14-inch QHD 165Hz display',
        'Compact & portable design'
      ],
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 15,
      name: 'OnePlus 12',
      price: 'RWF 1,120,000',
      description: 'Flagship killer with blazing fast performance and stunning camera system.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80'
      ],
      specs: [
        'Snapdragon 8 Gen 3',
        '6.82-inch AMOLED 120Hz',
        'Hasselblad camera system',
        '16GB RAM, 512GB storage',
        '100W SuperVOOC charging'
      ],
      inStock: true,
      category: 'Smartphones'
    },
    {
      id: 16,
      name: 'Garmin Fenix 7',
      price: 'RWF 780,000',
      description: 'Premium multisport GPS watch for serious athletes and outdoor enthusiasts.',
      image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
        'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80'
      ],
      specs: [
        'Multi-GNSS satellite support',
        'Advanced training metrics',
        'Up to 18 days battery life',
        'Topographic maps',
        'Military-grade durability'
      ],
      inStock: true,
      category: 'Smartwatches'
    },
    {
      id: 17,
      name: 'Microsoft Surface Pro 9',
      price: 'RWF 1,550,000',
      description: 'Versatile 2-in-1 device combining tablet portability with laptop power.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
        'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80'
      ],
      specs: [
        'Intel Core i7 12th Gen',
        '13-inch PixelSense touchscreen',
        '16GB RAM, 256GB SSD',
        'All-day battery life',
        'Thunderbolt 4 support'
      ],
      inStock: true,
      category: 'Tablets'
    },
    {
      id: 18,
      name: 'JBL Charge 5',
      price: 'RWF 185,000',
      description: 'Portable Bluetooth speaker with powerful sound and built-in power bank.',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
        'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
      ],
      specs: [
        'JBL Pro Sound',
        '20 hours of playtime',
        'IP67 waterproof & dustproof',
        'Built-in power bank',
        'PartyBoost pairing'
      ],
      inStock: true,
      category: 'Accessories'
    }
  ];

  // Filter products by category, search query, and price range
  const filteredProducts = allProducts
    .filter(product => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .filter(product => {
      // Price range filter
      if (priceRange === 'All') return true;

      const price = parseInt(product.price.replace(/[^0-9]/g, ''));

      switch (priceRange) {
        case 'Under 500k':
          return price < 500000;
        case '500k-1M':
          return price >= 500000 && price < 1000000;
        case '1M-2M':
          return price >= 1000000 && price < 2000000;
        case 'Above 2M':
          return price >= 2000000;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      // Sorting
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        default:
          return 0;
      }
    });

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleBuyNow = (product: Product) => {
    setProductToOrder(product);
    setIsOrderFormOpen(true);
  };

  const handleCloseOrderForm = () => {
    setIsOrderFormOpen(false);
    setProductToOrder(null);
  };

  const handleOrderSubmit = (formData: any) => {
    console.log('Order submitted:', formData);
    alert('Order placed successfully! We will contact you shortly.');
    handleCloseOrderForm();
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceRangeChange = (range: 'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M') => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: 'default' | 'price-low' | 'price-high') => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setPriceRange('All');
    setSortBy('default');
    setCurrentPage(1);
  };

  const categories = ['All', 'Smartphones', 'Laptops', 'Tablets', 'Smartwatches', 'Accessories'];
  const priceRanges: ('All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M')[] = ['All', 'Under 500k', '500k-1M', '1M-2M', 'Above 2M'];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Matching Landing Page Style */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] lg:h-[65vh] overflow-hidden w-full py-8 sm:py-0">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 top-0">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
            alt="Electronics background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 lg:space-y-5">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-white px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold" style={{backgroundColor: '#F97316'}}>
                🛍️ Explore Our Products Collection
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4 sm:px-0">
              Find Your Perfect Tech Device
            </h1>

            {/* Search Bar */}
            <div className="w-full px-2 sm:px-0">
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-black outline-none cursor-text"
                />
                <button
                  onClick={handleSearch}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-all cursor-pointer"
                  style={{backgroundColor: '#F97316'}}
                >
                  <BsSearch className="w-4 h-4 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>

            {/* Filter Section - Transparent Design */}
            <div className="w-full mt-3 sm:mt-4 lg:mt-6">
              <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/30 shadow-lg p-4 sm:p-5 lg:p-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-2 sm:p-2 bg-white/30 backdrop-blur-sm rounded-lg">
                      <BsFunnel className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Filters</h3>
                  </div>
                  <button
                    onClick={handleClearFilters}
                    className="px-3 sm:px-4 py-2 sm:py-2 bg-white/30 hover:bg-white/40 text-white rounded-lg text-xs sm:text-xs font-semibold transition-all backdrop-blur-sm border border-white/40"
                  >
                    Clear All
                  </button>
                </div>

                {/* Filter Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-xs sm:text-xs font-semibold text-white mb-2 sm:mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-[#F97316] text-white py-2">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-xs sm:text-xs font-semibold text-white mb-2 sm:mb-2">
                      Price Range
                    </label>
                    <select
                      value={priceRange}
                      onChange={(e) => handlePriceRangeChange(e.target.value as 'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#F97316] text-white py-2">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By Filter */}
                  <div>
                    <label className="block text-xs sm:text-xs font-semibold text-white mb-2 sm:mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value as 'default' | 'price-low' | 'price-high')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      <option value="default" className="bg-[#F97316] text-white py-2">Default Order</option>
                      <option value="price-low" className="bg-[#F97316] text-white py-2">Price: Low to High</option>
                      <option value="price-high" className="bg-[#F97316] text-white py-2">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentProducts.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gray-100 mb-4 sm:mb-6">
                <BsSearch className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">No Products Found</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mb-4 sm:mb-6 px-4">
                We couldn't find any products matching your search criteria.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-5 sm:px-6 py-2 bg-[#F97316] text-white rounded-lg text-[10px] sm:text-xs font-semibold hover:opacity-90 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-56 sm:h-48 lg:h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-3 lg:p-4">
                    {/* Product Name */}
                    <h3 className="text-sm sm:text-xs lg:text-sm font-bold text-gray-900 mb-2 sm:mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-3 sm:mb-3">
                      <p className="text-xl sm:text-lg lg:text-xl font-bold" style={{color: '#F97316'}}>
                        {product.price}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:gap-2">
                      <button
                        onClick={() => handleViewProduct(product)}
                        className="flex-1 py-2 sm:py-2 rounded-lg sm:rounded-lg text-xs sm:text-xs font-semibold border-2 transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                        style={{borderColor: '#F97316', color: '#F97316'}}
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="flex-1 py-2 sm:py-2 rounded-lg sm:rounded-lg text-white text-xs sm:text-xs font-semibold transition-all duration-300 hover:opacity-90 cursor-pointer"
                        style={{backgroundColor: '#F97316'}}
                      >
                        <span className="flex items-center justify-center gap-1 sm:gap-1">
                          Buy Now
                          <svg className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {currentProducts.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
                  currentPage === 1
                    ? 'border-black/10 text-black/30 cursor-not-allowed'
                    : 'border-black/20 text-black hover:border-black/40 hover:bg-black/5'
                }`}
              >
                <BsChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-semibold text-[10px] sm:text-xs transition-all ${
                        currentPage === pageNumber
                          ? 'text-white shadow-lg'
                          : 'bg-white text-black border border-black/20 hover:border-black/40 hover:bg-black/5'
                      }`}
                      style={
                        currentPage === pageNumber
                          ? { backgroundColor: '#F97316' }
                          : {}
                      }
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span key={pageNumber} className="text-[10px] sm:text-xs text-black/40 px-1 sm:px-2">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
                  currentPage === totalPages
                    ? 'border-black/10 text-black/30 cursor-not-allowed'
                    : 'border-black/20 text-black hover:border-black/40 hover:bg-black/5'
                }`}
              >
                <BsChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />

      {/* Order Form */}
      {productToOrder && (
        <OrderForm
          isOpen={isOrderFormOpen}
          onClose={handleCloseOrderForm}
          productName={productToOrder.name}
          productPrice={productToOrder.price}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  );
}
