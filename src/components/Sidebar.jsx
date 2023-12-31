import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StadiumIcon from '@mui/icons-material/Stadium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import EmailIcon from '@mui/icons-material/Email';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import HelpIcon from '@mui/icons-material/Help';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { GlobalContext } from './../App';
import { useContext } from 'react';

const Sidebar = () => {
  const [openTables, setOpenTables] = useState(false);
  const [openTactics, setOpenTactics] = useState(false);
  const [openTransfers, setOpenTransfers] = useState(false);

  const handleClickTables = () => {
    setOpenTables(!openTables);
  };

  const handleClickTactics = () => {
    setOpenTactics(!openTactics);
  };

  const handleClickTransfers = () => {
    setOpenTransfers(!openTransfers);
  };

  const { messages } = useContext(GlobalContext);
  console.log(messages);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxShadow: 3,
        // width: '200px',
        // height: '90vh',
      }}
    >
      {/* DOMOV */}
      <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Domov" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      {/* Pošta */}
      <Link to="/Inbox" style={{ textDecoration: 'none', color: 'inherit' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Badge badgeContent={messages} color="primary">
                  <EmailIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Pošta" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      {/* Kalendár */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Kalendár" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Štatistiky */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickTables}>
            <ListItemIcon>
              <PivotTableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Štatistiky" />
            {openTables ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Liga" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Hráči" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Klub" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Ostatné ligy" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* Mužstvo */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickTactics}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Mužstvo" />
            {openTactics ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Link to="/Players" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Collapse in={openTactics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Hráči" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link to="/Overview" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Collapse in={openTactics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Prehľad" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Link
        to="/Formations"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Collapse in={openTactics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Formácie" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Collapse in={openTactics} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Tréningy" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* ZÁZEMIE */}
      <Link
        to="/Facilities"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#quotes">
              <ListItemIcon>
                <StadiumIcon />
              </ListItemIcon>
              <ListItemText primary="Zázemie" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      {/* Financie */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#dresy">
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Financie" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Zamestnanci */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#dresy">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Zamestnanci" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Prestupy */}
      <List onClick={handleClickTransfers}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="Prestupy" />
            {openTransfers ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Voľní hráči" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="História" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Ponuky" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Výmeny" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Skauting" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* Klub */}
      <Link to="/Club" style={{ textDecoration: 'none', color: 'inherit' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#dresy">
              <ListItemIcon>
                <SportsHockeyIcon />
              </ListItemIcon>
              <ListItemText
                primary="Klub
            "
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      {/* Návod */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#dresy">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText
              primary="Návod
            "
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
