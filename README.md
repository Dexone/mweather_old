# Nuxt-Dealership

### Пэт-проект прогноза погоды

## Особенности

- Взаимодействие с бэком на отдельном сервере (Nginx + PM2)
- Сохраняемый local storage с использованием библиотеки управления состояниями Pinia
- Построение графиков при помощи Chart.js
- Адаптивная верстка с использованием Tailwind CSS
- Перезапрос и обновление данных с сервера
- Поиск города по текущей геолокации
- Ручной поиск по названию города
- Добавление города в избранное с кратким отображением текущей погоды
- Прогноз на 5 дней 
- Подробный прогноз выбранного дня
- Таймлайн светового дня
- График температуры выбранного дня

Установка зависимостей:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Компиляция и запуск сервера разработки `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

Компиляция и минимизация для продакшена:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Локальная предварительная версия рабочей сборки:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```