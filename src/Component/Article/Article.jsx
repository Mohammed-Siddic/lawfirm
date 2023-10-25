import React from 'react';
import styles from './Article.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Gift from '../../assets/Gift.png'


const Article = () => {
  return (
    <div>
    <div className={styles.head}>
        <h1>Why Choose Us?</h1>
    </div>
    <br />
    <div className={styles.side}>
        <Card sx={{ maxWidth: 345, bgcolor: 'text.secondary', border:'0.5px solid #363636', padding:'8px' }} >
        <CardMedia
        component="img"
        alt="gift1"
        height="140"
        sx={{objectFit:'contain', width:'35%', height:'100px', padding:'8px', paddingBottom:'0px'}}
        image={Gift}
        />
       <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          98% Success Rate
        </Typography>
        <Typography variant="body2" color="white">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repellat corporis illo, ipsum inventore veniam cum laboriosam reprehenderit, hic totam provident necessitatibus? Fuga, laudantium minima?
        </Typography>
       </CardContent>
       <CardActions>
        <Button className={styles.btn} size="small" sx={{ color: 'black', bgcolor: '#B2970B ', borderRadius:'15px', padding:"10px", margin:'4px' }} >Read More</Button>
       </CardActions>
       </Card>

       <Card sx={{ maxWidth: 345, bgcolor: 'text.secondary', border:'0.5px solid #363636', padding:'8px' }} >
       <CardMedia
        component="img"
        alt="gift2"
        height="140"
        sx={{objectFit:'contain', width:'35%', height:'100px', padding:'8px', paddingBottom:'0px'}}
        image={Gift}
       />
       <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          100% Success Rate
        </Typography>
        <Typography variant="body2" color="white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nobis. At neque iure repudiandae eaque sunt molestiae, ipsum quibusdam architecto eligendi odio voluptatem perspiciatis porro?
        </Typography>
       </CardContent>
       <CardActions >
        <Button className={styles.btn} size="small" sx={{ color: 'black', bgcolor: '#B2970B ', borderRadius:'15px', padding:"10px", margin:'4px' }} >Read More</Button>
       </CardActions>
       </Card>

       <Card sx={{ maxWidth: 345, bgcolor: 'text.secondary', border:'0.5px solid #363636', padding:'8px' }} >
       <CardMedia
        component="img"
        alt="gift3"
        height="140"
        sx={{objectFit:'contain', width:'35%', height:'100px', padding:'8px', paddingBottom:'0px'}}
        image={Gift}
       />
       <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white" >
          100% Success Rate
        </Typography>
        <Typography variant="body2" color="white">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laboriosam architecto blanditiis reprehenderit ducimus soluta dicta neque voluptas eos. Dicta, facilis voluptate? Aspernatur, necessitatibus et?
        </Typography>
        </CardContent>
       <CardActions>
        <Button className={styles.btn} size="small" sx={{ color: 'black', bgcolor: '#B2970B ', borderRadius:'15px', padding:"10px",  margin:'4px'}} >Read More</Button>
       </CardActions>
       </Card>
    </div>
    </div>
  )
}

export default Article;