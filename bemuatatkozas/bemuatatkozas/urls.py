
from django.contrib import admin
from django.urls import path
from webfejlesztes.views import fooldal


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', fooldal),
]
