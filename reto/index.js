import fetch from "node-fetch";
import algoritmoBeta from './beta.js'
import algoritmoAlfa from './alfa.js'
import algoritmoDelta from './delta.js'



const SPACEX_API = 'https://api.spacexdata.com/v3/launches';

algoritmoAlfa('FalconSAT-2', SPACEX_API).then(
  res => {
    console.log(res);
  }
); // true
algoritmoAlfa('FalconSAT-3', SPACEX_API).then(
  res => {
    console.log(res);
  }
); // false