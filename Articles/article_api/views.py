from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Article
from.serializers import ArticleSerializer


@csrf_exempt
def article_list(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':  # create
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)

        # we have to check new posted data validation
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def article_detail(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return HttpResponse(status=404)  # 404 Not Found

    if request.method == 'GET':  # get
        serializer = ArticleSerializer(article)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':  # update
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(article, data=data)
        if serializer.is_valid():
            serializer.save()
            # 201 CreatedThe request has been fulfilled, resulting in the creation of a new resource
            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)  # 400 Bad Request

    elif request.method == 'DELETE':
        article.delete()
        # No Content he server successfully processed the request, and is not returning any content.
        return HttpResponse(status=204)
