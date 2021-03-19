from django import forms
from base.models import User


class UserFrom(forms.ModelForm):
    CHOICES = [('male', 'Male'), ('female', 'Female'), ('other', 'Other'), ]
    gender = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect)

    class Meta:
        model = User
        fields = '__all__'

        labels = {
            'first_name': 'first name',
            'last_name': 'last name',
            'profile_pic': 'image',
            'docs': 'resume',
            'status': 'job type',
            'signup_confirmation': 'select only if you think above information probided by you is true and you are responsible for it.'
        }
