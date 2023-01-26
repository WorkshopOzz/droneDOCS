import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Drone Docs",
  description: "Справочник по FPV хобби",
  lang: "ru",
  base: "/droneDOCS/",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/assets/img/favicon.png" }]],
  themeConfig: {
    siteTitle: "Drone Docs",
    logo: "/assets/img/favicon.png",
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/ikherty">PropWash Service</a>',
    },
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Сменить тему",
    outline: { label: "Содержание:" },
    docFooter: {
      prev: "Назад",
      next: "Далее",
    },
    editLink: {
      pattern: "https://github.com/ikherty/droneDocs/edit/master/docs/:path",
      text: "Редактировать эту страницу на GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/ikherty/droneDocs" },
      { icon: "youtube", link: "https://www.youtube.com/@PropWashService" },
    ],
    sidebar: [
      {
        text: "Введение",
        collapsible: false,
        items: [
          { text: "Купить Velocidrone", link: "/shop/buyVeloci" },
          { text: "Вход в хобби", link: "/intro/beginning" },
          { text: "Стили полета", link: "/intro/flightstyles" },
          { text: "Аппаратура", link: "/intro/tx" },
          { text: "Видеосвязь", link: "/intro/videoRx" },
          { text: "Источники питания", link: "/intro/power" },
        ],
      },
      {
        text: "Покупки",
        collapsible: false,
        items: [
          { text: "Магазины", link: "/shop/shops" },
          { text: "Must have вещи для хоббистов", link: "/shop/nessesary" },
          { text: "Для самолетчиков", link: "/shop/airplanes" },
          { text: "Компоненты для самосборов", link: "/shop/DIY" },
          { text: "Выбор готового аппарата", link: "/shop/KIT" },
          { text: "Как экономить?", link: "/shop/lifehacks" },
        ],
      },
      {
        text: "Сообщество",
        collapsible: false,
        items: [
          { text: "Голоссарий", link: "/community/glossarium" },
          { text: "Чаты", link: "/community/chats" },
          { text: "Полезные материалы", link: "/community/usefull" },
          { text: "Программное обеспечение", link: "/community/software" },
          { text: "Пайка", link: "/community/soldering" },
          { text: "Влагозащита", link: "/community/coating" },
          { text: "Перевозка дронов и оборудования", link: "/community/bags" },
        ],
      },
      {
        text: "Настройки",
        collapsible: false,
        items: [
          { text: "Рейты", link: "/settings/rates" },
          { text: "Пресеты", link: "/settings/presets" },
          { text: "Пользователям FrSky", link: "/settings/frsky" },
        ],
      },
    ],
  },
});