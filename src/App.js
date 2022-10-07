import React, { useState } from 'react';
import Container from './components/Container/Container';
import Appbar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';

export default function App() {
  const [closemodal, setClosemodal] = useState('');

  return (
    <Container>
      <Appbar setClosemodal={setClosemodal} />
      <HomePage closemodal={closemodal} />
    </Container>
  );
}
