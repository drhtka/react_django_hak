# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.reverse import reverse
from second.models import WorksModel


# class SecondWorksModelSerializer(serializers.ModelSerializer):
#     # category_choices = serializers.CharField(source='get_category_display')
#
#     class Meta:
#         model = Works
#
#         fields = ('id', 'username', 'datauser')
#         ordering = ('id',)

class WorksModelSerializerMain(serializers.ModelSerializer):
    # category_choices = serializers.CharField(source='get_category_display')

    class Meta:
        model = WorksModel

        fields = ('id', 'username', 'datauser')
        ordering = ('id',)