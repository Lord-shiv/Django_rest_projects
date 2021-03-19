from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def add_user(request):
    return render(request, 'add.html', {'form': UserForm()})


def save_user(request):
    user = UserForm(request.POST, request.FILES)
    if user.is_valid():
        user.save()
        return HttpResponse("DATA SAVED")
    else:
        return render(request, 'add_user.html', {'form': user})
