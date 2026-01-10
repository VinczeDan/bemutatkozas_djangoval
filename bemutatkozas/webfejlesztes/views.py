from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Csempe
from .forms import ContactForm


def fooldal(request):
    csempék = Csempe.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # EMAIL AZ ADMINNAK
            send_mail(
                subject=f'Új kapcsolatfelvétel: {name}',
                message=f'''
Név: {name}
Email: {email}

Üzenet:
{message}
''',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )

            # AUTOMATA VÁLASZ
            EmailMessage(
                subject='Köszönjük üzenetét – WebFizz',
                body=f'''
Kedves {name}!

Köszönjük, hogy felvette velünk a kapcsolatot!
Megkaptuk az alábbi üzenetét:

"{message}"

Hamarosan válaszolunk!

Üdvözlettel:
WebFizz
''',
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[email],
            ).send()

            messages.success(request, 'Üzenet sikeresen elküldve!')
            return redirect('fooldal')

        else:
            messages.error(request, 'Hibás adatok!')

    else:
        form = ContactForm()

    return render(request, 'webfejlesztes/index.html', {
        'csempék': csempék,
        'form': form
    })
