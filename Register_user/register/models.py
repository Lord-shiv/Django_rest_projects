from django.db import models

GENDER_CHOICES = [
    ('m', 'male'),
    ('f', 'female'),
]


class Department(models.Model):
    name = models.CharField(max_length=250, unique=True)

    def __str__(self):
        return self.name


class User(models.Model):
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField('last name', max_length=150, blank=True)
    profile_pic = models.ImageField(
        upload_to='user_profile_pic/', default='default.jpg', )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.ForeignKey(Department, on_delete=models.CASCADE)
    salary = models.DecimalField(max_digits=6, decimal_places=2)
    about = models.TextField(max_length=1000, null=True)
    signup_confirmation = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
