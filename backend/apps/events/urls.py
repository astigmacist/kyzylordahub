from django.urls import path
from rest_framework.routers import DefaultRouter

app_name = 'events'

router = DefaultRouter()
# router.register(r'', EventsViewSet, basename='event')

urlpatterns = router.urls
