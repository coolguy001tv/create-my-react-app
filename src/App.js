import * as React from 'react';
import './App.css';
import Home from './page/Home';
import {Provider, observer} from 'mobx-react';
import {configure, action, observable} from 'mobx';
import RootStore from './store/RootStore';

configure({enforceActions: true})

@observer
class App extends React.Component {
    @observable test = 1;
    componentDidMount() {
        setTimeout(action(() => {
            this.test = 2;
        }), 1000)
    }


    render() {
        return (
            <Provider rootStore={new RootStore()}>
                <Home/>
            </Provider>
        );
    }
}

export default App;
