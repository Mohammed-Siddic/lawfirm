import React from 'react';
import styles from './Carousel.module.css';
import g1 from '../../assets/Group 40.png';
import g2 from '../../assets/Group 41.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import person1 from '../../assets/Person1.png';
import person2 from '../../assets/Person2.png'
import person3 from '../../assets/Person3.png'


const Carousel = () => {
  return (
    <div>
      <div className={styles.split}>
        <div>
        <h2>What says our</h2>
        <h2>Happy Clients</h2>
        </div>
        <div className={styles.fb}>
          <img src={g1} alt="" height="fit-content" />
          <img src={g2} alt="" height="fit-content" />
        </div>
      </div>

      <br />

      <div className={styles.carousel}>
      <Card sx={{ maxWidth: 345, bgcolor: 'text.secondary', border:'0.5px solid #363636' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={person2}
          sx={{objectFit:'contain', width:'35%', height:'100px', padding:'8px', paddingBottom:'0px'}}
          alt="Jane"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white" fontWeight="bold">
            Jane Cooper
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color="white">
            Ceo of Hunt
          </Typography>
          <Typography variant="body2" color="white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui excepturi saepe, iste fugit similique a adipisci illo quis, modi quas quod provident quisquam earum quam.
          </Typography>
        </CardContent>
       </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, bgcolor: 'text.secondary', border:'0.5px solid #363636' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={person1}
          sx={{objectFit:'contain', width:'35%', height:'100px', padding:'8px', paddingBottom:'0px'}}
          alt="Devon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white" fontWeight="bold">
            Devon Lane
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color="white">
            Ceo of Hunt
          </Typography>
          <Typography variant="body2" color="white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui excepturi saepe, iste fugit similique a adipisci illo quis, modi quas quod provident quisquam earum quam.
          </Typography>
        </CardContent>
       </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, bgcolor: 'text.secondary', border:'0.5px solid #363636' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={person3}
          sx={{objectFit:'contain', width:'35%', height:'100px', padding:'8px', paddingBottom:'0px'}}
          alt="Jane"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white" fontWeight="bold">
            Robert Fox
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color="white">
            Ceo of Hunt
          </Typography>
          <Typography variant="body2" color="white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui excepturi saepe, iste fugit similique a adipisci illo quis, modi quas quod provident quisquam earum quam.
          </Typography>
        </CardContent>
       </CardActionArea>
      </Card>
      </div>
    </div>
  )
}

export default Carousel;