# Kyzylorda Hub - Backend

Django REST API для сайта Kyzylorda Hub.

## 🚀 Разработка

```bash
# Активировать виртуальное окружение
source venv/bin/activate

# Установить зависимости
pip install -r requirements.txt

# Создать .env файл
cp .env.example .env

# Применить миграции
python manage.py migrate

# Создать суперпользователя
python manage.py createsuperuser

# Запустить сервер
python manage.py runserver
```

## 📂 Структура

```
backend/
├── config/              # Настройки проекта
│   ├── settings.py     # Django настройки
│   ├── urls.py         # URL конфигурация
│   └── wsgi.py         # WSGI конфигурация
├── apps/               # Django приложения
│   ├── core/          # Базовые модели
│   ├── users/         # Пользователи
│   ├── startups/      # Стартапы
│   ├── events/        # Мероприятия
│   └── news/          # Новости
├── media/             # Загруженные файлы
├── staticfiles/       # Собранная статика
└── manage.py          # Django CLI
```

## 🔧 Команды управления

```bash
# Создать миграции
python manage.py makemigrations

# Применить миграции
python manage.py migrate

# Создать суперпользователя
python manage.py createsuperuser

# Собрать статику
python manage.py collectstatic

# Запустить shell
python manage.py shell

# Запустить тесты
python manage.py test
```

## 📚 API Документация

После запуска сервера:
- Swagger UI: http://localhost:8000/swagger/
- ReDoc: http://localhost:8000/redoc/
- Admin панель: http://localhost:8000/admin/

## 🗄 База данных

По умолчанию используется SQLite для разработки.

Для PostgreSQL в продакшене:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT'),
    }
}
```

## 🔐 Аутентификация

Используется JWT аутентификация через `djangorestframework-simplejwt`.

```bash
# Получить токен
POST /api/v1/users/token/
{
    "username": "user",
    "password": "password"
}

# Обновить токен
POST /api/v1/users/token/refresh/
{
    "refresh": "refresh_token"
}
```

## 📦 Зависимости

- Django 5.1
- Django REST Framework
- django-cors-headers
- djangorestframework-simplejwt
- python-decouple
- psycopg2-binary
- drf-yasg

## 🧪 Тестирование

```bash
# Запустить все тесты
python manage.py test

# Запустить тесты конкретного приложения
python manage.py test apps.users

# С coverage
coverage run --source='.' manage.py test
coverage report
```
