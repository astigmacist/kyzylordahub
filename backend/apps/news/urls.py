from django.urls import path
from rest_framework.routers import DefaultRouter

app_name = 'news'

router = DefaultRouter()
# router.register(r'', NewsViewSet, basename='news')

urlpatterns = router.urls
