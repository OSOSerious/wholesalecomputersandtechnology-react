import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import { useNavigate } from 'react-router-dom';

const GamingComputersPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Custom Built',
      description: 'Every gaming PC is custom built to your specifications and needs.',
      icon: <BuildIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'High Performance',
      description: 'Latest gaming hardware for maximum FPS and performance.',
      icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Expert Assembly',
      description: 'Professional assembly with premium cable management.',
      icon: <SettingsIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Gaming Ready',
      description: 'Pre-installed with necessary drivers and gaming optimizations.',
      icon: <SportsEsportsIcon color="primary" sx={{ fontSize: 40 }} />
    }
  ];

  const builds = [
    {
      title: 'Starter Gaming PC',
      specs: [
        'AMD Ryzen 5 / Intel i5 Processor',
        '16GB DDR4 RAM',
        'NVIDIA RTX 3060 Graphics',
        '500GB NVMe SSD',
        'RGB Cooling'
      ],
      price: 'Starting at $999',
      image: '/gaming-pc-starter.jpg'
    },
    {
      title: 'Pro Gaming PC',
      specs: [
        'AMD Ryzen 7 / Intel i7 Processor',
        '32GB DDR4 RAM',
        'NVIDIA RTX 3070 Ti Graphics',
        '1TB NVMe SSD',
        'Premium RGB Cooling'
      ],
      price: 'Starting at $1,499',
      image: '/gaming-pc-pro.jpg'
    },
    {
      title: 'Elite Gaming PC',
      specs: [
        'AMD Ryzen 9 / Intel i9 Processor',
        '64GB DDR4 RAM',
        'NVIDIA RTX 3080 Ti Graphics',
        '2TB NVMe SSD',
        'Custom Water Cooling'
      ],
      price: 'Starting at $2,499',
      image: '/gaming-pc-elite.jpg'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Custom Gaming Computers
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            Professional Custom Gaming PC Builds
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Build Your PC
          </Button>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Gaming PC Builds */}
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Gaming PC Builds
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {builds.map((build, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <SportsEsportsIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {build.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {build.specs.map((spec, specIndex) => (
                      <Typography component="li" key={specIndex} sx={{ mb: 1 }}>
                        {spec}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="h6" color="primary.main" sx={{ mt: 2 }}>
                    {build.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={() => navigate('/contact')}
                  >
                    Configure & Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Build Your Dream Gaming PC?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Contact us now for a custom quote on your perfect gaming build.
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

export default GamingComputersPage;
