
import React ,{useState} from 'react';


import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import "./Home.css";
import Card from "./Card";

import Navbar from "./Navbar"
import Table from "./Table";



function Hero({handleLogout}) {

    
    return (
       
            
            <div  id="home">
        <div>

                    <Navbar/>

        </div>
        <div id="bodyy">
                    <img src="https://store.visualai.io/assets/angular2/controlcenter/demo/assets/images/logo.png" width="170" height="42"></img>
                    <div className="cards">
                    <Card rate='1.18k' 
                    description='Anamolies Found'  />
                     
                    
                     <Card rate='566.85k' 
                    description='Modules Inspected'  />
                     
                    
                     <Card rate='158MV' 
                    description='MV Inspected'  />
                     
                     <Card rate='0' 
                    description='Annual Loss'  />
                     
                     <Card rate='0Wh' 
                    description='Extrapolated '  />
                     
                    
                   
                     <Card rate='0.00%' 
                    description=''  />


                    
                   

                    </div>
                    <div className="mapandtable">
                    <Table/>
                   
                    </div>



                   
                        
                    
            
        </div>
        </div>

   
    )
}


        



export default Hero



