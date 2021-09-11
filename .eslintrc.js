module.exports = {
    root: true,
    env: {
      // this section will be used to determine which APIs are available to us
      // (i.e are we running in a browser environment or a node.js env)
      node: true,
      browser: true
    },
    parserOptions: {
    //   parser: "babel-eslint",
      // specifying a module sourcetype prevent eslint from marking import statements as errors
      sourceType: "module"
    },

    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
        'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability 
      ],
    rules: {
      // we should always disable console logs and debugging in production
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
  };
