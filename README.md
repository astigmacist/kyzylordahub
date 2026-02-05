# Kyzylorda Hub

Официальный сайт Kyzylorda Hub - регионального филиала Astana Hub в Кызылординской области.

## 🎯 О проекте

Kyzylorda Hub — это технопарк для IT-стартапов, предоставляющий:
- Поддержку местных стартапов
- Образовательные программы
- Менторство и консультации
- Коворкинг пространства
- Помощь в привлечении инвестиций

## 🛠 Технологический стек

### Frontend
- **Next.js 14+** - React фреймворк с App Router
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - utility-first CSS фреймворк
- **Shadcn/ui** - переиспользуемые компоненты

### Backend
- **Django 5.1** - Python web framework
- **Django REST Framework** - API endpoints
- **PostgreSQL** - база данных (в продакшене)
- **JWT** - аутентификация
- **Swagger/OpenAPI** - документация API

## 📁 Структура проекта

```
KyzylordaHub/
├── frontend/              # Next.js приложение
│   ├── app/              # App Router страницы
│   ├── components/       # React компоненты
│   ├── lib/              # Утилиты и API клиент
│   └── public/           # Статические файлы
│
├── backend/              # Django проект
│   ├── config/           # Настройки Django
│   ├── apps/             # Django приложения
│   │   ├── users/        # Пользователи
│   │   ├── startups/     # Стартапы
│   │   ├── events/       # Мероприятия
│   │   ├── news/         # Новости
│   │   └── core/         # Общие модели
│   ├── venv/             # Python виртуальное окружение
│   └── manage.py         # Django CLI
│
└── docs/                 # Документация проекта
```

## 🚀 Быстрый старт

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend будет доступен на http://localhost:3000

### Backend

```bash
cd backend

# Активировать виртуальное окружение
source venv/bin/activate  # macOS/Linux
# или
venv\\Scripts\\activate   # Windows

# Создать .env файл из примера
cp .env.example .env

# Применить миграции
python manage.py migrate

# Создать суперпользователя
python manage.py createsuperuser

# Запустить сервер
python manage.py runserver
```

Backend будет доступен на:
- API: http://localhost:8000/api/v1/
- Admin: http://localhost:8000/admin/
- Swagger: http://localhost:8000/swagger/
- ReDoc: http://localhost:8000/redoc/

## 📚 API Endpoints

### Пользователи
- `POST /api/v1/users/token/` - Получить JWT токен
- `POST /api/v1/users/token/refresh/` - Обновить токен

### Стартапы
- `GET /api/v1/startups/` - Список стартапов
- `POST /api/v1/startups/` - Создать заявку

### Мероприятия
- `GET /api/v1/events/` - Список мероприятий
- `GET /api/v1/events/{id}/` - Детали мероприятия

### Новости
- `GET /api/v1/news/` - Список новостей
- `GET /api/v1/news/{id}/` - Детали новости

## 🔧 Разработка

### Требования
- **Node.js** 18.17 или выше
- **Python** 3.10 или выше
- **PostgreSQL** 13 или выше (для продакшена)

### Переменные окружения

Backend `.env`:
```env
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

DB_NAME=kyzylordahub_db
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432

CORS_ALLOWED_ORIGINS=http://localhost:3000
```

Frontend `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## 📦 Деплой

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Railway/Heroku)
```bash
cd backend
git push railway main
```

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📝 Лицензия

Этот проект лицензирован под MIT License.

## 📞 Контакты

- **Website**: https://www.kyzylordahub.kz
- **Email**: contact@kyzylordahub.kz
- **Telegram**: @kyzylordahub

---

Made with ❤️ by Kyzylorda Hub Team
