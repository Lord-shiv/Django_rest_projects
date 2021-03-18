from django.urls import path
from .views import ArticleView, ArticleDetail

urlpatterns = [
    # path('article/', article_list),
    path('article/', ArticleView.as_view()),
    path('article/<int:id>', ArticleDetail.as_view()),
    # path('article/<int:pk>/', article_detail),
]
