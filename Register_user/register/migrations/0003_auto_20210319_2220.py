# Generated by Django 3.1.7 on 2021-03-19 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0002_auto_20210319_2208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(default='default.jpg', upload_to='user_profile_pics/'),
        ),
    ]
