import { Container, Typography, Box, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import { useNavigate } from 'react-router-dom';

const DataRecoveryPage = () => {
  const navigate = useNavigate();

  const features = [
    'In-house clean room facility',
    'Professional data recovery experts',
    'Forensic data recovery capabilities',
    'Free evaluation - No recovery, no fee',
    'Recovery from all types of storage devices',
    'Secure and confidential service'
  ];

  const services = [
    {
      title: 'Hard Drive Recovery',
      description: 'Recovery from damaged, corrupted, or inaccessible hard drives.',
      icon: <BuildIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Forensic Recovery',
      description: 'Professional forensic data retrieval and analysis services.',
      icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Fast Service',
      description: 'Quick turnaround time with emergency service available.',
      icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Professional Data Recovery Services
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            We'll Get Your Data Back Or You Pay Nothing!
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Start Recovery Now
          </Button>
        </Box>

        {/* Features List */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Why Choose Our Data Recovery Service?
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Need Data Recovery Services?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Contact us today for a free evaluation of your data recovery needs.
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

export default DataRecoveryPage;
