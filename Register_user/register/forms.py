from django import forms
from . models import User, JobType


class UserForm(forms.ModelForm):
    CHOICES = [('male', 'Male'), ('female', 'Female'), ('other', 'Other'), ]
    gender = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect)

    class Meta:
        model = User
        fields = '__all__'

        labels = {
            'first_name': 'First name',
            'last_name': 'Last name',
            'profile_pic': 'Image',
            'docs': 'Resume',
            'status': 'Position',
            'salary': 'Expected Salary',
            'signup_confirmation': 'select only if you think above information probided by you is true and you are responsible for it.'
        }

    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        self.fields['status'].empty_label = 'Select here'
