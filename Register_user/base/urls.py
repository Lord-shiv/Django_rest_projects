from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path
from base import settings

from register.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home, name="home"),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
