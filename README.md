# mmark

[![NPM version](https://img.shields.io/npm/v/mmark.svg?style=flat)](https://npmjs.com/package/mmark) [![NPM downloads](https://img.shields.io/npm/dm/mmark.svg?style=flat)](https://npmjs.com/package/mmark) [![Build Status](https://img.shields.io/circleci/project/egoist/mmark/master.svg?style=flat)](https://circleci.com/gh/egoist/mmark) [![codecov](https://codecov.io/gh/egoist/mmark/branch/master/graph/badge.svg)](https://codecov.io/gh/egoist/mmark)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> A modern [marked](https://github.com/chjj/marked)

**Why?**

- Actively maintained
- Rewrote in ES6 and bundled with Rollup for smaller size (15KB)
- Support more GFM extras like [task lists](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)

## Install

```bash
yarn add mmark
```

You can find a CDN version at https://unpkg.com/mmark/

## Usage

```js
const MMark = require('mmark')

const mmark = new MMark()

const html = mmark.render(`## hello world

A modern **markdown** parser!

- [ ] todo
- [x] done
`)
```

You can preview the HTML result here: https://egoistian.com/md2html/ ([source](https://github.com/egoist/md2html))

## API

### new MMark([options])

#### options

All marked [options](https://github.com/chjj/marked#options-1) plus:

##### taskLists

Type: `boolean`<br>
Default: `true`

Enable GFM task lists, this will only work if `options.gfm` is `true`.

### mmark.render(src)

#### src

Type: `string`<br>
Required: `true`

Input markdown string.

### mmark.use(plugin)

Use an mmark plugin.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**mmark** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/mmark/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
