from django.shortcuts import render
from .models import Csempe

def fooldal(request):
    csempék = Csempe.objects.all()
    return render(request, 'webfejlesztes/index.html', {'csempék': csempék})