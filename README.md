# Maze TV API test project for next.js

This little test project is just for learning purpposes and to try some techniques.

## Commands

Some commands for the work with next.js

### General

To avoid installing the modules globally, you should add a .npmrc in you home folder and add the following line. This installs the modules into the folder defined by the prefix.
```shell script
prefix=~/.npm
```

Add the new folder to the path in your shell (.zshrc, .bashrc, .profile)
```shell script
export PATH="$HOME/.npm/bin:$PATH"
```

Start a completely new project with initialization:
```shell script
npm init -y
```

Upgrade the npm:
```shell script
npm install -g npm
```

### Project commands

Minimum for the app
```shell script
npm install --save react react-dom next
```

Fetching
```shell script
npm install --save isomorphic-unfetch
```

SASS Support
```shell script
npm install --save sass
```

Start the project in dev mode:
```shell script
npm run dev
```
