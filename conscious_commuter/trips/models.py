import requests
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Trip(models.Model):
    '''This class models a profile with  fields.
    id -- The primary field of the Profile model.
    user -- A one-to-one field that is a user.
    cf_goal -- A int field to store a user's carbon footprint goals
    '''
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    start = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)
    mode_of_travel = models.CharField(max_length=50)
    distance = models.FloatField()
    carbon_footprint = models.FloatField()
    roundtrip = models.BooleanField(default=False)
    number_of_trips_in_a_week = models.IntegerField()

    @classmethod
    def create(cls, user, name, start, destination, mode_of_travel, distance, roundtrip, number_of_trips_in_a_week):
        URL = "https://api.triptocarbon.xyz/v1/footprint?activity={}&activityType=miles&mode={}&country=usa".format(distance, mode_of_travel)
        cf = requests.get(url=URL).json().get('carbonFootprint')
        trip = cls(user=user, name=name, start=start, destination=destination, mode_of_travel=mode_of_travel, distance=distance, carbon_footprint=cf, roundtrip=roundtrip, number_of_trips_in_a_week=number_of_trips_in_a_week)
        return trip

    def __str__(self):
        '''Used for string outputs for a profile'''
        return str(self.name)