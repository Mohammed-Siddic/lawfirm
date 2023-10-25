import React from 'react';
import man from '../../assets/Man.png';
import styles from './Header.module.css';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.head}>
            <br />
            <h2>You don't have to</h2>
             <h1><strong>Fight them alone.</strong></h1>
             <div className={styles.para}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, praesentium? Sint, quos. Nam reprehenderit officia delectus, corrupti assumenda minima rem voluptatum, dolor animi explicabo totam doloremque veritatis magnam sit sint!</p>
             </div>
             <br />
             <div>
             <TextField hiddenLabel id="filled-hidden-label-normal" placeholder='Enter your email' variant="standard"
             sx={{border:'0.3px solid #202020', borderRadius:'6px', padding:'12px', width:'20rem',input: { color: 'white' }}} />
             <Button className={styles.btn} sx={{backgroundColor:'#D3B418', border:'0.3px solid black', borderRadius:'6px', padding:'16px', color:'black'}}>Lets talk</Button>
             </div>
        </div>
        <div>
            <img src={man} alt="man" className={styles.img1}/>
        </div>
    </div>
  )
}

export default Header;