# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.reverse import reverse
from first.models import WorksFirst


class WorksModelSerializer(serializers.ModelSerializer):
    # category_choices = serializers.CharField(source='get_category_display')

    class Meta:
        model = WorksFirst

        fields = ('id', 'username', 'datauser')
        ordering = ('id',)
