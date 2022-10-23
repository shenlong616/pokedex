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

## Add/Modify/Delete

### Tree files

```text
components
 ┣ Pokedex
 ┃ ┣ components
 ┃ ┃ ┗ Stat.js
 ┃ ┗ index.js
 ┣ Footer.js
 ┣ Header.js
 ┣ Layout.js
 ┣ Noise.js
 ┗ Slideout.js

pages
 ┣ index.js
 ┣ _app.js
 ┗ _document.js

README
 ┗ img
 ┃ ┗ 1.png

styles
 ┣ globals.scss
 ┗ _tailwind.scss
```
