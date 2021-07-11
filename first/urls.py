# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.urls import path

from first.views import FirstDef
# app_name = 'first'

urlpatterns = [
    path('first/', FirstDef, name='first'),

]
