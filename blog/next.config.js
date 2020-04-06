const withCss = require('@zeit/next-css')
if(require !== "undefined"){
    require.extensions['css'] = file=>{}
}

module.exports = withCss({})
