# bun-sendmail2

node で mail を送るテスト。

[bun-sendmail1](https://github.com/heiwa4126/bun-sendmail1)
で
[nodemailer](https://www.npmjs.com/package/nodemailer)
を使ったら、高機能で巨大サイズだったんで
[emailjs](https://www.npmjs.com/package/emailjs)
を試してみる。

## 動かし方

```sh
bun ci
bun run ex1
```

## バンドルサイズ

```console
$ bun run build
$ bun build ./src/index.ts --outfile ./dist/index.js --minify --target node
Bundled 10 modules in 126ms

  index.js  23.43 KB  (entry point)
```

nodemailer の 1/10 ぐらい。
