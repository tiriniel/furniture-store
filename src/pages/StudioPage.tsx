import sofa from '../assets/01sofa.png';
import table from '../assets/01table.png';
import sofa2 from '../assets/02sofa.jpg';
import type { CSSProperties } from 'react';
import { DiscoverButton } from '../components/DiscoverButton';

export default function StudioPage() {
  return (
    <div>
      <section style={styles.hero}>
        <img
          src={sofa}
          alt="sofa"
          style={styles.heroImage}
        />
        <div style={styles.heroContent}>
          <h1 className="font-cormorantGaramond white text-h2">
            VAREL
          </h1>
          <h2 className="font-canela white text-xl">
            OBJECTS OF PERMANENCE
          </h2>
        </div>
      </section>

      <section style={styles.productSection}>
        <img src={table} alt="table" style={{width: '50%'}}/>
        <div style={styles.productContent}>
          <h3 className='primary text-h3'>01 / SLAB TABLE</h3>
          <p className='primary text-lg font-cormorantGaramond'>
            Formed by nature. Refined by design.
          </p>
          <div style={styles.discoverButton}>
            <DiscoverButton text="Discover" onClick={() => console.log('Clicked!')} />
          </div>
        </div>
      </section>

      <section className="font-canela secondary text-xl" style={styles.statementSection}>
        <h2>FORM IS NOT DECORATION</h2>
      </section>

      <section style={styles.productSection}>
        <img src={sofa2} alt="sofa" style={{width: '50%'}}/>
        <div style={styles.productContent}>
          <h3 className='primary text-h3'>02 / AXIS SOFA</h3>
          <p className='primary text-lg font-cormorantGaramond'>
            A quiet statement in form and comfort.
          </p>
          <div style={styles.discoverButton}>
            <DiscoverButton text="Discover" onClick={() => console.log('Clicked!')} />
          </div>
        </div>
      </section>
    </div>
  );
}


const styles: Record<string, CSSProperties> = {
  hero: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroContent: {
    position: 'absolute',
    top: '40%',
    left: '8%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0',
  },
  productSection: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '6% 8%',
    gap: '6%',
    boxSizing: 'border-box',
  },
  productContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  discoverButton: {
    marginTop: '2rem',
  },
  statementSection: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4%',
  }
};