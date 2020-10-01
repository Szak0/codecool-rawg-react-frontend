import React, { useEffect, useState } from "react";
import windowsLogo from '../static/windows.svg';
import linux from '../static/linux.svg';
import mac from '../static/mac.svg';
import ps from '../static/ps.svg';
import xbox from '../static/xbox.svg';

const Platforms = props => {
    let platformList = [];
    let cuttedPlatformList = [];
    let platformPics = [];

    const convertTextToPic = () => {
        platformList.map((text) => {
            if (text.startsWith("PC")) {
                platformPics.push(windowsLogo);
            } else if (text.startsWith("Play")){
                platformPics.push(ps) ;
            }else if (text.startsWith("Xbox")){
                platformPics.push(xbox);
            }  else if (text.startsWith("mac") || text.startsWith("iOS")){
                platformPics.push(mac);
            } else if (text.startsWith("mac") || text.startsWith("iOS")){
                platformPics.push(linux);
            }
        })
    }

    const iterateOnPlatforms =()=>{
        if (props.platforms !== null && props.platforms !== undefined) {
            props.platforms.map((obj) => {
                if (!cuttedPlatformList.includes(obj.platform.name.substring(0,3))) {
                    cuttedPlatformList += obj.platform.name.substring(0,3);
                    platformList.push(obj.platform.name)
                }
            })
            convertTextToPic();
        }
        
    }

    iterateOnPlatforms();
    return (
        <div>
            {platformPics.map((pics) => (
                <img src={pics} alt="" style={{width:"14px", marginLeft: "4px" }}/>
            ))}
        </div>
    )
}

export default Platforms;