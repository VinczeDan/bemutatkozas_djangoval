# views.py
from .models import Csempe
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.shortcuts import render, redirect
from .forms import ContactForm
from django.contrib import messages
from django.http import JsonResponse
from django.template.loader import render_to_string

def fooldal(request):
    csempék = Csempe.objects.all()
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Adatok kinyerése
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            
            # Email küldése a weboldal adminjának
            admin_subject = f'Új üzenet a weboldalon: {name}'
            admin_message = f'''
            Név: {name}
            Email: {email}
            Üzenet: {message}
            '''
            send_mail(
                admin_subject,
                admin_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],  # Ez most a daniel.vincze15@gmail.com lesz
                fail_silently=False,
            )
            
            # Automatikus válasz küldése a feladónak
            reply_subject = 'Köszönjük üzenetét - WebFizz'
            reply_message = f'''
            Kedves {name}!
            
            Köszönjük, hogy felvette velünk a kapcsolatot!
            Megkaptuk az alábbi üzenetedet:
            
            "{message}"
            
            Hamarosan válaszolunk!
            
            Üdvözlettel,
            A WebFizz csapata
            '''
            
            EmailMessage(
                reply_subject,
                reply_message,
                settings.DEFAULT_FROM_EMAIL,
                [email],
            ).send()
            
            messages.success(request, 'Köszönjük üzenetét! Hamarosan válaszolunk.')
            return redirect('fooldal')
        else:
            messages.error(request, 'Hiba történt az üzenet küldése közben. Kérjük, ellenőrizze az adatokat.')
    else:
        form = ContactForm()
    
    return render(request, 'webfejlesztes/index.html', {
        'csempék': csempék,
        'form': form
    })