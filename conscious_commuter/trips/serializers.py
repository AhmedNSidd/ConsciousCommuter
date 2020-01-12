from rest_framework import serializers

class TripSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    start = serializers.CharField(max_length=200)
    destination = serializers.CharField(max_length=200)
    mode_of_travel = serializers.CharField(max_length=50)
    distance = serializers.FloatField()
    roundtrip = serializers.BooleanField()
    number_of_trips_in_a_week = serializers.IntegerField()
