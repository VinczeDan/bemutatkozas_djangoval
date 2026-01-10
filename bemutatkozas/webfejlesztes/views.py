import requests
from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Csempe
from .forms import ContactForm
import logging

logger = logging.getLogger(__name__)

BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"

def send_brevo_email(subject, html_content, to_email):
    headers = {
        "api-key": settings.BREVO_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    data = {
        "sender": {
            "name": "WebFizz",
            "email": settings.DEFAULT_FROM_EMAIL,
        },
        "to": [
            {"email": to_email}
        ],
        "subject": subject,
        "htmlContent": html_content,
    }

    try:
        response = requests.post(BREVO_API_URL, json=data, headers=headers, timeout=10)
        response.raise_for_status()
        logger.info(f"Email sikeresen elküldve: {to_email}")
    except requests.RequestException as e:
        # Hiba esetén logoljuk, de az oldal nem omlik össze
        logger.error(f"Email küldési hiba {to_email}: {e}")


def fooldal(request):
    csempék = Csempe.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # ADMIN EMAIL
            send_brevo_email(
                subject=f"Új kapcsolatfelvétel: {name}",
                html_content=f"""
                <p><strong>Név:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Üzenet:</strong><br>{message}</p>
                """,
                to_email=settings.CONTACT_EMAIL,
            )

            # AUTO VÁLASZ
            send_brevo_email(
                subject="Köszönjük üzenetét – WebFizz",
                html_content=f"""
                <p>Kedves {name}!</p>
                <p>Megkaptuk az alábbi üzenetét:</p>
                <blockquote>{message}</blockquote>
                <p>Hamarosan válaszolunk!</p>
                <p>Üdvözlettel,<br>WebFizz</p>
                """,
                to_email=email,
            )

            messages.success(request, "Üzenet elküldve!")
            return redirect("fooldal")
        else:
            messages.error(request, "Hibás adatok!")
    else:
        form = ContactForm()

    return render(request, "webfejlesztes/index.html", {
        "csempék": csempék,
        "form": form
    })

