from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """Кастомная модель пользователя для Kyzylorda Hub"""
    
    email = models.EmailField('Email адрес', unique=True)
    phone = models.CharField('Телефон', max_length=20, blank=True)
    bio = models.TextField('О себе', blank=True)
    avatar = models.ImageField('Аватар', upload_to='avatars/', blank=True, null=True)
    
    # Дополнительные поля
    is_startup_founder = models.BooleanField('Основатель стартапа', default=False)
    is_mentor = models.BooleanField('Ментор', default=False)
    is_investor = models.BooleanField('Инвестор', default=False)
    
    created_at = models.DateTimeField('Дата регистрации', auto_now_add=True)
    updated_at = models.DateTimeField('Дата обновления', auto_now=True)
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.username
