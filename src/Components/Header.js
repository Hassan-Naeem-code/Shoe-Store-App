import React from 'react';
// import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useDispatch} from 'react-redux';
import {checkAvailability} from '../Store/action/auth';
import '../custom.css';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      height: "73px",
      boxShadow:"none",
    },
  });


const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(event,'jcjsdvcjhv');
    };
    const getValue = (value) =>{
      if(value == 'ALL'){
        dispatch(checkAvailability(value));
      }else if(value == 'STOCK'){
        dispatch(checkAvailability(value))
      }else if(value == 'UPCOMING'){
        dispatch(checkAvailability(value))
      }else if(value == 'NEW'){
        dispatch(checkAvailability(value))
      }else if(value == 'LATEST'){
        dispatch(checkAvailability(value))
      }
    }
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
                                 {
                                   props.hide && props.hide == true ? null:(
                                    <Paper className={classes.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        centered
                                    >
                                        <Tab label="ALL" onClick={()=>{getValue("ALL")}} />
                                        <Tab label="IN STOCK" onClick={()=>{getValue("STOCK")}}  />
                                        <Tab label="UPCOMING" onClick={()=>{getValue("UPCOMING")}}  />
                                        <Tab label="NEW" onClick={()=>{getValue("NEW")}}  />
                                        <Tab label="LATEST" onClick={()=>{getValue("LATEST")}}  />
                                    </Tabs>
                                 </Paper>
                                   )
                                 }
                                 
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