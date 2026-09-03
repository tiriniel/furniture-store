import '../index.css'

const links = [
  { label: 'STUDIO', url: '/' },
  { label: '01', url: '../01Page' },
  { label: 'COLLECTION', url: '../CollectionPage' },
  { label: 'JOURNAL', url: '../JournalPage' },
];


export default function Navbar() {
  return (
    <nav style={{ padding: '16px 20px', backgroundColor: 'rgba(0, 0, 0, 0.77)', backdropFilter: 'blur(8px)',  position: 'sticky',
        top: 0,
        zIndex: 100 }}>
      <ul className='Canela' style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.url} className='white' style={{ textDecoration: 'none' }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}