import {sidebarReducer} from "./sidebar-reducer";

import {SidebarActionType} from "./action-types"
import expect from 'expect';

describe('Sidebar reducer', () => {
    it('should return false when reduce a close message', () => {
        expect(sidebarReducer(undefined, {type: SidebarActionType.close})).toEqual({show: false});
    });
    it('should return true when reduce a open message', () => {
        expect(sidebarReducer(undefined, {type: SidebarActionType.open})).toEqual({show: true});
    });
});