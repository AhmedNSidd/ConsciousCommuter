import uuid
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.db import models
from django.dispatch import receiver

class Profile(models.Model):
    '''This class models a profile with 7 fields.
    id -- The primary field of the Profile model.
    user -- A one-to-one field that is a user.
    cf_goal -- A int field to store a user's carbon footprint goals
    '''
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)

    def __str__(self):
        '''Used for string outputs for a profile'''
        return str(self.full_name)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    '''Creates a profile when a user object is created.'''
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    '''Saves a profile when a profile object is created.'''
    instance.profile.save()