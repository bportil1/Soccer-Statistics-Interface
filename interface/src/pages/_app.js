import React from 'react';
import RootLayout from '../app/layout'
import useMounted from '../common_components/mountCheck.js';
import Box from '@mui/material/Box';

export default function CompletePage({ Component, pageProps }) {
  const hasMounted = useMounted();
  if (!hasMounted) return null;
  return (
    <RootLayout>
      <Box width='80%' sx={{ml:'auto', mr:'auto', mt: 1}}>
      <Component {...pageProps} />
      </Box>
    </RootLayout>
  )
}
