module.exports = {
    "extends": "airbnb-base",
    "root": true,
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "rules": {
      // windows linebreaks when not in production environment
      "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
  }
};