# MobileConsoleLite
A console emulator for debugging on mobile and tablet

## !!!DOC in progress

## Installation

```bash
$ npm install debug
```

## Usage

`MobileConsoleLite` create a console DOM window that catch the `console.log` and window error for helping you on mobile and tablet device debugging

```js
import MCL from "mobileconsolelite"

new MCL(document.querySelector("#app"))
```

---

## TODO
- [x] eval des commandes
- [x] toggle de la console window
- [x] resize de la console window
- [x] drag de la console window
- [x] init class on hash or query param
- [ ] css bundles into one single file
- [ ] or test css in js
- [ ] doc
- [ ] TU
- [ ] TS