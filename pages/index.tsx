import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../common/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push('/diff');
  }

  return (
    <Box css={{
      minHeight: '100vh',
      padding: '0 0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Head>
        <title>Wazzup, Fam</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Box as='main' onClick={handleClick} css={{
        padding: '5rem 0',
        flex: 1,  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text fontSize='6xl'>Wazzup, Fam!</Text>
      </Box>
    </Box>
  );
}
