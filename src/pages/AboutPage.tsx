import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Your Trusted Technology Partner
        </Typography>

        <Paper sx={{ p: 4, my: 4 }}>
          <Typography variant="body1" paragraph>
            Tech Wholesale is a leading provider of wholesale computer and technology solutions. 
            With years of experience in the industry, we pride ourselves on offering high-quality products 
            at competitive prices to businesses, educational institutions, and resellers.
          </Typography>
          <Typography variant="body1" paragraph>
            Our commitment to excellence and customer satisfaction has made us a trusted partner 
            for organizations of all sizes. We understand the unique challenges of the technology 
            sector and work closely with our clients to provide tailored solutions that meet their specific needs.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <SecurityIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Quality Assurance
              </Typography>
              <Typography>
                All our products undergo rigorous quality testing to ensure they meet the highest standards.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <SpeedIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Fast Delivery
              </Typography>
              <Typography>
                We maintain extensive inventory and efficient logistics to ensure quick delivery times.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <SupportAgentIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Expert Support
              </Typography>
              <Typography>
                Our dedicated team provides comprehensive technical support and customer service.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
