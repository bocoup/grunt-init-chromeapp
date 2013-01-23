# grunt-init-chromeapp

Scaffold a [Google Chrome packaged app](https://developer.chrome.com/stable/apps/about_apps.html) with [grunt-init][]

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation

* Install `grunt-cli` and `grunt-init` latest versions. If `grunt` is already globally installed, uninstall it (`npm uninstall -g grunt`). You only should have `grunt-cli`, which uses the version of `grunt` specified in a project's `package.json`.
* `npm install -g grunt-init@0.2.0rc7`
* `npm install -g grunt-cli`

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:	

```
git clone git@github.com:bocoup/grunt-init-chromeapp.git ~/.grunt-init/chromeapp
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init chromeapp
```

Once the project has been scaffolded, you need to install the dependencies

```
npm install
```

## Workflow

### Default task: `grunt`

The default `grunt` task lints project JavaScript with JSHint.

### Watching changes: `grunt watch`

Automatically run specified tasks when files change


