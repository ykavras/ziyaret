module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "indent": ["error", 2, {
        "ignoredNodes": ["JSXElement"]
      }],
      "no-tabs": 0,
      "react/destructuring-assignment": ['never'],
      "react/prefer-stateless-function": ["ignorePureComponents"],
      "react/prop-types": 1,
      "import/no-unresolved": 0,
      "no-underscore-dangle": 0,
      "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
      "import/no-named-default": 0,
      "import/prefer-default-export": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "react/forbid-prop-types": 0,
      "no-param-reassign": 0
    }
  };
  