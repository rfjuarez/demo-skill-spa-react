import {appServicesMock} from "./mocks";
import {AppService, appServicesImpl} from "./app-services";

export const _createAppService = (withMock: boolean) => {
    return withMock ? appServicesMock : appServicesImpl;
}

export const _strToBool = (v: string | undefined) => {
    return (v === "true" || v === "True" || v === "TRUE");
}
export const appServices: AppService = _createAppService(_strToBool(process.env.REACT_APP_WITH_MOCKS));