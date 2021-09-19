import axios from 'axios';
const KEY = 'AIzaSyDGaELRlhoH2TBYDCT2JBFV33yk2_3QQ_4';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
params : {
    part:'snippet',
    type: 'video',
    maxResults: 5,
    key:KEY
}
});
