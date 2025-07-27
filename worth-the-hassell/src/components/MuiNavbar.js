import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sparkles from './SparkleWrapper';

const drawerWidth = 240;
const navItems = [
    {
        "page": 'Home',
        "location": "#/"
    },
    {
        "page": "The Facts",
        "location": "#/details",
        "nested": [
            {
                "tab": "Legally Married",
                "value": "0"
            },
            {
                "tab": "Dinner",
                "value": "1"
            },
            {
                "tab": "Karaoke",
                "value": "2"
            },
            {
                "tab": "Dress Code",
                "value": "3"
            },
            {
                "tab": "Registry",
                "value": "4"
            },
        ]
    },
    {
        "page": "RSVP",
        "location": "#/rsvp"
    },
    {
        "page": "Photos",
        "location": "#/photos"
    }
];

const title = "#WorthTheHassell";

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Sparkles>{title}</Sparkles>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem alignItems={(item.nested?.length > 0) ? 'flex-start' : 'center'} key={item.page} disablePadding>
            <ListItemButton href={item.location} sx={{ textAlign: 'center' }}>
            <Sparkles><ListItemText primary={item.page} /></Sparkles>
            </ListItemButton>
            {item.nested?.length > 0 && (
                <List disablePadding>
                    {item.nested.map((nested) => (
                        <ListItem key={nested.tab} disablePadding>
                            <ListItemButton href={`${item.location}/${nested.value}`} >
                            <Sparkles><ListItemText primary={nested.tab} /></Sparkles>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
          </ListItem>
          
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Sparkles>{title}</Sparkles>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Sparkles key={item.page}>
                <Button href={item.location} key={item.page} sx={{ color: '#fff' }}>
                    {item.page}
                </Button>
              </Sparkles>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />

    </Box>
  );
}

export default DrawerAppBar;