import {AppState} from '../AppState'
import {nasaApi} from './AxiosService'
class PictureService {
    async searchPictures(query){
        const res = await nasaApi.get('apod?api_key=FjPjrH8NRDPyFDRQYEeMMw1G5OZpgjHmkromdroL&date='+ query)
        AppState.pictures = res.data.url
        console.log(res.data)
    }
}
export const pictureService = new PictureService()