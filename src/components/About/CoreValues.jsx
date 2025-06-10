import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

const listData = [
    {
        heading : "Customer-Centric Approach",
        description : "We design solutions around your goals"
    },
    {
        heading : "Innovation & Excellence",
        description : "Our machines are built to outlast trends and deliver precision"
    },
    {
        heading : "Quality & Reliability",
        description : "Consistency you can trust in every cycle and shift"
    },
    {
        heading : "Sustainability & Responsibility",
        description : "Eco-friendly processes and ethical manufacturing"
    },
    {
        heading : "Integrity & Transparency",
        description : "Doing business the right way, every step of the way"
    },
]

const CoreValues = () => {
  return (
        <Box sx={{background :"#E7F4FF" ,display:'grid' ,placeContent:'center', padding : {xs:"30px" ,md:"60px"}, gap:"30px" , marginTop :{xs:"20px" ,md:"20px"}}}>
            <Box sx={{textAlign:'center'}}>
                <Typography sx={{fontSize :{xs:"20px" ,md:"25px"} , color:"#606872"}}>Our Core Values</Typography>
                <Typography sx={{color :"#243E60", fontSize :{xs:"20px" ,md:"25px"}}}>Buit on Integrity, Sustained by Excellence</Typography>
            </Box>
            <Box 
              sx={{
                '& li::marker': {
                    color: '#1955A6', // change this to any MUI color or hex
                  }
              }}
            >

                {
                    listData.map((item)=>{
                      return  <Typography component={"li"} sx={{fontSize:{xs:"16px" ,md:"18px"} , color : "#606872"}}><span style={{color :"#1955A6"}}>{item.heading}:</span> {item.description}</Typography> 
                    })
                }
            </Box>
        </Box>
  )
}

export default CoreValues