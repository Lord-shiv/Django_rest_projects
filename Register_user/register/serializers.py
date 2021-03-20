from rest_framework import serializers
from . models import User


class UserSerializers(serializers.ModelSerializer):
    profile_pic = serializers.ImageField(
        max_length=None, use_url=True, required=False)
    docs = serializers.FileField(max_length=None, use_url=True, required=False)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'profile_pic', 'gender',
                  'email', 'docs', 'phone', 'status', 'salary', 'about')
