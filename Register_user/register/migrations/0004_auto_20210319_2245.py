# Generated by Django 3.1.7 on 2021-03-19 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0003_auto_20210319_2220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobtype',
            name='name',
            field=models.CharField(max_length=250),
        ),
    ]
