# Структура проекта Kyzylorda Hub

## Обзор

Проект состоит из двух основных частей:
- **Frontend**: Next.js 14+ приложение
- **Backend**: Django 5.1 REST API

## Детальная структура

```
KyzylordaHub/
│
├── frontend/                      # Next.js приложение
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # Главная страница
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Глобальные стили
│   │   └── favicon.ico          # Иконка
│   │
│   ├── components/               # React компоненты
│   │   ├── ui/                  # UI компоненты (buttons, cards, etc)
│   │   └── layout/              # Layout компоненты (header, footer, etc)
│   │
│   ├── lib/                     # Утилиты и хелперы
│   │   ├── api.ts              # API клиент для работы с backend
│   │   └── utils.ts            # Вспомогательные функции
│   │
│   ├── public/                  # Статические файлы
│   │   ├── next.svg
│   │   └── vercel.svg
│   │
│   ├── node_modules/            # NPM зависимости
│   ├── .gitignore              # Git ignore
│   ├── .env.local.example      # Пример env переменных
│   ├── package.json            # NPM конфигурация
│   ├── tsconfig.json           # TypeScript конфигурация
│   ├── tailwind.config.ts      # Tailwind CSS конфигурация
│   ├── postcss.config.mjs      # PostCSS конфигурация
│   ├── next.config.ts          # Next.js конфигурация
│   └── README.md               # Frontend документация
│
├── backend/                     # Django приложение
│   ├── config/                 # Django настройки
│   │   ├── settings.py        # Основные настройки
│   │   ├── urls.py            # URL маршруты
│   │   ├── wsgi.py            # WSGI конфигурация
│   │   └── asgi.py            # ASGI конфигурация
│   │
│   ├── apps/                   # Django приложения
│   │   ├── __init__.py        # Apps package init
│   │   │
│   │   ├── core/              # Базовые модели и утилиты
│   │   │   ├── models.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   └── ...
│   │   │
│   │   ├── users/             # Пользователи и авторизация
│   │   │   ├── models.py      # User модели
│   │   │   ├── serializers.py # DRF сериализаторы
│   │   │   ├── views.py       # API views
│   │   │   ├── urls.py        # URL маршруты
│   │   │   └── ...
│   │   │
│   │   ├── startups/          # Стартапы
│   │   │   ├── models.py      # Startup, Application модели
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   └── ...
│   │   │
│   │   ├── events/            # Мероприятия
│   │   │   ├── models.py      # Event модели
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   └── ...
│   │   │
│   │   └── news/              # Новости и блог
│   │       ├── models.py      # News, Article модели
│   │       ├── serializers.py
│   │       ├── views.py
│   │       ├── urls.py
│   │       └── ...
│   │
│   ├── media/                 # Загруженные файлы (создается автоматически)
│   ├── staticfiles/           # Собранная статика (создается автоматически)
│   ├── venv/                  # Python виртуальное окружение
│   │
│   ├── .gitignore            # Git ignore
│   ├── .env.example          # Пример env переменных
│   ├── manage.py             # Django management команды
│   ├── requirements.txt      # Python зависимости
│   ├── db.sqlite3            # SQLite база данных (dev)
│   └── README.md             # Backend документация
│
├── docs/                      # Документация проекта
│   └── PROJECT_STRUCTURE.md  # Этот файл
│
├── .gitignore                # Общий Git ignore
└── README.md                 # Главная документация

```

## Технологии

### Frontend
- **Next.js 14+**: React фреймворк с App Router
- **TypeScript**: Статическая типизация
- **Tailwind CSS**: Utility-first CSS фреймворк
- **Shadcn/ui**: Компоненты UI (планируется)

### Backend
- **Django 5.1**: Python web framework
- **Django REST Framework 3.15**: RESTful API
- **django-cors-headers**: CORS поддержка
- **djangorestframework-simplejwt**: JWT авторизация
- **drf-yasg**: Swagger/OpenAPI документация
- **python-decouple**: Управление env переменными
- **psycopg2-binary**: PostgreSQL драйвер

## Django приложения

### core
Базовые модели и утилиты, используемые во всех других приложениях:
- Общие abstract модели
- Утилиты и хелперы
- Кастомные permissions

### users
Управление пользователями и авторизация:
- Кастомная User модель (если нужно)
- JWT токены
- Профили пользователей
- Роли и права доступа

### startups
Управление стартапами:
- Модель Startup (информация о стартапе)
- Модель Application (заявки на вступление)
- Статусы заявок
- Связь с пользователями

### events
Мероприятия и события:
- Модель Event (хакатоны, митапы, конференции)
- Регистрация на мероприятия
- Календарь событий
- Категории мероприятий

### news
Новости и блог:
- Модель News/Article
- Категории новостей
- Теги
- Публикация и черновики

## API Endpoints (планируемые)

```
/api/v1/
├── users/
│   ├── token/              POST   - Получить JWT токен
│   ├── token/refresh/      POST   - Обновить токен
│   ├── register/           POST   - Регистрация
│   └── profile/            GET    - Профиль пользователя
│
├── startups/
│   ├── /                   GET    - Список стартапов
│   ├── /                   POST   - Создать стартап
│   ├── /{id}/              GET    - Детали стартапа
│   ├── /{id}/              PUT    - Обновить стартап
│   └── applications/       POST   - Подать заявку
│
├── events/
│   ├── /                   GET    - Список мероприятий
│   ├── /{id}/              GET    - Детали мероприятия
│   └── /{id}/register/     POST   - Регистрация на событие
│
└── news/
    ├── /                   GET    - Список новостей
    ├── /{id}/              GET    - Детали новости
    └── categories/         GET    - Категории новостей
```

## Переменные окружения

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

### Backend (.env)
```env
SECRET_KEY=django-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

DB_NAME=kyzylordahub_db
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432

CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## Следующие шаги

1. **Frontend**:
   - Добавить Shadcn/ui компоненты
   - Создать страницы (About, Programs, Events, News)
   - Реализовать формы и валидацию
   - Интегрировать с API

2. **Backend**:
   - Создать модели для всех приложений
   - Реализовать ViewSets и Serializers
   - Добавить тесты
   - Настроить PostgreSQL для продакшена
   - Добавить Pillow после установки system libraries

3. **Деплой**:
   - Frontend на Vercel
   - Backend на Railway/Heroku
   - База данных PostgreSQL
   - Настроить CI/CD
