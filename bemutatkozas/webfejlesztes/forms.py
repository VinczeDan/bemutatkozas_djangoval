from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label='Név', max_length=100, widget=forms.TextInput(attrs={
        'placeholder': 'Név/ Name',
        'required': 'required'
    }))
    email = forms.EmailField(label='E-mail', widget=forms.EmailInput(attrs={
        'placeholder': 'E-mail',
        'required': 'required'
    }))
    message = forms.CharField(label='Üzenet', widget=forms.Textarea(attrs={
        'placeholder': 'Üzenet/ Message',
        'required': 'required',
        'rows': 5
    }))