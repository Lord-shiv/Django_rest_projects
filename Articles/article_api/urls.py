from django.urls import path
from .views import ArticleView, ArticleDetail, GenricView

urlpatterns = [
    # path('article/', article_list),
    # path('article/<int:pk>/', article_detail),

    path('article/', ArticleView.as_view()),
    # path('article/<int:id>/', ArticleDetail.as_view()),

    path('genric/article/<int:id>/', GenricView.as_view()),
]
