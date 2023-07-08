import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './style.css';
import Typography from '@mui/material/Typography';

export default function BasicRating({ itemRating }) {

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating name="readOnlyRating" value={itemRating} precision={0.1} readOnly />
        </Box>
    );
}