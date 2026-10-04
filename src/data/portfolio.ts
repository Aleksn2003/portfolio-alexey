import type { ImageMetadata } from 'astro';
import portfolioPreview from '../assets/portfolio-preview.png';
import eclatPreview from '../assets/eclat-preview.png';
import shinaPreview from '../assets/shina-preview.png';
import museumPreview from '../assets/museum-preview.png';

// Only facts present in the original source are included.
// Replace empty contact values with your real addresses before publication.
export const profile = {
  name: 'Алексей',
  fullName: 'Алексей Н.',
  role: 'Junior AI-Assisted Web Developer',
  email: 'aleksn8999@gmail.com',
  telegram: 'https://t.me/AlexeyNikolaevN',
  whatsapp: 'https://wa.me/79991736510',
  max: 'https://max.ru/u/f9LHodD0cOIb-asAQ88bnLTDNqwaYMACkwHtwTdmYAYqs02vkFciF8ORR-Q',
  github: 'https://github.com/Aleksn2003', // Full https://github.com/... URL
};

export const skills = [
  { name: 'PHP', label: 'Fullstack', description: 'ООП, PDO и серверная логика. Учусь создавать понятную архитектуру приложений.' },
  { name: 'PostgreSQL', label: 'Данные', description: 'SQL, связи между таблицами, запросы и работа с данными через PDO.' },
  { name: 'Docker', label: 'Окружение', description: 'Контейнеры и Docker Compose для запуска приложения и базы данных.' },
  { name: 'JavaScript', label: 'Интерфейс', description: 'DOM, события и Fetch API. Интерактивность без лишней сложности.' },
  { name: 'Tailwind CSS', label: 'Вёрстка', description: 'Адаптивные интерфейсы, аккуратные компоненты и светлая / тёмная тема.' },
  { name: 'Автоматизация', label: 'Инструменты', description: 'Изучаю фоновые задачи и Cron, чтобы упрощать повторяющуюся работу.' },
];

interface Project { status?: string; repository?: string; title: string; category: string; number: string; stack: string[]; description: string; details: string; link: string; preview?: ImageMetadata; previewLabel?: string; demo?: boolean; task: string; contribution: string; result: string; }

export const projects: Project[] = [
  {
    title: 'Личный сайт-портфолио', preview: portfolioPreview, category: 'Веб-приложение', number: '01', status: 'Личный проект',
    stack: ['PHP', 'PostgreSQL', 'Docker', 'Astro'], link: '',
    description: 'Портфолио с управлением содержимым и отдельной статической версией.',
    task: 'Собрать проекты, навыки и контакты в одном месте.',
    contribution: 'Интерфейс, PHP API, работа с PostgreSQL и окружение Docker. Статическая версия на Astro.',
    result: 'Личный сайт с административной панелью и статическая версия для публикации.',
    details: 'В исходном приложении есть модели данных, API, сообщения и статистика посещений.',
  },
  {
    title: 'ÉCLAT Beauty Studio', preview: eclatPreview, category: 'Сайт beauty-студии', number: '02', status: 'Демосайт',
    stack: ['Vue 3', 'Vite', 'Tailwind CSS', 'Motion'],
    link: 'https://aleksn2003.github.io/eclat-beauty-studio/', repository: 'https://github.com/Aleksn2003/eclat-beauty-studio',
    description: 'Адаптивный сайт студии красоты с услугами, портфолио и интерактивным подбором ухода.',
    task: 'Представить услуги студии и помочь посетителю выбрать уход.',
    contribution: 'Компоненты Vue, адаптивная вёрстка, анимации, квиз, фильтрация и сравнение изображений.',
    result: 'Опубликованный демонстрационный сайт на GitHub Pages.',
    details: 'Это разработанный демосайт: данные студии и форма записи демонстрационные, реальная запись не подключена.',
  },
  {
    title: 'Музейный комплекс «Самыртай»', preview: museumPreview, category: 'Сайт и CMS', number: '03', status: 'Fullstack-проект',
    stack: ['JavaScript', 'PHP', 'PostgreSQL', 'Docker'],
      link: 'https://153.80.247.166/', repository: 'https://github.com/Aleksn2003/museum-kr',
    description: 'Сайт музея с коллекциями, новостями, афишей и панелью управления материалами.',
    task: 'Представить музей и дать возможность обновлять материалы через административную панель.',
    contribution: 'Страницы сайта, PHP API, база PostgreSQL, загрузка изображений и Docker-окружение.',
    result: 'Многостраничный сайт с CMS и необязательным импортом публикаций VK.',
    details: 'Превью снято с локальной версии из репозитория. Динамические разделы работают вместе с API и базой данных.',
  },
  {
    title: 'PRO_ШИНА', preview: shinaPreview, category: 'Сайт шиномонтажа', number: '04', status: 'Демосайт',
    stack: ['Astro', 'Vue 3', 'Tailwind CSS', 'TypeScript'],
    link: 'https://aleksn2003.github.io/pro-shina-demo/', repository: 'https://github.com/Aleksn2003/pro-shina-demo',
    description: 'Адаптивный сайт шиномонтажа с услугами, тарифами и калькулятором стоимости.',
    task: 'Показать услуги и дать понятный предварительный расчёт цены.',
    contribution: 'Статические страницы Astro, Vue-калькулятор, единая конфигурация услуг и адаптивная вёрстка.',
    result: 'Опубликованный шаблон с интерактивным расчётом и подготовленной структурой SEO.',
    details: 'Это разработанный демонстрационный шаблон. Контакты, цены и изображения — примеры, отправка заявки не подключена.',
  },
];

export const services = [
  { number: '01', title: 'Сайт для вашей идеи', examples: ['Лендинг', 'Каталог', 'Небольшой сайт'], outcome: 'Адаптивный сайт с понятной навигацией и нужными вам разделами.', description: 'Лендинг, каталог или небольшой сайт с административной панелью.', price: 'от 5 000 ₽' },
  { number: '02', title: 'От кода до запуска', examples: ['Docker', 'Nginx', 'PostgreSQL'], outcome: 'Настроенное окружение, в котором приложение можно запустить и поддерживать.', description: 'Docker, Nginx, PostgreSQL и развёртывание приложения на сервере.', price: 'от 3 000 ₽' },
  { number: '03', title: 'Дать проекту следующий шаг', examples: ['Новые функции', 'Исправления', 'Рефакторинг'], outcome: 'Изменения под конкретную задачу и объяснение того, как они устроены.', description: 'Работа с существующим кодом, добавление функций и рефакторинг.', price: 'по договорённости' },
];
