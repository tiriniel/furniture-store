import sofa from '../assets/01sofa.png';
import table from '../assets/01table.png';
import type { CSSProperties } from 'react';


export default function StudioPage() {
  return (
    <div style={styles.center}>
      <section style={styles.hero}>
        <img src={sofa} alt="sofa" style={{ width: '90%' }} />
      </section>
      
      <section style={styles.top}>
        <h1 className="font-cormorantGaramond primary text-h2">
          VAREL
        </h1>
        <h2 className="font-canela secondary text-h2">OBJECTS OF PERMANENCE</h2>
      </section>
      <section style={styles.center}>
        <img src={table} alt="table" style={{width: '50%'}}/>
        <h3 className='primary text-h3'>01 / SLAB TABLE</h3>
        
      </section>
    </div>
  );
}



const styles: Record<string, CSSProperties> = {
  hero: {
    display: 'flex',            
    justifyContent: 'center',   
  },
  top: {
    display: 'flex',            
    flexDirection: 'column',   
    alignItems: 'center',  
    padding: '2px 0'   
  },
//   center: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5rem',
//   },
};
