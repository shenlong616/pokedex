# Pokédex

## Screenshot

![](./README/img/1.png)

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
 ┗ Pokedex
 ┃ ┣ components
 ┃ ┃ ┗ Stat.jsx
 ┃ ┗ index.jsx

pages
 ┣ index.jsx
 ┣ _app.jsx
 ┗ _document.jsx

README
 ┗ img
 ┃ ┗ 0.png

styles
 ┣ globals.scss
 ┗ _tailwind.scss
```

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
