from django.db import models

# Create your models here.
from django.utils import timezone


class CategoryModel(models.Model):
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        db_table = 'category'

    catname = models.CharField('Должнсть', max_length=15, blank=True)

    def publich(self):
        self.order_date = timezone.now()
        self.save()

    def __str__(self):
        return self.catname


class WorksFirst(models.Model):
    class Meta:
        verbose_name = 'Работники'
        verbose_name_plural = 'Работники'
        db_table = 'workers'

    username = models.CharField('Имя', max_length=15, blank=True)
    datauser = models.CharField('Должность',  max_length=15, blank=True, null=True)

    # def clean(self, exclude=None):
    #     pass
    def __str__(self):
        return str(self.username)
