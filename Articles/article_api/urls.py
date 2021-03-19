from django.urls import path, include
from .views import ArticleView, ArticleDetail, GenricView, ArticleViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('article', ArticleViewSet, basename='article')

urlpatterns = [
    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>', include(router.urls)),

    # path('article/', article_list),
    # path('article/<int:pk>/', article_detail),

    path('article/', ArticleView.as_view()),
    # path('article/<int:id>/', ArticleDetail.as_view()),

    path('genric/article/<int:id>/', GenricView.as_view()),
]
