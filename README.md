# MobileConsoleLite
[![CircleCI](https://circleci.com/gh/Julien-Amblard/mobileConsoleLite.svg?style=svg)](https://circleci.com/gh/Julien-Amblard/mobileConsoleLite)
Console emulator help you for debugging on mobile and tablet device.
`MobileConsoleLite` create a DOM console catching the console.log and window error.

<br />

## Installation

```bash
$ npm install mobile-console-lite
//or
$ yarn add mobile-console-lite
```
<br/>

## Importing
*We recommand calling the script at the very top of the `<head>` of your page to be sure catching every error/log.*
<br/>
```js
import MCL from "mobile-console-lite"
new MCL()
```
##### CDN
```html
<script type="text/javascript" src="path/to/dist/mcl.js"></script>
<script type="text/javascript">
	new MCL()
</script>

```







##### Quick use
```js
import MCL from "mobile-console-lite"
new MCL()
```
Will create the console at the end of body tag.
  
*You also can specify the console container by passing a node selector in the first argument.*
**example :**
```js
new MCL(document.querySelector("#app"))
```
<br />


### customising
you can pass an `options` object for customising the console
```js
import MCL from "mobile-console-lite"
const options = {
	//some options
}
new MCL(document.querySelector("#app"), options)
```
## options
<br />

##### You can set conditions for launching the console.

**hash**
will start the console if the hash `#name` is present in *url*
```js
new MCL(document.querySelector("#app"), {
	initOn: {
		hash: "name"
	}
})
//will start on https://www.example.com/#name
```

<br />
<br />

**query**
will start the console if the hash `#name` is present in *url*
```js
new MCL(document.querySelector("#app"), {
	initOn: {
		query: "name"
	}
})
//will start on https://www.example.com/?name=value
```
<br />
<br />
<br />

##### You also can set the default display of console


**minimize** : *boolean*
*default : **`false`***

```js
new MCL(document.querySelector("#app"), {
	display: {
		minimize: true
	}
})
```
by default the console will be minimize

<br />
<br />

**popup** : *boolean*
*default : **`false`***

```js
new MCL(document.querySelector("#app"), {
	display: {
		popup: true
	}
})
```

by default the console will be popuped













---



## TODO
- [x] eval des commandes
- [x] toggle de la console window
- [x] resize de la console window
- [x] drag de la console window
- [x] init class on hash or query param
- [ ] add style param for customising console
- [ ] customising console catcher (log/error/warn)
- [ ] catching console.warn
- [ ] catching console.time
- [ ] catching console.table
- [ ] css bundles into one single file
- [ ] or test css in js
- [x] doc
- [ ] TU
- [ ] TS
