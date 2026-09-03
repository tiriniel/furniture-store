import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

// Remove the .tsx extensions from the file paths completely
import Navbar from './components/Navbar';
import Studio from './pages/StudioPage';
import Page01 from './pages/01Page';           
import CollectionPage from './pages/CollectionPage'; 
import JournalPage from './pages/JournalPage';   

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Studio />} />
        <Route path="/01" element={<Page01 />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </>
  );
}
