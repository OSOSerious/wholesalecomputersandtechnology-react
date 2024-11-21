import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button,
  Tabs,
  Tab,
  Paper,
  Chip,
  Stack,
  Rating
} from '@mui/material';
import { useState } from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import LaptopIcon from '@mui/icons-material/Laptop';
import MemoryIcon from '@mui/icons-material/Memory';
import BuildIcon from '@mui/icons-material/Build';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  specs: string[];
  rating: number;
  stock: string;
  image: string;
}

const products: Product[] = [
  // Laptops
  {
    id: 1,
    name: 'Business Laptop Pro',
    description: 'Intel i7, 16GB RAM, 512GB SSD - Perfect for business professionals',
    price: '$899.99',
    category: 'laptops',
    specs: [
      'Intel Core i7 12th Gen',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      '15.6" FHD Display',
      'Windows 11 Pro'
    ],
    rating: 4.5,
    stock: 'In Stock',
    image: '/laptop-business.jpg'
  },
  {
    id: 2,
    name: 'Student Laptop Essential',
    description: 'AMD Ryzen 5, 8GB RAM, 256GB SSD - Ideal for students',
    price: '$599.99',
    category: 'laptops',
    specs: [
      'AMD Ryzen 5 5600U',
      '8GB DDR4 RAM',
      '256GB NVMe SSD',
      '14" FHD Display',
      'Windows 11 Home'
    ],
    rating: 4.3,
    stock: 'In Stock',
    image: '/laptop-student.jpg'
  },
  // Desktops
  {
    id: 3,
    name: 'Professional Workstation',
    description: 'Intel i9, 32GB RAM, RTX 3060 - For demanding professional work',
    price: '$1,499.99',
    category: 'desktops',
    specs: [
      'Intel Core i9 12900K',
      '32GB DDR4 RAM',
      '1TB NVMe SSD',
      'NVIDIA RTX 3060 12GB',
      'Windows 11 Pro'
    ],
    rating: 4.8,
    stock: 'In Stock',
    image: '/desktop-workstation.jpg'
  },
  {
    id: 4,
    name: 'Business Desktop',
    description: 'Intel i5, 16GB RAM, Integrated Graphics - Reliable office computer',
    price: '$799.99',
    category: 'desktops',
    specs: [
      'Intel Core i5 12400',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      'Intel UHD Graphics',
      'Windows 11 Pro'
    ],
    rating: 4.4,
    stock: 'Limited Stock',
    image: '/desktop-business.jpg'
  },
  // Components
  {
    id: 5,
    name: 'High-Performance RAM Kit',
    description: '32GB (2x16GB) DDR4-3600 CL16 Memory',
    price: '$159.99',
    category: 'components',
    specs: [
      '32GB Total Capacity',
      '3600MHz Speed',
      'CL16 Timing',
      'RGB Lighting',
      'Aluminum Heat Spreader'
    ],
    rating: 4.7,
    stock: 'In Stock',
    image: '/component-ram.jpg'
  },
  {
    id: 6,
    name: 'NVMe SSD 1TB',
    description: 'PCIe Gen4 NVMe M.2 SSD - Ultra-fast storage',
    price: '$129.99',
    category: 'components',
    specs: [
      '1TB Capacity',
      '7000MB/s Read',
      '5000MB/s Write',
      'PCIe Gen4 x4',
      '5-year warranty'
    ],
    rating: 4.9,
    stock: 'In Stock',
    image: '/component-ssd.jpg'
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (newValue: string) => {
    setCategory(newValue);
  };

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'laptops':
        return <LaptopIcon />;
      case 'desktops':
        return <ComputerIcon />;
      case 'components':
        return <MemoryIcon />;
      default:
        return <BuildIcon />;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Our Products
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            Quality Computers and Components at Wholesale Prices
          </Typography>
        </Box>

        {/* Category Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            centered
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab icon={<BuildIcon />} label="All Products" value="all" />
            <Tab icon={<LaptopIcon />} label="Laptops" value="laptops" />
            <Tab icon={<ComputerIcon />} label="Desktops" value="desktops" />
            <Tab icon={<MemoryIcon />} label="Components" value="components" />
          </Tabs>
        </Paper>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getCategoryIcon(product.category)}
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip 
                      label={product.stock} 
                      color={product.stock === 'In Stock' ? 'success' : 'warning'} 
                      size="small" 
                    />
                    <Rating value={product.rating} precision={0.1} readOnly size="small" />
                  </Stack>
                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                    {product.specs.map((spec, index) => (
                      <Typography component="li" key={index} variant="body2" sx={{ mb: 0.5 }}>
                        {spec}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    onClick={() => navigate('/contact')}
                  >
                    Request Quote
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Paper sx={{ p: 4, mt: 6, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Need Help Finding the Right Product?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Our experts are here to help you choose the perfect solution for your needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ 
              bgcolor: 'white', 
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100'
              }
            }}
            onClick={() => window.location.href = 'tel:954-633-5353'}
          >
            Call Now: 954.633.5353
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProductsPage;
