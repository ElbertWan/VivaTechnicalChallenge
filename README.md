# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Project Info

Assumptions/Issues:

- Could not access dev mode in figma "without being a member of the team" so accessing css was harder and more time consuming
- Hover states for buttons were not included in figma file
- Close button on top right has no hover state by default (inconsistent) so default hover state was added for all buttons
- On summary page, in prototype and figma, was not given flow for when X button of coupon is clicked, thus an 'apply voucher' button was added with a disable feature for the green 'Apply' button for user to reapply new voucher.
- In the voucher selection page, there is no error validation, thus one was added for the two state:
  - if empty, error thrown
  - if voucher doesn't exist, error throw
- The project uses mobx as a state framework, and calculations of final price are included based of percentage or value deduction. It can be expanded to fetch a list of voucher coupons and/or items/memberships.

## Side note

- Realistically, mobile designs should have been given. It is time consuming for a developer to 'imagine' what the designer wants for the mobile look.
- These screens would also be built off a design system, negating the need to code in so many different font sizes.
