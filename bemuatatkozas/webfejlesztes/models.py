from django.db import models

class Csempe(models.Model):
    title = models.CharField(max_length=100)
    leiras = models.TextField()
    kep = models.ImageField(upload_to='csempék/')  # This will upload to MEDIA_ROOT/csempék/
    link = models.URLField()
    
    def __str__(self):
        return self.title