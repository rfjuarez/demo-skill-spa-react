import {shallow} from 'enzyme';
import WeatherIcon from './WeatherIcon';

describe('WeatherIcon', () => {
    it("should render correctly", () => {
        const component =
            shallow(WeatherIcon({iconCode: "01d"}));
        expect(component).toMatchSnapshot();
    });
    it("should render correctly thunderstorms.svg icon", () => {
        const component =
            shallow(WeatherIcon({iconCode: "11d"}));

        expect(component.find("img").prop("src")).toEqual("thunderstorms.svg");
    });
    it("should render default, first, icon when not found iconCode", () => {
        const component =
            shallow(WeatherIcon({iconCode: "-"}));
        expect(component.find("img").prop("src")).toEqual("clear-day.svg");
    });
});