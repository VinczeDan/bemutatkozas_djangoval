# Generated by Django 5.2.3 on 2025-06-14 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Csempe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kep', models.ImageField(upload_to='csempék/')),
                ('title', models.CharField(max_length=100)),
                ('leiras', models.TextField()),
                ('link', models.URLField()),
            ],
            options={
                'verbose_name': 'Csempe',
                'verbose_name_plural': 'Csempék',
            },
        ),
    ]
