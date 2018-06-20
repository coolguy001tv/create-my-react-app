/**
 * Created by coolguy on 2018/6/20.
 */
const rewireMobX = require('react-app-rewire-mobx');
const rewireLess = require('react-app-rewire-less');
const rewireTypescript = require('react-app-rewire-typescript');
const { compose } = require('react-app-rewired');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const rewires = compose(
        rewireTypescript,
        rewireLess,
        rewireMobX
);
    // do custom config
    // ...
    return rewires(config, env);
}