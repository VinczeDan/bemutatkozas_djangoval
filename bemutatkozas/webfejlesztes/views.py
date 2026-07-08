import logging
from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from .models import Csempe
from .forms import ContactForm

logger = logging.getLogger(__name__)

def fooldal(request):
    csempék = Csempe.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            try:
                # 1. ADMIN EMAIL KÜLDÉSE
                send_mail(
                    subject=f"Új kapcsolatfelvétel: {name}",
                    message=f"Név: {name}\nEmail: {email}\nÜzenet:\n{message}", # Plain text verzió
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_EMAIL],
                    html_message=f"""
                    <p><strong>Név:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Üzenet:</strong><br>{message}</p>
                    """,
                    fail_silently=False,
                )

                # 2. AUTO VÁLASZ KÜLDÉSE A JELENTKEZŐNEK
                send_mail(
                    subject="Köszönjük üzenetét – WebFizz",
                    message=f"Kedves {name}!\n\nMegkaptuk az alábbi üzenetét:\n{message}\n\nHamarosan válaszolunk!\n\nÜdvözlettel,\nWebFizz",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[email],
                    html_message=f"""
                    <p>Kedves {name}!</p>
                    <p>Megkaptuk az alábbi üzenetét:</p>
                    <blockquote>{message}</blockquote>
                    <p>Hamarosan válaszolunk!</p>
                    <p>Üdvözlettel,<br>WebFizz</p>
                    """,
                    fail_silently=False,
                )

                messages.success(request, "Üzenet elküldve!")
                return redirect("fooldal")

            except Exception as e:
                logger.error(f"Szerver szintű e-mail küldési hiba: {e}")
                messages.error(request, "A küldés sikertelen volt. Kérjük, próbálja meg később!")
        else:
            messages.error(request, "Hibás adatok!")
    else:
        form = ContactForm()

    return render(request, "webfejlesztes/index.html", {
        "csempék": csempék,
        "form": form
    })