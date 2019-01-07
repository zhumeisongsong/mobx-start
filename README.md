# mobx-start

## 2019.01.07
Add eslint-config-airbnb

https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

Default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires eslint, eslint-plugin-import, eslint-plugin-react, and eslint-plugin-jsx-a11y. 

****1.Install the correct versions of each package, which are listed by the command:****

    npm info "eslint-config-airbnb@latest" peerDependencies

If using npm 5+, use this shortcut

    npx install-peerdeps --dev eslint-config-airbnb
    
****2.Add "extends": "airbnb" to your .eslintrc****