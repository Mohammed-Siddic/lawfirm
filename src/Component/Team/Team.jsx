import React from 'react';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import person1 from '../../assets/Person1.png';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import styles from './Team.module.css';
import man1 from '../../assets/man1.png';
import man2 from '../../assets/man2.png';
import man3 from '../../assets/man3.png';
import man4 from '../../assets/man4.png';
import man5 from '../../assets/man5.png';
import man6 from '../../assets/man6.png';

const Team = () => {
  return (
    <div>
      <div className={styles.team}>
        <h3>Our Team</h3>
      </div>
      <div className={styles.team1}>
       <ListItem>
       <ListItemAvatar>
       <Avatar alt="Profile Picture" src={man1} />
       </ListItemAvatar>
       <ListItemText
       primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>Daniel Def</Typography>}
       secondary={<Typography variant="body2" style={{ color: '#71797E' }}>301 cases</Typography>}    />
      </ListItem>

      <ListItem sx={{backgroundColor:'#D3B418', borderRadius:'8px'}}>
       <ListItemAvatar>
       <Avatar alt="Profile Picture" src={man2} />
       </ListItemAvatar>
       <ListItemText
       primary={<Typography variant="body2" style={{ color: 'black' }}>Sanfole</Typography>}
       secondary={<Typography variant="body2" style={{ color: '#71797E' }}>850 cases</Typography>}    />
      </ListItem>

      <ListItem>
       <ListItemAvatar>
       <Avatar alt="Profile Picture" src={man3} />
       </ListItemAvatar>
       <ListItemText
       primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>Cesforilla</Typography>}
       secondary={<Typography variant="body2" style={{ color: '#71797E' }}>470 cases</Typography>}    />
      </ListItem>
      </div>

      <br />

      <div className={styles.team2}>
       <ListItem>
       <ListItemAvatar>
       <Avatar alt="Profile Picture" src={man4} />
       </ListItemAvatar>
       <ListItemText
       primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>Colleen</Typography>}
       secondary={<Typography variant="body2" style={{ color: '#71797E' }}>180 cases</Typography>}    />
      </ListItem>

      <ListItem>
       <ListItemAvatar>
       <Avatar alt="Profile Picture" src={man5} />
       </ListItemAvatar>
       <ListItemText
       primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>Haldone</Typography>}
       secondary={<Typography variant="body2" style={{ color: '#71797E' }}>212 cases</Typography>}    />
      </ListItem>

      <ListItem>
       <ListItemAvatar>
       <Avatar alt="Profile Picture" src={man6} />
       </ListItemAvatar>
       <ListItemText
       primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>Nik Jeo</Typography>}
       secondary={<Typography variant="body2" style={{ color: '#71797E' }}>350 cases</Typography>}    />
      </ListItem>
      </div>
    </div>
  )
}

export default Team


