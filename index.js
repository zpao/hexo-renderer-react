var React = require('react');
var ReactDOMServer = require('react-dom/server');
require('babel/register')({
  extensions: ['.jsx']
});

hexo.extend.renderer.register('jsx', 'html', function(data, options) {
  var markup = '<!DOCTYPE html>';
  // TODO: try/catch
  var Component = require(data.path);
  markup +=
    ReactDOMServer.renderToStaticMarkup(React.createElement(Component, options));
  // TODO: beautify?
  // TODO: clear require cache? maybe use options.env to determine if we should
  //       this would make the server work and allow refreshes
  return markup;
});
