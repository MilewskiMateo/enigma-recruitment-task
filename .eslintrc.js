module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier"
  ],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".tsx"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never"
      }
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowTernary: true
      }
    ],
    "react/prop-types": "off",
    "import/no-cycle": "off",
    "no-shadow": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-key": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-max-props-per-line": [1, { "when": "multiline" }],
    "no-extra-semi": "warn",
    "no-irregular-whitespace": "warn",
    "no-empty-pattern": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-indent-props": "warn",
    "react/jsx-indent": "warn",
    "react/jsx-tag-spacing": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-closing-tag-location": "warn",
    "max-len": ["warn", { "code": 120 }],
    "import/order": "warn",
    "arrow-parens": "warn",
    "no-multiple-empty-lines": "warn",
    "no-empty-function:": "off",
    "@typescript-eslint/no-empty-function": "off",
    "comma-dangle": "warn",
    "indent": "off", // done by prettier
    "semi": "warn",
    "spaced-comment": "warn",
    "no-trailing-spaces": "warn",
    "camelcase": "off"
  },
  settings: {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  ignorePatterns: [
    "node_modules",
    "**/*.stories.tsx",
    "**/.eslintrc.js",
    "craco.config.js",
  ]
}
