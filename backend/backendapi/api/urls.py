from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet
from .viewsets import EmployeeViewset

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('employee', EmployeeViewset)

urlpatterns = [
    path('', include(router.urls)),
]


