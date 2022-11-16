# 🎉Como usar o themeSwitch
Primeiramente será necessário converter o arquivo themeSwitch.ts para .js, através do seguinte comando:
```bash
    npx tsc themeSwitch.ts
```
após a criação do arquivo themeSwitch.js, será necessário possuir uma checkbox com id "checkbox"

* exemplo:
    ```html
    <input type="checkbox" id="checkbox" />
    ```

após a inclusão do checkbox será necessário haver um css com as variaveis no :root e no [data-theme='dark']

* exemplo:
    ```css
    :root{
        --bg-color: white; <- variaveis a serem alteradas
        --text-color: black; <- variaveis a serem alteradas
    }

    [data-theme='dark']{
        --bg-color: black;
        --text-color: white;
    }  <- modo escuro ativado irá substituir os de mesmo nome
    ```
