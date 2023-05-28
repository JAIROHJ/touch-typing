import { Box, Typography } from '@mui/material'
import React from 'react'

const Top = () => {
  return (
    <div>
       <Box sx={{ paddingTop: "20px", borderRadius: 1, height: "100px" }}>
      <Typography
        variant="h2"
        sx={{ color: "white", fontWeight: "800", letterSpacing: "8px" }}
      >
        Touch Typing
      </Typography>
    </Box>
    </div>
  )
}

export default Top