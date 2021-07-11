from django.db.models import Count
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from second.models import WorksModel
from secondapi.serializers import WorksModelSerializerMain# SecondWorksModelSerializer


class SecondWorksListView(generics.ListAPIView):
    queryset = WorksModel.objects.order_by(('datauser')).values('datauser').distinct()
    # queryset = WorksModel.objects.values('datauser').annotate(id=Count('id')).order_by('datauser', 'username')
    print('queryset')
    print(queryset)
    serializer_class = WorksModelSerializerMain

class SecondWorksListAllView(generics.ListAPIView):
    queryset = WorksModel.objects.all()
    # queryset = WorksModel.objects.values('datauser').annotate(id=Count('id')).order_by('datauser', 'username')
    print('queryset')
    print(queryset)
    serializer_class = WorksModelSerializerMain
