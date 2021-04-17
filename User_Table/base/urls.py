from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path
from base import settings

from register.views import user_list, user_detial, UserList, UserDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', user_list, name="home"),
    path('user/<int:pk>/', user_detial, name="user_detail"),

    # classes based
    path('users/', UserList.as_view(), name="user_list"),
    path('users/<int:id>/', UserDetail.as_view(), name="user_detail"),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
