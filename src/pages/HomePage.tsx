import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Wholesale Computers & Technology - Fort Lauderdale's Premier Computer Services</title>
        <meta name="description" content="Fort Lauderdale's leading computer service center offering certified data recovery with clean room, AI-powered support, and expert computer repair. Call 954.633.5353 now!" />
        <meta name="keywords" content="data recovery Fort Lauderdale, clean room data recovery, AI support agent, computer repair, wholesale computers, Fort Lauderdale IT services" />
        <meta property="og:title" content="Wholesale Computers & Technology - Fort Lauderdale's Premier Computer Services" />
        <meta property="og:description" content="Certified data recovery with clean room facility and AI-powered support available 24/7. Fort Lauderdale's most trusted computer service center." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wholesalecomputersandtechnology.com" />
        <link rel="canonical" href="https://wholesalecomputersandtechnology.com" />
      </Helmet>
      
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Fort Lauderdale's Premier Computer Services
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
              Expert Data Recovery & 24/7 AI-Powered Support
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
              Certified Clean Room Data Recovery | 75% First-Contact Resolution Rate
            </Typography>
            <Button variant="contained" size="large" onClick={() => navigate('/contact')} sx={{ mr: 2 }}>
              Contact Us: 954.633.5353
            </Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/products')}>
              View Our Shop
            </Button>
          </Box>

          {/* Featured Services */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <StorageIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Certified Data Recovery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    South Florida's only certified clean room facility. 98% success rate in recovering lost data from any storage device. No recovery, no fee guarantee!
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => navigate('/data-recovery')}
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <SupportAgentIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    24/7 AI Support Agent
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Industry-leading AI phone support with 75% first-contact resolution. Available 24/7 with smart human escalation when needed.
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => navigate('/ai-support')}
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <BuildIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Computer Repair
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    FREE diagnostics on all repairs! Certified to repair all Apple and PC computers.
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => navigate('/computer-repair')}
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <ComputerIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Business Solutions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Complete IT solutions including VoIP services, network setup, and managed services.
                  </Typography>
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => navigate('/business-solutions')}
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Stats Section */}
          <Paper sx={{ p: 4, mb: 6, textAlign: 'center' }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" color="primary">98%</Typography>
                <Typography variant="subtitle1">Recovery Success Rate</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" color="primary">75%</Typography>
                <Typography variant="subtitle1">First-Contact Resolution</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" color="primary">24/7</Typography>
                <Typography variant="subtitle1">AI Support Available</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" color="primary">3946+</Typography>
                <Typography variant="subtitle1">Happy Customers</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Location Section */}
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Visit Our Store in Fort Lauderdale</Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              5784 Powerline Rd, Fort Lauderdale, FL 33309
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday: 10:00 AM - 4:00 PM EST
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => window.open('https://maps.google.com/?q=5784+Powerline+Rd,+Fort+Lauderdale,+FL+33309')}
              sx={{ mt: 2 }}
            >
              Get Directions
            </Button>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
