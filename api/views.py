from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from first.models import WorksFirst
from api.serializers import WorksModelSerializer


class WorksListView(generics.ListAPIView):
    queryset = WorksFirst.objects.all()
    # print('queryset')
    # print(queryset)
    serializer_class = WorksModelSerializer
