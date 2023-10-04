#!/bin/bash

YELLOW='\033[1;33m'
GREEN='\033[1;32m'
LCYAN='\033[1;36m'
NC='\033[0m' # No Color

echo -e "${GREEN}Initializing Style Formatting Configuration... ${NC}"

echo -e "1/2 ${LCYAN}Installing prettier eslint-config-prettier eslint-plugin-prettier in devDependencies ... ${NC}"
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

echo -e "2/2 ${YELLOW}Creating .eslintrc file... ${NC}"
touch .eslintrc.json  

echo '{
  "extends": ["react-app", "prettier"],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "printWidth": 100
    }],
    "no-var": "error"
  },
  "plugins": ["prettier"]
}' >> .eslintrc.json

echo -e "${GREEN}Done! ${NC}"
echo -e "Please make sure to add the 'Prettier - Code formatter' by Ebsen Petersen, extension in VS Code. The Prettier extension will format files, while eslint will run Prettier for us."
echo -e "Remember to update your VS Code user settings.  The VS Code user settings are here: https://gist.github.com/hoosierhuy/0768a84356ff18dbe99852cb65da2b46"
echo -e "This bash script lives here: https://gist.github.com/hoosierhuy/76cdec475a30b2877bdb4f6fcb3f1916"
echo -e "Good luck. -Huy"