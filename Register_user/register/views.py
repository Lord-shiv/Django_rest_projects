from django.shortcuts import render
from django.http import HttpResponse
from . forms import UserForm
from . models import User
# Create your views here.


def home(request):
    all_data = User.objects.all()
    if request.method == "POST":
        form = UserForm(request.POSt or None)
        if form.is_valid():
            form.save()
            messages.success(request, ("Added successfully"))
            return redirect("home")
    form = UserForm()
    context = {"form": form, "all_data": all_data}
    return render(request, 'register/index.html', context)


# def save_user(request):
#     user = UserForm(request.POST, request.FILES)
#     if user.is_valid():
#         user.save()
#         return HttpResponse("DATA SAVED")
#     else:
#         return render(request, 'add_user.html', {'form': user})
