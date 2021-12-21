# vue3-i18n-plugin

## How to use

`npm i vue3-i18n-plugin --save`

```js
import App from "./App.vue";
import { createApp } from "vue";
import i18n from "vue3-i18n-plugin";
import i18nConfig from "./utils/i18n/const";

createApp(App)
  .use(i18n, {
    initial: "zh",
    translationConfiguration: {
      zh: {
        hello: "你好",
      },
      en: {
        hello: "hello",
      },
    },
  })
  .mount("#app");
```

```js
<div>{{ $t('hello') }}</div>
```

```js
import { changeLocal } from "vue3-i18n-plugin";

changeLocal("zh");
```
