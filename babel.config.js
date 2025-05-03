module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // transform optional chaining & nullish coalescing
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        // transform template literals
        '@babel/plugin-transform-template-literals',
  
        // and now explicitly set "loose" on the three private/class-property plugins
        ['@babel/plugin-transform-class-properties',       { loose: true }],
        ['@babel/plugin-transform-private-methods',        { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      ],
    };
  };
  