from django.shortcuts import render
from rest_framework import generics, status, views, permissions
from .serializers import RUserSerializer
from rest_framework.response import Response
from django.conf import settings
from django.contrib import auth
# import jwt


class RegisterView(generics.GenericAPIView):
    serializer_class = RUserSerializer

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATED)
