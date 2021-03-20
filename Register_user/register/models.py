from django.db import models


class JobType(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class User(models.Model):
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField('last name', max_length=150, blank=True)
    profile_pic = models.ImageField(
        upload_to='user_profile_pics/', default='default.jpg', )
    gender = models.CharField(max_length=50)
    email = models.EmailField(blank=True, unique=True)
    docs = models.FileField(upload_to="user_docs/", null=True)
    phone = models.CharField(max_length=50, null=True, unique=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.ForeignKey(JobType, on_delete=models.CASCADE)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    about = models.TextField(max_length=1000, null=True)
    signup_confirmation = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name
