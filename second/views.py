# -*- coding: utf-8 -*-
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

from second.models import WorksModel


def SecondDef(request):
    # print('SecondDef')
    # print(request.GET)
    # print(request.GET.get('selectuser'))
    # print(request.GET.get('inputuser'))
    # works_add = WorksModel.objects.create(username=request.GET.get('inputuser'), datauser=request.GET.get('selectuser'))
    # print(works_add)
    return TemplateResponse(request, 'second.html')

def SecondDefFetch(request):

    """
    # по айди города получаем районы
    :param request:
    :return:
    """
    print('secondfetch')
    print('43536')
    dict1 = {}
    print(request.GET)
    print(request.GET.get('selectuser'))
    print(request.GET.get('inputuser'))
    works_add = WorksModel.objects.create(username=request.GET.get('inputuser'), datauser=request.GET.get('selectuser'))
    all_works_distinct = WorksModel.objects.values('datauser').distinct()
    all_works = WorksModel.objects.filter().values()
    # all_child = WorksModel.objects.filter(parent_id=city_id).values('name', 'id')
    # print('all_child')
    # print(all_child)
    #dict1['data']=list(works_add)# словарь в словаре для передачи json
    # print('dict1')
    # print(dict1)
    # return JsonResponse(works_add)
    return render(request, 'second_new.html', {'all_works_distinct':all_works_distinct, 'all_works': all_works})