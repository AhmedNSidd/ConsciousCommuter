from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('username', 'email', 'password')

class UserAuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField()