import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { useNavigate } from 'react-router-dom';

const AISupportPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Instant Response',
      description: 'Available 24/7, responds within seconds to customer inquiries',
      icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Natural Conversation',
      description: 'Advanced AI that communicates naturally like a human agent',
      icon: <SmartToyIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Secure Handling',
      description: 'Enterprise-grade security for all customer interactions',
      icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
    },
    {
      title: 'Smart Escalation',
      description: 'Seamless handoff to human agents when needed',
      icon: <SupportAgentIcon color="primary" sx={{ fontSize: 40 }} />
    }
  ];

  const capabilities = [
    {
      title: 'Technical Support',
      items: [
        'Hardware diagnostics',
        'Software troubleshooting',
        'Network connectivity issues',
        'System updates and maintenance',
        'Performance optimization'
      ]
    },
    {
      title: 'Customer Service',
      items: [
        'Product inquiries',
        'Service status updates',
        'Appointment scheduling',
        'Basic account management',
        'FAQ handling'
      ]
    },
    {
      title: 'Analytics & Learning',
      items: [
        'Issue pattern recognition',
        'Service quality monitoring',
        'Customer satisfaction tracking',
        'Continuous learning',
        'Performance reporting'
      ]
    }
  ];

  const stats = [
    {
      value: '75%',
      label: 'First Contact Resolution'
    },
    {
      value: '24/7',
      label: 'Availability'
    },
    {
      value: '<10s',
      label: 'Response Time'
    },
    {
      value: '98%',
      label: 'Customer Satisfaction'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            AI Support Agent
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
            Intelligent IT Support Available 24/7
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Try AI Support Now
          </Button>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" component="div" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

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

        {/* How It Works */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            How It Works
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <SmartToyIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>1. Initial Contact</Typography>
                <Typography>
                  Customer calls support and is greeted by our AI agent, which understands natural language and context.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <IntegrationInstructionsIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>2. Problem Analysis</Typography>
                <Typography>
                  AI analyzes the issue using advanced diagnostics and our extensive knowledge base.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <AnalyticsIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>3. Smart Resolution</Typography>
                <Typography>
                  Provides solution or seamlessly transfers to a specialist if needed, with full context.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Capabilities */}
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          AI Support Capabilities
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {capabilities.map((capability, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom align="center">
                    {capability.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {capability.items.map((item, itemIndex) => (
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

        {/* Call to Action */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Experience Next-Gen IT Support
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Try our AI Support Agent and see how it can transform your IT support experience.
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

export default AISupportPage;
