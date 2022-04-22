import houseRoute from './house.routes.js' 
import {catchUnregisteredUrl,catchGlobalError} from '../middleware/errorHandling.js'
export default (app)=>{
app.use("/house",houseRoute)
// unregisterd url err
app.all("*",catchUnregisteredUrl)

// error handling
app.use(catchGlobalError)
}

