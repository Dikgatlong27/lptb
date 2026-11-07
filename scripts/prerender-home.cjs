process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');

const sourceDirectory = path.resolve(__dirname, '../src') + path.sep;

// Compile only our source for Node. Dependencies keep their normal module loader.
function loadSource(module, filename) {
  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    babelrc: false,
    configFile: false,
    presets: [
      [require.resolve('@babel/preset-env'), { targets: { node: 'current' } }],
      [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
    ],
  });
  module._compile(code, filename);
}

function renderHomepage() {
  const originalJavaScriptLoader = require.extensions['.js'];
  const originalJsxLoader = require.extensions['.jsx'];
  const originalCssLoader = require.extensions['.css'];
  require.extensions['.js'] = (module, filename) => {
    if (filename.startsWith(sourceDirectory)) return loadSource(module, filename);
    return originalJavaScriptLoader(module, filename);
  };
  require.extensions['.jsx'] = loadSource;
  require.extensions['.css'] = () => {};

  try {
    const App = require('../src/App').default;
    const { AuthProvider } = require('../src/AuthContext');
    return renderToString(
      React.createElement(
        StaticRouter,
        { location: '/' },
        React.createElement(AuthProvider, null, React.createElement(App)),
      ),
    );
  } finally {
    require.extensions['.js'] = originalJavaScriptLoader;
    if (originalJsxLoader) require.extensions['.jsx'] = originalJsxLoader;
    else delete require.extensions['.jsx'];
    if (originalCssLoader) require.extensions['.css'] = originalCssLoader;
    else delete require.extensions['.css'];
  }
}

module.exports = { renderHomepage };
