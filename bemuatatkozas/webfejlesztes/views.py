from django.shortcuts import render

def fooldal(request):
    return render(request, "index.html")