from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegisterationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    password = serializers.CharField()

class UserAuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField()

class GoalSerializer(serializers.Serializer):
    cf_goal = serializers.IntegerField()