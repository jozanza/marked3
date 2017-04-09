<template>
  <div id="app">
    <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
    <pre><code v-html="result"></code></pre>
  </div>
</template>

<script>
import MMark from '../src'

const mmark = new MMark()

mmark.use({
  lexer(src) {
    let cap
    if (cap = /^\${3}(.*)\n([\s\S]+)\n\${3}/m.exec(src)) {
      return {
        src: src.substring(cap[0].length),
        token: {
          type: 'run-code',
          lang: cap[1],
          value: cap[2]
        }
      }
    }
  },
  parse(token) {
    if (token.type === 'run-code') {
      return token.value
    }
  }
})

export default {
  data() {
    return { text: '' }
  },
  computed: {
    result() {
      return mmark.render(this.text)
    }
  }
}
</script>
