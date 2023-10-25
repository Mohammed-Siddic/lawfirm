import React from 'react';
import igstudio from '../../assets/Ig Studio.png';
import styles from './Footer.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import fb from '../../assets/fb.png';
import twitter from '../../assets/tweet.png';
import ig from '../../assets/ig.png';
import pin from '../../assets/pin.png';

const Footer = () => {
  return (
    <div>
    <div className={styles.footbar}>
    <img src={igstudio} alt="igstd" className={styles.footimg} />
    <div className={styles.footbarText}>
    <Button variant="text" sx={{color:'white'}}>Home</Button>
    <Button variant="text" sx={{color:'white'}}>Attorneys</Button>
    <Button variant="text" sx={{color:'white'}}>Practice Areas</Button>
    <Button variant="text" sx={{color:'white'}}>About</Button>
    </div>
    <Stack spacing={2} direction="row">
      <img src={fb} alt="facebook" className={styles.footimg} />
      <img src={twitter} alt="twitter" className={styles.footimg} />
      <img src={ig} alt="instagram" className={styles.footimg} />
      <img src={pin} alt="pin" className={styles.footimg} />
    </Stack>
    </div>
    <br/>
    <br/>
    <div className={styles.copyright}>
       <p>&#169; 2020 Acme. All right reserved || Privacy Policy || Terms of use</p>
    </div>
    </div>
  )
}

export default Footer