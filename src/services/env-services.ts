import {appServicesMock} from "./mocks";
import {AppService, appServicesImpl} from "./app-services";

const createAppService= ():AppService =>{
    if(process.env.REACT_APP_WITH_MOCKS==="true"){
        console.log("Load application with mock services");
        return appServicesMock;
    }
    return appServicesImpl;
}

export const appServices:AppService = createAppService();