"""react_django_hak URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api import views as api_views
from secondapi import views as secondapi_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('first.urls')),
    path('', include('second.urls')),
    path("api/",
         api_views.WorksListView.as_view(),
         name="api_list"),
    path("secondapi/",
         secondapi_views.SecondWorksListView.as_view(),
         name="secondapi"),
    path("secondapiall/",
         secondapi_views.SecondWorksListAllView.as_view(),
         name="secondapiall"),
]
