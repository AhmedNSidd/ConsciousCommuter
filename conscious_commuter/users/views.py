from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.models import User
from .models import Profile
from .serializers import (UserRegisterationSerializer, 
                          UserAuthenticationSerializer, GoalSerializer)
from django.contrib.auth import authenticate

@api_view(['POST'])
def create_user(request):
    """This endpoint will be used to create a user
    """
    if request.method == 'POST':
        serializer = UserRegisterationSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(request.data.get('username'), request.data.get('email'),request.data.get('password'))
            user.profile.full_name = request.data.get('full_name')
            user.save()
            return Response({"user_id": user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def authenticate_user(request):
    """This endpoint will be used to authenticate a user
    """
    if request.method == 'POST':
        serializer = UserAuthenticationSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
            if user:
                return Response({"user_id": user.id}, status=status.HTTP_202_ACCEPTED)
            return Response({"error": "Invalid Login!"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def users_carbon_footprint_goal(request, user_id):
    """This endpoint will get and set the carbon footprint for a user
    """
    user = None
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({"error", "User not found"}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        profile = Profile.objects.get(user=user)
        return Response({"cf_goal": profile.cf_goal}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = GoalSerializer(data=request.data)
        if serializer.is_valid():
            user.profile.cf_goal = request.data.get('cf_goal')
            user.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)