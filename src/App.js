import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import Container from './component/Container';
import Modal from './component/Modal';

export default function App() {
  const [openModal, setIsModal] = useState(false)
  return (
    <>
      <Modal open={openModal} close={setIsModal} />
      <Container>
        <div className=' font-bold text-2xl text-white'>Newest Comic</div>
        <Card open={setIsModal}></Card>
      </Container>
    </>
  );
};