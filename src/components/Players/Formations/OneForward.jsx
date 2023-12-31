import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const OneForward = ({
  name,
  img,
  playerType,
  attributes,
  age,
  playerPosition,
  factors,

}) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const handleInfoClick = () => {
    setInfoModalOpen(true);
  };

  const handleInfoClose = () => {
    setInfoModalOpen(false);
  };

  return (
    <Paper elevation={3} sx={{ background: 'white' }}>
      <Box
        sx={{
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          {playerPosition}
        </Typography>
      </Box>
      <Box>
        <img
          src={img}
          alt="player-photo"
          style={{ width: '100%', height: 'auto' }}
        ></img>
      </Box>
      <Box sx={{ padding: '1em' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#1976D2' }}>
          {name}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ' 1fr 1fr 1fr',
            gridTemplateRows: 'auto ',
            marginTop: '1em',
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Vek: {age}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Zohratosť: {factors.chemistry}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              OVR: {attributes.overall}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          {playerType}
        </Typography>
      </Box>

      {/* Information Modal */}
      <Dialog open={isInfoModalOpen} onClose={handleInfoClose}>
        <DialogTitle sx={{ background: '#1976D2', color: 'white' }}>
          Title
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{ textAlign: 'justify', paddingY: '1.5em' }}
          >
            Text
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose} color="primary">
            Zavrieť
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default OneForward;
