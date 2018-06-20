/**
 * Created by coolguy on 2017/11/10.
 */

import UIStore from './UIStore';
export  default class RootStore {
    constructor() {
        this.uiStore = new UIStore(this);
    }
}
