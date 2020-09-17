import {_createAppService, _strToBool} from "./env-services";
import {appServicesMock} from "./mocks";
import {appServicesImpl} from "./app-services";

describe('REACT_APP_WITH_MOCKS valid values', () => {
    it('should return true when setting true text', () => {
        expect(_strToBool("true"))
            .toBeTruthy();
    });
    it('should return true when setting True text', () => {
        expect(_strToBool("True"))
            .toBeTruthy();
    });
    it('should return true when setting TRUE text', () => {
        expect(_strToBool("TRUE"))
            .toBeTruthy();
    });
    it('should return false when setting any other text value', () => {
        expect(_strToBool("tRue"))
            .toBeFalsy();
    });
    it('should return false when value is undefined', () => {
        expect(_strToBool(undefined))
            .toBeFalsy();
    });
});

describe('Service mocked or real impl', () => {
    it('should return mocked service when received true', () => {
        expect(_createAppService(true)).toEqual(appServicesMock);
    });
    it('should return real impl service when received false', () => {
        expect(_createAppService(false)).toEqual(appServicesImpl);
    });
});