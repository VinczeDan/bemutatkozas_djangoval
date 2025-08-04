from pathlib import Path
import os
import local_settings

BASE_DIR = Path(__file__).resolve().parent.parent



SECRET_KEY = local_settings.SECRET_KEY

DEBUG = True if local_settings.HOL_VAGYOK == 'otthon' else False

ALLOWED_HOSTS = ['139.59.208.20', 'webfizz.hu', 'www.webfizz.hu', 'localhost']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'webfejlesztes',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'bemutatkozas.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'bemutatkozas.wsgi.application'



if local_settings.HOL_VAGYOK == 'otthon':

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

elif local_settings.HOL_VAGYOK == 'droplet':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': local_settings.DB_NAME,
            'USER': local_settings.DB_USER,
            'PASSWORD': local_settings.DB_PASSWORD,
            'HOST': local_settings.DB_HOST,
            'PORT': '',
        }
    }



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]



LANGUAGE_CODE = 'en-us'

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'webfejlesztes', 'static'),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')


TIME_ZONE = 'UTC'

USE_I18N = True

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
USE_TZ = True

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'  # Vagy más SMTP szerver
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'daniel.vincze15@gmail.com'  # Az email cím, amiről küldöd
EMAIL_HOST_PASSWORD = local_settings.EMAIL_HOST_PASSWORD
DEFAULT_FROM_EMAIL = 'daniel.vincze15@gmail.com'
CONTACT_EMAIL = 'daniel.vincze15@gmail.com'  # A cél email cím


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

