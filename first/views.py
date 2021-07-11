# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def FirstDef(request):
    return TemplateResponse(request, 'first.html')