"""
URL configuration for Kyzylorda Hub project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Swagger/OpenAPI documentation
schema_view = get_schema_view(
   openapi.Info(
      title="Kyzylorda Hub API",
      default_version='v1',
      description="API для Kyzylorda Hub - регионального филиала Astana Hub",
      terms_of_service="https://www.kyzylordahub.kz/terms/",
      contact=openapi.Contact(email="contact@kyzylordahub.kz"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # API Documentation
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    # API endpoints
    path('api/v1/users/', include('apps.users.urls')),
    path('api/v1/startups/', include('apps.startups.urls')),
    path('api/v1/events/', include('apps.events.urls')),
    path('api/v1/news/', include('apps.news.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
