from .models import Puppy
from rest_framework import serializers


class PuppySerializer(serializers.ModelSerializer):
    class Meta:
        model = Puppy
        fields = ('name', 'age', 'breed', 'color', 'created_at', 'updated_at')
