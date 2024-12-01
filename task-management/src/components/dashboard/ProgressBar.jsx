
import { Paper, Typography, LinearProgress } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ProgressBar = ({ percentage }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Overall Progress
      </Typography>
      <LinearProgress variant="determinate" value={percentage} />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {Math.round(percentage)}% Complete
      </Typography>
    </Paper>
  );
};