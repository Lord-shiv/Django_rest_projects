from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path
from base import settings

from register.views import add_user, save_user

urlpatterns = [
    path('admin/', admin.site.urls),
    path('add/', add_user, name="add"),
    path('save/', save_user, name="save"),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
