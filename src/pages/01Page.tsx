import type { CSSProperties } from 'react';
import { Footer } from '../components/Footer';
import bed from '../assets/01bed.webp';
import dinnerTable from '../assets/01dinnerTable.jpg';

export default function Page01() {
  return (
    <div className="background">
      <h1 className='secondary font-cormorantGaramond text-h3' style={styles.sectionCenter}>01 / NEW ARRIVAL</h1>
      <section style={styles.productSection}>
        <img
            src={dinnerTable}
            alt="dinner table"
            style={{width: '40rem'}}/>
        <p className='primary font-canela text-md' >Our newest object is a study in contras. The permanence of stone paired with the warmth and
          depth of dark wood. We launched this piece to explore a quieter form of luxury. Rather than relying
          on ornament or excess, the design is defined by proportion, texture and the relationship between two 
          honest materials. Stone gives the object its weight and permanence. Dark wood introduces warmth, 
          softness and a sense of familiarity. Together, they create a balance between architectural strength 
          and human comfort. This piece marks the beginning of a new material direction for VAREL: objects that 
          feel grounded, enduring and increasingly personal with time.</p>
       </section>    
       <section style={styles.sectionCenter}>
        <h1 className='primary'>01 / MATERIALS</h1>
        <h3 className='primary'>THE WEIGHT OF STONE AND BLACKWOOD</h3>
        <h4 className='primary'>A study of mass, texture and permanence</h4>
        <p className='primary'>NEW COLLECTION · 2026</p>
      </section>
      <p className='primary'>The surface is never perfectly still. Small variations in tone, grain and temperature 
        give each piece its own character. These details are not imperfections. They are evidence of origin.
        We work with materials that become more present with time. Stone that develops depth, metal that
        changes through touch, and wood that records use. The object does not need to compete with its material.
        It exists to reveal it.</p>
         <img
          src={bed}
          alt="bed"
          style={styles.productSection}
        />
     <Footer/>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  sectionCenter:{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6% 8%',
  },
  productSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '6% 8%',
    gap: '6%',
    boxSizing: 'border-box',
  },
   content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
}