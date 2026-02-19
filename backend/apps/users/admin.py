from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """Админ-панель для кастомной модели пользователя"""
    
    list_display = [
        'username', 'email', 'first_name', 'last_name',
        'is_startup_founder', 'is_mentor', 'is_investor',
        'is_staff', 'is_active', 'created_at'
    ]
    list_filter = [
        'is_staff', 'is_active', 'is_startup_founder',
        'is_mentor', 'is_investor', 'created_at'
    ]
    search_fields = ['username', 'email', 'first_name', 'last_name']
    ordering = ['-created_at']
    
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Личная информация', {
            'fields': ('first_name', 'last_name', 'email', 'phone', 'bio', 'avatar')
        }),
        ('Роли', {
            'fields': ('is_startup_founder', 'is_mentor', 'is_investor')
        }),
        ('Права доступа', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')
        }),
        ('Важные даты', {'fields': ('last_login', 'created_at', 'updated_at')}),
    )
    
    readonly_fields = ['created_at', 'updated_at']
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'username', 'email', 'password1', 'password2',
                'first_name', 'last_name', 'is_staff', 'is_active'
            ),
        }),
    )
