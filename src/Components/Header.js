import React from 'react';
// import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../custom.css';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      height: "73px",
      boxShadow:"none",
    },
  });


const Header = () => {
  const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <React.Fragment>
         <div className='container-fluid'>
             <div className='row'>
                 <div className='col-md-12'>
                     <div className='row'>
                         <div className='col-md-12'>
                             <div className='row'>
                                 <div className='col-md-3'>
                                     <img src={'https://1000logos.net/wp-content/uploads/2017/03/Nike-SB-logo.jpg'} className="img-responsive w-39" alt="main logo" />
                                 </div>
                                 <div className='col-md-6'>
                                 <Paper className={classes.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        centered
                                    >
                                        <Tab label="ALL" />
                                        <Tab label="IN STOCK" />
                                        <Tab label="UPCOMING" />
                                        <Tab label="NEW" />
                                        <Tab label="LATEST" />
                                    </Tabs>
                                 </Paper>
                                 </div>
                                 <div className='col-md-3 text-right mt-3'>
                                  <img src={'https://png.pngitem.com/pimgs/s/244-2441597_nike-shoes-for-men-transparent-hd-png-download.png'} className="img-responsive w-40" alt="Header-logo-here" style={{height:'50px'}} />
                                  <img src={'https://www.nicepng.com/png/detail/78-789983_nike-running-shoes-png-download-adidas-powerlift-3.png'} className="img-responsive w-40" alt="Header-logo-here" style={{height:'50px'}} />
                                  <img src={'https://www.pinclipart.com/picdir/big/142-1425977_nike-red-shoes-fabulous-nike-zoom-tra8n-command.png'} className="img-responsive w-40" alt="Header-logo-here" style={{height:'50px'}} />
                                  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnKHZ3qLYH77vr6i_TEYFVTmoBaVPPMHQVM6XT_phIaBJKnNaE56J4hvbr69alNb2cZE&usqp=CAU'} className="img-responsive w-20 mt-2" alt="Header-logo-here" style={{height:'38px'}} />
                                 </div>
                             </div>
                         </div>
                         <div className='col-md-12'>
                             <hr className="m-0"/>
                         </div>
                     </div>
                 </div>
             </div>
           </div>
      </React.Fragment>
    )
}

export default Header;