from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.models import User
from .serializers import (UserRegisterationSerializer, 
                          UserAuthenticationSerializer)
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
            return Response(serializer.data, status=status.HTTP_201_CREATED)
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
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            return Response({"error": "Invalid Login!"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)