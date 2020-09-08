import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { Menu } from "antd";
import { pinContext } from "./Context";
import IconButton from "@material-ui/core/IconButton";
import MyMenu from "./Menu";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./components.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import "./components.css";
import Popover from "@material-ui/core/Popover";
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppsIcon from '@material-ui/icons/Apps';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import Pagination from '@material-ui/lab/Pagination';
import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';
  import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
  import ReactPaginate from 'react-paginate';
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';

const drawerWidth = 301;
const IconDrawerWidth = 70;
const { SubMenu } = Menu;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  IconBarShift: {
    marginLeft: IconDrawerWidth,
    width: `calc(100% - ${IconDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "flex-end",
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  user:{
    
   marginTop:theme.spacing(8),
   display:'flex',
   justifyContent:'space-between',
   padding:theme.spacing(2)
  },
  icons:{
    display:'flex',
    justifyContent:'flex-start',
    
  },
  space:{
    marginLeft:theme.spacing(2)
  },
  master:{
    display:'flex',
    justifyContent:'flex-start',
    marginTop:theme.spacing(2),
    padding:theme.spacing(2),
    backgroundColor:'white'
  },
  crud:{
    display:'flex',
    justifyContent:'space-between'
  },
  crudend:{
    display:'flex'
  },
  bgcolor:{
    backgroundColor:"#e1eaea",
    marginTop:theme.spacing(2)
    
  },
  bgcolor1:{
    backgroundColor:"#66ccff",
    
    
  },
  fields:{
    display:'flex',
    
    
  },
  center:{
    display:'flex',
    justifyContent:'center',
    padding:'5px',
    margin:'5px'
  }
  ,
  tfield:{
    width:'35%'
  },
  grow:{
    flexGrow:1,
    textAlign:'center'
  },
  crudbg:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'#e6eeff'
  
  },
  
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(0, "wahab 0", "wahabraza0", "wahabraz0@gmail.com" ),
  createData(1, "wahab 1", "wahabraza1", "wahabraza1@gmail.com"),
  createData(2, "wahab 2", "wahabraza2", "wahabraza2@gmail.com"),
  createData(3, "bilal 3", "bilalahmed3", "bilalahmed3@gmail.com"),
  createData(4, "bilal 4", "bilalahmed4", "bilalahmed4@gmail.com"),
];

const rows1 = [
  createData(0, "LoginId", "text", "user" ),
  createData(1, "First Name", "text", "user"),
  createData(2, "Last Name", "text", "user"),
  createData(3, "Email", "text", "user"),
  
];


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const classes = useStyles();

  // MY CODE

  // Full screen logic
  const [fullscreen, setFullScreen] = useState(false);
  const [value, setValue] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [age,setAge]=React.useState('')
  const [openMessageDialog,setMessageDialog] =useState(false)
  const [openMessageDialog1,setMessageDialog1] =useState(false)
  const [checked, setChecked] = React.useState(true);

  const handleChangec = (event) => {
    setChecked(event.target.checked);
  };
  const handleChanger = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handle = useFullScreenHandle();

  // onPageChange = (data) => {
  //   let selected = data.selected;
  //   let offset = Math.ceil(selected * adsPerPage);
  //   this.setState({ offset: offset, loading: true });
  // };

  const enterFullScreen = () => {
    setFullScreen(true);
    handle.enter();
  };

  const exitFullScreen = () => {
    setFullScreen(false);
    handle.exit();
  };

  // Popper Logic
  const [openPopper, setPopper] = useState(false);

  // Drawer Logic
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [shiftBar, setShiftBar] = useState(false);

  // Use Pincontext
  const { pin, setPin } = useContext(pinContext);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
    setShiftBar(!shiftBar);
    setPin(false);
    {
      openDrawer ? setOpen(true) : setOpen(false);
    }
  };

  const handleDrawerPin = () => {
    setPin(!pin);
    setOpen(!open);
  };

  // MUI CODE
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

 const handleOpenMessageDialog = () => {
    setMessageDialog(true );
  };

  const handleCloseMessageDialog = () => {
    setMessageDialog(false);
  };

  const handleOpenMessageDialog1 = () => {
    setMessageDialog1(true );
  };

  const handleCloseMessageDialog1 = () => {
    setMessageDialog1(false);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <FullScreen handle={handle}>
      <div className={classes.grow}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: shiftBar,
            [classes.IconBarShift]: pin,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: shiftBar,
              })}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className="floatRight">
                {fullscreen ? (
                  <IconButton
                    aria-label="fullscreen"
                    onClick={() => exitFullScreen()}
                    color="inherit"
                  >
                    <FullscreenExitIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="fullscreen"
                    onClick={() => enterFullScreen()}
                    color="inherit"
                  >
                    <FullscreenIcon />
                  </IconButton>
                )}

                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>

                {/* Accounts profile menu */}
                <IconButton
                  onClick={() => {
                    setPopper(true);
                  }}
                  aria-label="Account info"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Popover
                  open={openPopper}
                  onClose={() => setPopper(false)}
                  anchorReference="anchorPosition"
                  anchorPosition={{ top: 70, left: 1500 }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <div className="account-popper">
                    <h4>User Settings</h4>
                    <br />
                    <h4>Logout</h4>
                  </div>
                </Popover>

                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <HelpOutlineIcon />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        {openDrawer ? (
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: !open,
              [classes.drawerClose]: open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: !open,
                [classes.drawerClose]: open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              {/* <IconButton onClick={handleDrawerPin} className="pin-btn">
                <RadioButtonCheckedIcon />
              </IconButton> */}
              {/* {" "} */}
              <IconButton
                className="drawer-btn"
                backgroundColor="purple"
                edge="start"
                color="inherit"
                onClick={handleDrawer}
                onClick={handleDrawerPin}
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="Links">
              <Divider />
              <MyMenu />
            </div>
          </Drawer>
        ) : (
          <span></span>
        )}


<div >

        <div className={classes.user}>
          <div className={classes.icons}>
            <div>
          <PersonIcon className={classes.bgcolor1} fontSize="large"/>
          </div>
          <h1 className={classes.space}>
            User
          </h1>
          </div>
          <div>
          <Button
        variant="contained"
        className={classes.button}
        startIcon={<PersonAddIcon />}
      >
        New
      </Button>
      </div> 
      </div>  

      <div className={classes.master} >

        <p style={{margin: "2px"}}>MasterData</p>
        <span style={{margin: "2px"}}>&gt;</span>
        <p style={{margin: "2px"}}>Users</p>
      </div>

      <div className={classes.bgcolor}>

      <Button color="primary">Configure</Button>
      <div className={classes.crud}>
         <div>
          <IconButton color="secondary" >
           <AddIcon />
          </IconButton>
         </div>
         <div className={classes.crudend}>
           <div>
           <Button variant="contained" color="primary"style={{margin: "2px"}}>
             Save
           </Button>
           </div>
           <div>
           <Button variant="contained" color="primary" style={{margin: "2px"}}>
             Apply
           </Button>
           </div>
           <div>
           <IconButton color="secondary" style={{margin: "4px"}} >
           < CloseIcon />
          </IconButton>
           </div>
         </div>
     </div>

      </div>

      <div>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Properties" {...a11yProps(0)} />
          <Tab label="Columns" {...a11yProps(1)} />
          <Tab label="Filter" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>

         <div className={classes.fields}>
           <div>
        <label>
          Name
        </label>
        <input name="text" type="text" placeholder="View"/>
           </div>
       
       <div style={{marginLeft: "2%"}}>
      <p>Access Permissions</p>

      <RadioGroup aria-label="quiz" name="quiz" value={selectedValue} onChange={handleChanger}>
        <div className={classes.crud}>
          <div style={{margin: "2%"}}>
          <FormControlLabel value="Public" control={<Radio />} label="Public" />
          <p>AnyOne can use the view</p>
          </div>
          <div style={{margin: "2%"}}>
          <FormControlLabel value="Private" control={<Radio />} label="Private" />
          <p>Only i can Use & Edit this view</p>
          </div>
          <div style={{margin: "2%"}}>
          <FormControlLabel value="Private" control={<Radio />} label="Specific Persons" />
          <p>Only show to selected</p>
          </div>
          </div>
        </RadioGroup>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.crud}>
        <div>
        <Button variant="contained" style={{margin: "2px"}} >
          Loginid
        </Button>

        <Button variant="contained" style={{margin: "2px"}} >
          First Name
        </Button>
        <Button variant="contained" style={{margin: "2px"}} >
          Last Name
        </Button>
        <Button variant="contained" style={{margin: "2px"}}>
          Email
        </Button>
        </div>

        <div>
        <IconButton color="secondary" >
           
           <a href="javascript:void(0)" onClick={handleOpenMessageDialog1}><AppsIcon/> </a>

           <Dialog
                  
                    open={openMessageDialog1}
                    onClose={handleCloseMessageDialog1}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">
                      <div className={classes.crudbg}>
                      <div>
                      Add Columns
                      </div>
                      <div>
                      <div className={classes.search}>
                         <div className={classes.searchIcon}>
                           <SearchIcon />
                         </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                             input: classes.inputInput,
                        }}
                       inputProps={{ 'aria-label': 'search' }}
                         />
                      </div>

                      </div>
                      </div>
                      </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        <div className={classes.crud}>
                        <div>
                          
                      All Columns 
                      </div> 
                      <div>
                        4items
                      </div>
                      </div>
                      </DialogContentText>
                      
                      <TableContainer component={Paper}>
                       <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                       <TableRow>
                        <TableCell><Checkbox
                               checked={checked}
                              onChange={handleChangec}
                             inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></TableCell>
                        <TableCell align="right">Fields</TableCell>
                        <TableCell align="right">Data type</TableCell>
                        <TableCell align="right">Table</TableCell>
                        
                       </TableRow>
                      </TableHead>
                   <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                      

                      
                    </DialogContent>
                  
                  </Dialog>
          </IconButton>
           </div>
           </div>


      </TabPanel>
      <TabPanel value={value} index={2}>
      <Button variant="contained" color="primary" >
      <a href="javascript:void(0)" onClick={handleOpenMessageDialog1}>Filter </a>
      <Dialog
                  
                    open={openMessageDialog1}
                    onClose={handleCloseMessageDialog1}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">
                      <div className={classes.crudbg}>
                      <div>
                      Add Columns
                      </div>
                      <div>
                      <div className={classes.search}>
                         <div className={classes.searchIcon}>
                           <SearchIcon />
                         </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                             input: classes.inputInput,
                        }}
                       inputProps={{ 'aria-label': 'search' }}
                         />
                      </div>

                      </div>
                      </div>
                      </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        <div className={classes.crud}>
                        <div>
                          
                      All Columns 
                      </div> 
                      <div>
                        4items
                      </div>
                      </div>
                      </DialogContentText>
                      
                      <TableContainer component={Paper}>
                       <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                       <TableRow>
                        <TableCell><Checkbox
                               checked={checked}
                              onChange={handleChangec}
                             inputProps={{ 'aria-label': 'primary checkbox' }}
                        /></TableCell>
                        <TableCell align="right">Fields</TableCell>
                        <TableCell align="right">Data type</TableCell>
                        <TableCell align="right">Table</TableCell>
                        
                       </TableRow>
                      </TableHead>
                   <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                      

                      
                    </DialogContent>
                  
                  </Dialog>
        </Button>
      </TabPanel>
 
      </div>


      <div className={classes.crud}>

        <div className={classes.grow}>
        <FormControl className={classes.tfield}   >
        <InputLabel id="demo-simple-select-label" >Show Entries</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>5</MenuItem>
          <MenuItem value={20}>10</MenuItem>
          <MenuItem value={30}>15</MenuItem>
        </Select>
      </FormControl>
      
      &nbsp;
      <a href="javascript:void(0)" onClick={handleOpenMessageDialog}><CloudDownloadIcon style={{marginTop: "20px"}} /> </a>

                   <Dialog
                  
                    open={openMessageDialog}
                    onClose={handleCloseMessageDialog}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">Export</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                      Choose an export format for report
                      </DialogContentText>
                      
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Excel&nbsp;(.xlx) " />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="CSV&nbsp;(.csv)" />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="XML&nbsp;(.xml)" />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="PDF&nbsp;(.pdf)" />
                      

                      
                    </DialogContent>
                  
                  </Dialog>
      </div>

      <div  className={classes.grow}>
        <div className={classes.fields}>
      
      <ReactPaginate
            // previousLabel={"previous"}
            // nextLabel={"next"}
            //breakLabel={<a href="javascript:void(0)" className="page-link" >...</a>}
            //breakClassName={"break-me"}
            // pageCount={pageCount}
            //pageCount={pageCount}
            //marginPagesDisplayed={2}
            //pageRangeDisplayed={2}
            //onPageChange={onPageChange}
            //containerClassName={"pagination"}

            //pageClassName={"page-item"}
            //pageLinkClassName={"page-link"}
            // subContainerClassName={"pages pagination"}
            //activeClassName={"active"}
            //previousClassName={"page-item"}
            //previousLinkClassName={"page-link"}
            //nextClassName={"page-item"}
            //nextLinkClassName={"page-link"}
          />
      </div>
      </div>

      <div  >
      <div className={classes.search}>
           <div className={classes.searchIcon}>
              <SearchIcon  />
              </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
      </div>

  </div>


  <div className={classes.center}>
  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >LoginId</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>

  </div>

          </div>
    </FullScreen>
  );
}
