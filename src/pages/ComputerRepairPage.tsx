import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent, CardActions } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import MemoryIcon from '@mui/icons-material/Memory';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import { useNavigate } from 'react-router-dom';

const ComputerRepairPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Hardware Repairs',
      description: 'Screen replacement, keyboard repairs, power issues, and more.',
      icon: <ComputerIcon color="primary" sx={{ fontSize: 40 }} />,
      price: 'Starting at $49'
    },
    {
      title: 'Virus Removal',
      description: 'Complete virus and malware removal with system protection.',
      icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />,
      price: 'Starting at $79'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your slow computer with our optimization service.',
      icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />,
      price: 'Starting at $59'
    },
    {
      title: 'Component Upgrades',
      description: 'RAM, SSD, and hardware upgrades for better performance.',
      icon: <MemoryIcon color="primary" sx={{ fontSize: 40 }} />,
      price: 'Custom Quote'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Expert Computer Repair Services
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            Fast, Reliable, and Professional Computer Repairs
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Get Service Now
          </Button>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    {service.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="outlined" 
                    onClick={() => navigate('/contact')}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Why Choose Our Repair Service?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Expert Technicians</Typography>
                <Typography>
                  Our certified technicians have years of experience in computer repair and maintenance.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Quick Turnaround</Typography>
                <Typography>
                  Most repairs are completed within 24-48 hours, getting you back to work faster.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Quality Guarantee</Typography>
                <Typography>
                  All our repairs come with a satisfaction guarantee and warranty on parts and labor.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Need Computer Repair?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Contact us now for fast and reliable computer repair services.
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

export default ComputerRepairPage;
