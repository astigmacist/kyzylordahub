from django.urls import path
from rest_framework.routers import DefaultRouter

app_name = 'startups'

router = DefaultRouter()
# router.register(r'', StartupsViewSet, basename='startup')

urlpatterns = router.urls
