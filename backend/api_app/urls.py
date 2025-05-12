from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api_app.views import PatientViewSet

router = DefaultRouter()
router.register(r'patient', PatientViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

