# Pokédex

## Screenshot

![](./README/img/0.png)

## To do

- [x] Infinite scroll.
- [ ] Somtimes duplicate key prop.
- [ ] Render only when [`state.index <= new Pokedex().getPokemonsList().count`](https://github.com/shenlong616/pokedex/blob/main/components/Pokedex/index.js#L20).
- [ ] Too big data makes the app run slow.
- [ ] Search bar component.
- [ ] Filter component.

## Main files

### Tree

```text
components
 ┣ Layout
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ index.jsx
 ┃ ┣ NoiseTexture.jsx
 ┃ ┗ Slideout.jsx
 ┣ Pokedex
 ┃ ┣ components
 ┃ ┃ ┣ Card
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ Stat.jsx
 ┃ ┃ ┗ Dialog.jsx
 ┃ ┗ index.jsx
 ┗ Button.jsx

pages
 ┣ index.jsx
 ┣ _app.jsx
 ┗ _document.jsx

README
 ┗ img
 ┃ ┗ 0.png

styles
 ┣ globals.scss
 ┣ _selectors.scss
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
