from rest_framework import serializers
from .models import User


class UserSerializers(serializers.Serializer):
    first_name = serializers.CharField(max_length=150, blank=True)
    last_name = serializers.CharField('last name', max_length=150, blank=True)
    profile_pic = serializers.ImageField(
        upload_to='user_profile_pic/', default='default.jpg', )
    gender = serializers.CharField(max_length=1, choices=GENDER_CHOICES)
    email = serializers.EmailField(blank=True)
    phone = serializers.CharField(max_length=50, null=True)
    date_created = serializers.DateTimeField(auto_now_add=True, null=True)
    status = serializers.ForeignKey(Department, on_delete=models.CASCADE)
    salary = serializers.DecimalField(max_digits=6, decimal_places=2)
    about = serializers.TextField(max_length=1000, null=True)
    signup_confirmation = serializers.BooleanField(default=False)

    def create(self, validated_data):
        return User.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get(
            'firstname', instance.first_name)
        instance.last_name = validated_data.get('lastname', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
