import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
} from '@mui/material';

const ComfyUIGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    // TODO: Implement ComfyUI integration
    console.log('Generating image with prompt:', prompt);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ComfyUI Image Generator
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Enter your prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerate}
                disabled={!prompt}
              >
                Generate Image
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {generatedImage && (
          <Paper sx={{ p: 3 }}>
            <img
              src={generatedImage}
              alt="Generated"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default ComfyUIGenerator;
