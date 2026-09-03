import { Link } from 'react-router-dom'; 
import '../index.css';

const links = [
  { label: 'STUDIO', url: '/' },
  { label: '01', url: '/01' },              
  { label: 'COLLECTION', url: '/collection' },
  { label: 'JOURNAL', url: '/journal' },
];

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '16px 20px', 
      backgroundColor: 'rgba(0, 0, 0, 0.77)', 
      backdropFilter: 'blur(8px)',  
      position: 'sticky',
      top: 0,
      zIndex: 100 
    }}>
      <ul className='Canela' style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '150px', margin: 0, padding: 0 }}>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.url} className='white' style={{ textDecoration: 'none' }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}