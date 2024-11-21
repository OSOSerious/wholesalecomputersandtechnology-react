import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';

const VoIPServicesPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Cloud-Based System',
      description: 'Fully hosted VoIP solution with no hardware requirements.',
      icon: <CloudIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Secure Communications',
      description: 'Enterprise-grade security with encrypted calls.',
      icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring.',
      icon: <SupportIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Cost Effective',
      description: 'Reduce your phone bills by up to 60%.',
      icon: <MonetizationOnIcon color="primary" sx={{ fontSize: 40 }} />
    }
  ];

  const benefits = [
    {
      title: 'Advanced Features',
      items: [
        'Auto Attendant',
        'Call Recording',
        'Voicemail to Email',
        'Call Analytics',
        'Mobile Integration'
      ]
    },
    {
      title: 'Business Solutions',
      items: [
        'Conference Calling',
        'Video Meetings',
        'Team Messaging',
        'CRM Integration',
        'Custom Call Flows'
      ]
    },
    {
      title: 'Enterprise Support',
      items: [
        'Dedicated Account Manager',
        'Network Monitoring',
        'Priority Support',
        'Regular Updates',
        'Training Sessions'
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            VoIP Business Solutions
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            Enterprise-Grade VoIP Services for Modern Businesses
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Get Started
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

        {/* Benefits Section */}
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          VoIP Benefits & Features
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <PhoneInTalkIcon color="primary" sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom align="center">
                    {benefit.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {benefit.items.map((item, itemIndex) => (
                      <Typography component="li" key={itemIndex} sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Why Choose Our VoIP Service?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Reliability</Typography>
                <Typography>
                  99.999% uptime guarantee with redundant data centers and failover protection.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Scalability</Typography>
                <Typography>
                  Easily scale your phone system up or down as your business needs change.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Support</Typography>
                <Typography>
                  Expert technical support available 24/7 to keep your business connected.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Call to Action */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Upgrade Your Business Communications?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Contact us now for a free consultation and custom quote.
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

export default VoIPServicesPage;
