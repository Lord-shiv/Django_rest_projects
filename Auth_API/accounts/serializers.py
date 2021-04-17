from rest_framework import serializers
from .models import User


class RUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=65, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = [
            'username', 'email', 'password'
        ]                                  # 'username', 'first_name', 'last_name',

    def validate(self, attrs):
        """validate each user if it is already in database."""

        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError(
                'The username should only contian alphanumeric character'
            )
        return attrs
        return super().validate(attrs)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
