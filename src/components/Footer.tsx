import React, { Component } from 'react';
import type { CSSProperties } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <div style={styles.content}>
          <div>
            <h4 className="font-cormorantGaramond white text-lg">VAREL</h4>
            <p>Designed to remain.</p>
          </div>
          <div>
            <small>EXPLORE</small>
            <p>Studio</p>
            <p>Collection</p>
            <p>Journal</p>
            <p>About</p>
          </div>
          <div>
            <small>INFORMATION</small>
            <p>Shipping & Delivery</p>
            <p>Privacy</p>
            <p>Contact</p>
          </div>
          <div>
            <small>CONTACT</small>
            <p>hello@varel-studio.com</p>
            <p>+44 20 7946 0184</p>
            <p style={styles.space}>LONDON</p>
            <p>VAREL House</p>
            <p>18 Fitzroy Square</p>
            <p>London W1T 5HP</p>
            <p>United Kingdom</p>
          </div>
          <div>
            <small>INQUIRIES</small>
            <p>For collaborations, press, trade inquiries and general questions:</p>
            <p>studio@varel-studio.com</p>
          </div>
        </div>
        <div style={styles.bottom}>
          <span>© 2026 VAREL</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    );
  }
}

export default Footer;

const styles: Record<string, CSSProperties> = {
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.77)',
    color: 'white',
    padding: '5% 8% 3%',
    fontSize: '0.8rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1.5fr',
    gap: '3rem',
  },
  space: {
    marginTop: '1.5rem',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '4rem',
    opacity: 0.5,
    fontSize: '0.7rem',
  },
};