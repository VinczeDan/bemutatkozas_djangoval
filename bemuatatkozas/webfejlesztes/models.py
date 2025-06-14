from django.db import models

class Csempe(models.Model):
    kep = models.ImageField(upload_to='csempék/')
    title = models.CharField(max_length=100)
    leiras = models.TextField()
    link = models.URLField()
    
    class Meta:
        verbose_name = "Csempe"
        verbose_name_plural = "Csempék"
    
    def __str__(self):
        return self.title