import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useWindowSize from '../hooks/useWindowSize';
import microphone from '../static/microphone.png';
import chicken from '../static/chicken.png';
import dove from '../static/dove.png';
import disco from '../static/disco.png';
import FlyingImage from '../components/FlyingImage';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function DetailsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { width } = useWindowSize();
  const isSmallScreen = width <= 600;

  const images = [dove, chicken, microphone, disco]

  const image = images[value]

  // <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }} >
  return (
    <Box sx={{ width: '100%', flexGrow: 1, bgcolor: 'background.paper', display: isSmallScreen ? "block" : "flex"}}>
      <Box sx={{ 
            borderBottom: isSmallScreen ? 1 : 0, 
            borderColor: 'divider'}}>
        <Tabs sx={{width: 120}} 
            className="tab-bar" 
            orientation={isSmallScreen ? 'horizontal' : 'vertical'} 
            value={value} 
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange} 
            aria-label="basic tabs example"
        >
          <Tab label="The boring part" {...a11yProps(0)} sx={{borderRight: isSmallScreen ? 0 : 1, borderColor: 'divider'}}/>    
          <Tab label="Dinner" {...a11yProps(1)}  sx={{borderRight: isSmallScreen ? 0 : 1, borderColor: 'divider'}}/>
          <Tab label="The Party" {...a11yProps(2)}  sx={{borderRight: isSmallScreen ? 0 : 1, borderColor: 'divider'}}/>
          <Tab label="Attire" {...a11yProps(3)}  sx={{borderRight: isSmallScreen ? 0 : 1, borderColor: 'divider'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Paperwork</h1>
        <p>
            We will be legally married at an unspecificed location on an unspecificed date with as few parties involved as legally possible.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        
        <h1>Reception</h1>
        <p>
            Friday, October 3, 2025. 
            Cocktail hour from 5:00-6:00p, followed by a family style dinner all at the Garden Patio Terrace at <a href="https://www.google.com/maps/place/Harry's+Fine+Foods/@47.6244569,-122.3268166,17z/data=!3m1!4b1!4m6!3m5!1s0x549015302f986edf:0xe4dfbc9620806d20!8m2!3d47.6244569!4d-122.3268166!16s%2Fg%2F11c0xqb4k3!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D">Harry's Fine Foods</a> on Capitol Hill. The venue is 21+. Don't forget to bring your ID! 
        </p>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h1>Let'r Rip</h1>
        <p>
            Karaoke at <a href="https://www.google.com/maps/place/The+Lookout/@47.6266208,-122.32738,17.62z/data=!4m6!3m5!1s0x549015255fa1941b:0xef754b5604cb6dfd!8m2!3d47.6267332!4d-122.3267662!16s%2Fg%2F1hc7gvxgb!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D">The Lookout</a> starting at 8:00 until ¿ with hosted bar. The venue is 21+.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h1>"Dress Code"</h1>
        <p>
            You know what to do. Aim for Seattle fancy. Maybe don't wear jeans. But wear something that you'll be comfortable doing karaoke in. Unless you have a costume change planned? The bride loves a cute pic!
        </p>
      </CustomTabPanel>
      <FlyingImage src={image} height={80} width={80}/>
      <FlyingImage src={image} height={80} width={80}/>
      <FlyingImage src={image} height={80} width={80}/>
    </Box>
  );
}

export default DetailsTabs