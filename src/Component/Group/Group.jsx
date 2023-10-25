import React from 'react';
import styles from './Group.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import rectangle1 from '../../assets/Rectangle 3651.png';
import rectangle2 from '../../assets/Rectangle 3652.png';
import rectangle3 from '../../assets/Rectangle 3653.png';
import rectangle4 from '../../assets/Rectangle 3654.png';
import rectangle5 from '../../assets/Rectangle 3655.png';
import rectangle6 from '../../assets/Rectangle 3656.png';


const Group = () => {
  return (
    <div>
        <div className={styles.head}>
            <h1>Area Of Practices</h1>
        </div>
       <div>
        <br />
       <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
        <Grid item xs={6} md={8} lg={8} xl={8} className={styles.imageContainer}>
          <img src={rectangle2} alt="rect2" />
          <p class={styles.textContainer}>BUSINESS LAW</p>
        </Grid>

        <Grid item xs={6} md={4} lg={4} xl={4} className={styles.imageContainer}>
        <img src={rectangle1} alt="rect1" />
        <p class={styles.textContainer}>PARTNERSHIP LAW</p>
        </Grid>

        <Grid item xs={6} md={4} lg={4} xl={4} className={styles.imageContainer}  >
        <img src={rectangle3} alt="rect3" />
        <p class={styles.textContainer}>REAL ESTATE LAW</p>
        </Grid>

        <Grid item xs={6} md={8} lg={8} xl={8} className={styles.imageContainer}>
        <img src={rectangle4} alt="rect4"/>
        <p class={styles.textContainer}>BUSINESS LAW</p>
        </Grid>

        <Grid item xs={6} md={8} lg={8} xl={8} className={styles.imageContainer}>
          <img src={rectangle6} alt="rect5" />
          <p class={styles.textContainer}>LANDLORD DISPUTES</p>
        </Grid>

        <Grid item xs={6} md={4} lg={4} xl={4} className={styles.imageContainer}>
        <img src={rectangle5} alt="rect6" />
        <p class={styles.textContainer}>ELDER ABUSE</p>
        </Grid>

      </Grid>
    </Box>
       </div>
    </div>
  )
}

export default Group;