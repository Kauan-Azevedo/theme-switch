# Como usar o themeSwitch
primeiramente sera necessario converter o .ts para .js usando o comando
```bash
    'npx tsc themeSwitch.ts'
```
após isso será criado um arquivo .js.

necessario haver um checkbox com id de checkbox.

exemplo:
```html
<input type="checkbox" id="checkbox" />
```


necessario haver um css com variaveis no :root e usando o [data-theme='dark']

exemplo:
```css
:root{
    --bg-color: white;
    --text-color: black;
}

[data-theme='dark']{
    --bg-color: black;
    --text-color: white;
}
```
