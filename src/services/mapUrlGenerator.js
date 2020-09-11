import {baseURL,versionNumber,ext,key,language} from '../config/enviroment/map-config'

const mapUrlGenerator = (query)=>{
    let url=`${baseURL}/search/${versionNumber}/search/${query}.${ext}?key=${key}&language=${language}`;
    return url;
    
}

export default mapUrlGenerator;