from django.db import models

# Create your models here.
from django.utils import timezone


class PositionModel(models.Model):
    class Meta:
        verbose_name = 'Должнсть'
        verbose_name_plural = 'Должнсть'
        db_table = 'position'

    positionname = models.CharField('Должнсть', max_length=15, blank=True)

    def publich(self):
        self.order_date = timezone.now()
        self.save()

    def __str__(self):
        return self.positionname

# 
# class Works(models.Model):
#     class Meta:
#         verbose_name = 'Работники'
#         verbose_name_plural = 'Работники'
#         db_table = 'secondworkers'
# 
#     username = models.CharField('Имя', max_length=15, blank=True)
#     datauser = models.ForeignKey(PositionModel, default=None, related_name='datauser', on_delete=models.CASCADE)
# 
#     # def clean(self, exclude=None):
#     #     pass
#     def __str__(self):
#         return str(self.username)

class WorksModel(models.Model):
    class Meta:
        verbose_name = 'Работники'
        verbose_name_plural = 'Работники'
        db_table = 'secondworkers_main'

    username = models.CharField('Имя', max_length=15, blank=True, null=True)
    datauser = models.CharField('Должность',  max_length=15, blank=True, null=True)

    # def clean(self, exclude=None):
    #     pass
    def __str__(self):
        return str(self.username)