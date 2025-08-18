# from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Member
from django.db.models import Q

def members(request):
    # return HttpResponse("Hello world!")
    mymembers = Member.objects.all().values()
    template = loader.get_template("all_member.html")
    context = {
        'mymembers': mymembers,
    }
    return HttpResponse(template.render(context, request))


def details(request, id):
    mymember = Member.objects.get(id=id)
    template = loader.get_template('details.html')
    context = {
        'mymember': mymember,
    }
    return HttpResponse(template.render(context, request))


def main(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())


def testing(request):
  template = loader.get_template('template.html')
  context = {
    'fruits': ['Apple', 'Banana', 'Cherry'],   
  }
  return HttpResponse(template.render(context, request))


def test2(request):
    # select values for specific given field
    myDt = Member.objects.values_list('firstname')
    myDt2 = Member.objects.filter(firstname='Emil').values()
    myDt3 = Member.objects.filter(firstname__startswith='L')
    # other field lookups
    # https://www.w3schools.com/django/django_queryset_filter.php
    myDt4 = Member.objects.filter(joined_date__year='2024').values()

    myDt5 = Member.objects.filter(lastname='Refsnes', id=2).values()


    template = loader.get_template('test2.html')
    context = {
        'mymembers': myDt,
        'myDt2': myDt2,
        'myDt3': myDt3,
        'myDt4': myDt4,
        'myDt5': myDt5,
        # 'myDt6': myDt6,
    }
    return HttpResponse(template.render(context, request))


def test3(request):
    myDt = Member.objects.filter(firstname='Emil').values() | Member.objects.filter(firstname='Tobias').values()
        # OR
    myDt2 = Member.objects.filter(Q(firstname='Emil') | Q(firstname='Tobias')).values()

    myDt3 = Member.objects.all().order_by('firstname').values()

        # order not by firstname
    myDt4 = Member.objects.all().order_by('-firstname').values()
    myDt5 = Member.objects.all().order_by('firstname', '-id').values()

    template = loader.get_template('test3.html')
    context = {
        'myDt': myDt,
        'myDt2': myDt2,
        'myDt3': myDt3,
        'myDt4': myDt4,
        'myDt5': myDt5,
    }
    return HttpResponse(template.render(context, request))
