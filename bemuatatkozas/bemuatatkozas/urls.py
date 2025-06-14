
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from webfejlesztes.views import fooldal


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', fooldal),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)   
