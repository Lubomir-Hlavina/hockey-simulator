import { Box, Paper, Typography } from '@mui/material';
import LastFiveOne from './LastFiveOne';
import dataLastFive from './dataLastFive.json';

const LastFive = () => {
  return (
    <Paper elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          Posledných 5
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '320px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {dataLastFive.map((oneMatch) => {
          return <LastFiveOne key={oneMatch.id} {...oneMatch} />;
        })}
      </Box>
    </Paper>
  );
};

export default LastFive;
