from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegisterationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    full_name = serializers.CharField(max_length=200)
    email = serializers.CharField()
    password = serializers.CharField()

class UserAuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField()

class GoalSerializer(serializers.Serializer):
    cf_goal = serializers.IntegerField()