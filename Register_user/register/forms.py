from django import forms


class UserForm(forms.Form):
    class Meta:
        model = User
        fields = "first_name, last_name, profile_pic, gender, email, phone, status, salary, about, signup_confirmation"
        labels = {
            'first_name': 'first name',
            'last_name': 'last name',
            'profile_pic': 'profile image',
            'salary': 'expected salary',
            'about': 'tell us about you.',
            'signup_confirmation': 'Select the box if are sure about the above filled data is true.'

        }
        widgets = {
            'gender': forms.RadioSelect()
        }
