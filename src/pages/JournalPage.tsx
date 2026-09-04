import type { CSSProperties } from 'react';
import Footer from "../components/Footer";
import coffieTable from '../assets/coffieTable02.webp';
import chair from '../assets/chair01.webp';

export default function JournalPage() {
  return (
    <div className="background">
      <section style={styles.hero}>
        <h2 className='primary font-cormorantGaramond text-h2' style={{padding: '40px'}}>ABOUT THE PROJECT</h2>
        <p className='primary font-cormorantGaramond text-lg'> VAREL is a fictional international furniture and design brand created as a frontend development project.
            The concept combines luxury furniture, brutalist architecture and editorial fashion direction into one digital experience.
            The goal was to create a website that feels like a design house rather than a traditional online furniture store.</p>
          <div style={styles.imageSection}>
            <img
              src={coffieTable}
              alt="coffie table"
              style={{width: '20rem',
                      height: '20rem',
                      objectFit: 'cover',
                      paddingTop: '60px'}}/>
              <img
              src={chair}
              alt="chair"
              style={{width: '20rem',
                      height: '20rem',
                      objectFit: 'cover',
                      paddingTop: '60px'}}/>
            </div>
      </section>
      <section className='primary' style={styles.sectionCenter}>
        <h3 className='text-h3'>PROJECT TYPE</h3>
        <span className='text-lg'>Fictional luxury furniture brand</span>
        <h3 className='text-h3'>ROLE</h3>
        <span className='text-lg'>Frontend developer</span>
        <h3 className='text-h3'>OBJECTIVE</h3>
        <p className='text-lg'>Create a high-end, editorial website that communicates quality through typography,spacing, imagery and interaction.</p>
        <h3 className='text-h3'>DESIGN DIRECTION</h3>
        <p className='text-lg'>The visual identity is built around contrast: hard architectural forms and warm natural materials. The layout uses 
          oversized typography, asymmetrical grids, sharp edges and generous negative space. The interface avoids unnecessary 
          decoration. Every element is designed to feel intentional, quiet and precise.</p>
        </section>
        <section className='primary' style={styles.sectionCenter}>
          <h2>01 / TYPOGRAPHY</h2>
          <p>Large editorial headlines create hierarchy and give the brand a confident presence.</p>
          <h2>02 / COLOUR</h2>
          <p>A restrained palette of black, warm white, concrete grey and dark wood keeps the focus on the products.</p>
          <h2>03 / LAYOUT</h2>
          <p>Asymmetrical grids and overlapping content create a more architectural composition.</p>
          <h2>04 / IMAGERY</h2>
          <p>Material-focused photography communicates texture, weight and quality. 
          <span>Note all imagery used in this project do not belong to me</span>
          </p>
        </section>
        <section className='primary' style={styles.sectionCenter}>
          <h1>TECHNICAL DETAILS</h1>
          <h2>LANGUAGES</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, marginLeft: 0, textAlign: 'center' }}>
            <li>TypeScript</li>
            <li>CSS</li>
          </ul>
          <h2>FRAMEWORKS</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, marginLeft: 0, textAlign: 'center' }}>
            <li>React</li>
          </ul>
          <h2>TOOLS</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, marginLeft: 0, textAlign: 'center' }}>
            <li>Git</li>
            <li>GitHub</li> 
            <li>VS Code</li>
          </ul>
      </section>
      <section className='primary' style={styles.sectionCenter}>
           <h2>WHY I BUILT THIS</h2>
           <p>The project focuses on frontend craftsmanship rather than complex functionality. Typography, layout,
             spacing, imagery and subtle interaction are used to create a strong visual identity. VAREL allowed me 
             to experiment with editorial web design while building a reusable and responsive frontend system.</p>
      </section>
      <Footer/>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  hero:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    padding: '6% 8%',
  },
  imageSection:{
     display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  sectionCenter:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    padding: '2% 20%',
    gap: '50px',
  },
}