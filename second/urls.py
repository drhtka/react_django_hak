# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from second.views import SecondDef, SecondDefFetch
# app_name = 'first'

urlpatterns = [
    path('second/', SecondDef, name='second'),
    path('secondfetch/', SecondDefFetch, name='secondfetch'),

]
