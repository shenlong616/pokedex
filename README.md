# Pokédex

## Screenshot

![](./README/img/screenshots/3.png)
![](./README/img/screenshots/4.png)
![](./README/img/screenshots/5.png)

## To do

- [x] Infinite page scroll
- [ ] Pagination
- [x] Render only when `state1.index` is less than or equal to [`{count:{}}`](https://pokeapi.co/api/v2/pokemon/)
- [ ] Data `state1.render` is too large => causing `lag` => learn about [`react-window`](https://www.npmjs.com/package/react-window)
- [ ] `Search` component
- [ ] `Filter` component
- [x] Use [`swr`](https://swr.vercel.app/) instead of [`pokedex-promise-v2`](https://github.com/PokeAPI/pokedex-promise-v2)
- [ ] Separate `components`
- [ ] When using [`Image`](https://nextjs.org/docs/api-reference/next/image) component => dont use props `height` and `weight`
- [x] `Flex` display
- [x] `Grid` display
- [ ] Use [`useContext`](https://codesandbox.io/s/react-context-hq0sm8) to transport `data` between `components`
- [ ] Offline [`data`](https://github.com/PokeAPI/pokeapi) 🤡
- [ ] [`Dynamic`](https://nextjs.org/docs/routing/dynamic-routes) routes

## Tasks

- [x] Limit creation of unnecessary html tags `div, span,...`
- [x] When using `swr` there is no need for `async function(await function() {})`
- [x] Buộc dùng [`concat`](https://github.com/shenlong616/pokedex/blob/c9c3a88b81f99cd0a2371392a845f5a6a0f8ff76/components/Pokedex/index.jsx#L53) method thay cho toán tử `spread` => Vì nhanh hơn chứ cái loz j nữa => [tài liệu](https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat)
- [x] Update `Next.js` version from 12 to 13

## Known bugs 🐛

### Mobile

- [ ] Component `Card` has no `background color`
- [ ] Component `Dialog` and `NoiseTexture` not standard 😣

## Tree file

### Main files

```text
📦pokedex
 ┣ pokedex.config.js // Basic configuration! (style, animation,...)
 ┗ ...

📂components
 ┣ 📂Layout
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ index.jsx
 ┃ ┗ Slideout.jsx
 ┣ 📂Pokedex
 ┃ ┣ 📂Dialog
 ┃ ┃ ┣ CloseText.jsx
 ┃ ┃ ┣ Description.jsx
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ Legend.jsx
 ┃ ┣ Card.jsx
 ┃ ┣ index.jsx
 ┃ ┗ ProgressBar.jsx
 ┣ CodeMirror.jsx
 ┗ NoiseTexture.jsx

📂hooks
 ┗ useSWR.js

📂pages
 ┣ index.jsx
 ┣ _app.jsx
 ┗ _document.jsx

📂styles
 ┣ globals.scss
 ┣ _codemirror.scss
 ┗ _tailwindcss.scss
```

## Install command

```text
 _______________
/ $ mpm i       \
\ $ npm run dev /
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
