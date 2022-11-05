# Pokédex

## Screenshot

![](./README/img/1.png)
![](./README/img/2.png)

## To do

### Vi

- [x] Cuộn trang vô hạn
- [ ] Phân trang
- [ ] Chỉ render khi `state1.index` bé hơn hoặc bằng [`{count:{}}`](https://pokeapi.co/api/v2/pokemon/)
- [ ] Dữ liệu qá lớn `state1.render` => gây ra tình trạng `lag` => cân nhắc dùng [react-window](https://www.npmjs.com/package/react-window)
- [ ] `Search bar` component.
- [ ] `Filter` component.
- [x] Sử dụng [`swr`](https://swr.vercel.app/) thay cho [`pokedex-promise-v2`](https://github.com/PokeAPI/pokedex-promise-v2)
- [ ] Component hóa từng thành phần.
- [ ] Sử dụng [`Image`](https://nextjs.org/docs/api-reference/next/image) component. => Nhưng phải loại bỏ 2 props `height` và `weight`. => `https://nextjs.org/docs/api-reference/next/image#fill`
- [ ] `Flex` dùng cho `content`
- [ ] `Grid` dùng cho `layout`
- [x] Buộc dùng [`concat`](https://github.com/shenlong616/pokedex/blob/c9c3a88b81f99cd0a2371392a845f5a6a0f8ff76/components/Pokedex/index.jsx#L53) method thay cho toán tử `spread` => Vì nhanh hơn chứ cái loz j nữa. => [tài liệu](https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat)

#### Next.js

- [x] Upgrading from 12 to 13

## Tree file

### Main files

```text
components
 ┣ Layout
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ index.jsx
 ┃ ┗ Slideout.jsx
 ┣ Pokedex
 ┃ ┣ components
 ┃ ┃ ┣ Card.jsx
 ┃ ┃ ┣ Dialog.jsx
 ┃ ┃ ┣ ProgressBar.jsx
 ┃ ┃ ┗ UI.jsx
 ┃ ┗ index.jsx
 ┗ NoiseTexture.jsx

hooks
 ┗ usePokemon.js

pages
 ┣ index.jsx
 ┣ _app.jsx
 ┗ _document.jsx

README
 ┗ img
 ┃ ┗ 0.png

styles
 ┣ globals.scss
 ┣ _scrollbar.scss
 ┣ _selectors.scss
 ┗ _tailwindcss.scss
```

### Configuration files

```text
pokedex
 ┣ pokedex.config.js // Basic configuration! (style, animation,...)
 ┗ ...
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
