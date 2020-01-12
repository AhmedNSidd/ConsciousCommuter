from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Trip
from django.contrib.auth.models import User
from .serializers import TripSerializer

@api_view(['GET', 'POST'])
def user_trips(request, user_id):
    """This endpoint will be used to get trips and set a trip for a user
    """
    user = None
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({"error", "User not found"}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        user_trips = Trip.objects.filter(user=user)
        trips = []
        for trip in user_trips:
            trips.append({
                "name": trip.name,
                "start": trip.start,
                "destination": trip.destination,
                "mode_of_travel": trip.mode_of_travel,
                "distance": trip.distance,
                "carbon_footprint": trip.carbon_footprint,
                "roundtrip": trip.roundtrip,
                "favorites": trip.favorites
            })
        return Response({"user_trips": trips}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = TripSerializer(data=request.data)
        if serializer.is_valid():
            trip = Trip.create(user, request.data.get('name'), request.data.get('start'), 
                        request.data.get('destination'), request.data.get('mode_of_travel'), 
                        request.data.get('distance'), request.data.get('roundtrip'), 
                        request.data.get('favorites'))
            trip.save()
            response = {
                "name": trip.name,
                "start": trip.start,
                "destination": trip.destination,
                "mode_of_travel": trip.mode_of_travel,
                "distance": trip.distance,
                "carbon_footprint": trip.carbon_footprint,
                "roundtrip": trip.roundtrip,
                "favorites": trip.favorites
            }
            return Response(response, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
