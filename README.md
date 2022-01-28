# music-toolbox - A collection of tools for the practicing musician
## Development
Install development and run dependencies with:

```shell
$ npm install
```

Run the project locally in development mode with:

```shell
$ npm run dev

  vite v2.7.13 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 134ms.
```

Run static analysis tools with:

```shell
$ npm run lint

> music-toolbox@1.0.0 lint
> eslint --ext .js,.vue src
```

## Build
Run the project locally in preview mode with:

```shell
$ npm run preview

> music-toolbox@1.0.0 preview
> vite preview

  > Local: http://localhost:5000/
  > Network: use `--host` to expose
```

Generate an application bundle with:

```shell
$ npm run build

> music-toolbox@1.0.0 build
> vite build

vite v2.7.13 building for production...
✓ 111 modules transformed.
dist/index.html                  0.48 KiB
dist/assets/index.e3d20e28.js    8.63 KiB / gzip: 2.97 KiB
dist/assets/index.75f34fd1.css   200.20 KiB / gzip: 26.72 KiB
dist/assets/vendor.8e9a0809.js   655.63 KiB / gzip: 219.59 KiB
```


## Acknowledgements
The toolbox runs thanks to the following libraries:

- the [VexFlow](https://www.vexflow.com/) music engraving library;
- the [Vue.js](https://vuejs.org/) front-end framework;
- the [Bulma](https://bulma.io/) CSS framework;
- the [Vite](https://vitejs.dev/) front-end tooling.
