from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='basic_prac_main'),
]

