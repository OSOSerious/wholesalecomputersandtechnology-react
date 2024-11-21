import { Container, Typography, Box, Paper, Grid, TextField, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted');
  };

  return (
    <>
      <Helmet>
        <title>Contact Wholesale Computers & Technology - Fort Lauderdale</title>
        <meta name="description" content="Contact South Florida's premier computer service center. Visit us at 5784 Powerline Rd, Fort Lauderdale, or call 954.633.5353 for immediate assistance." />
        <meta name="keywords" content="computer service Fort Lauderdale, data recovery contact, IT support contact, wholesale computers Florida" />
        <meta property="og:title" content="Contact Wholesale Computers & Technology - Fort Lauderdale" />
        <meta property="og:description" content="Visit us at 5784 Powerline Rd, Fort Lauderdale, or call 954.633.5353 for immediate computer service and data recovery assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wholesalecomputersandtechnology.com/contact" />
        <link rel="canonical" href="https://wholesalecomputersandtechnology.com/contact" />
      </Helmet>

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            South Florida's Premier Computer Service Center
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Send us a message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone"
                        type="tel"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2 }} color="primary" />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Phone
                    </Typography>
                    <Typography>
                      <a href="tel:954-633-5353" style={{ color: 'inherit', textDecoration: 'none' }}>
                        954.633.5353
                      </a>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      24/7 AI Support Available
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOnIcon sx={{ mr: 2 }} color="primary" />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Address
                    </Typography>
                    <Typography>
                      5784 Powerline Rd<br />
                      Fort Lauderdale, FL 33309<br />
                      United States
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccessTimeIcon sx={{ mr: 2 }} color="primary" />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Business Hours
                    </Typography>
                    <Typography>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      AI Phone Support: 24/7
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => window.open('https://maps.google.com/?q=5784+Powerline+Rd,+Fort+Lauderdale,+FL+33309')}
                  sx={{ mt: 2 }}
                >
                  Get Directions
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;
