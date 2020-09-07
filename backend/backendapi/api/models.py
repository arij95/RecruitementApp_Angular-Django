from django.db import models

# Create your models here.
class Employee(models.Model):
    Nom = models.CharField(max_length=30)
    Prenom  = models.CharField(max_length=30)
    Email  = models.EmailField(max_length=200, unique=True)
    Date_de_naissance= models.DateField(null = True)
    Num_tel = models.IntegerField(max_length=8, unique=True)
    Disponibilite= models.PositiveIntegerField(null = True)
    Experience= models.PositiveIntegerField(null = True)
    Cv= models.TextField(null = True)
    Message= models.TextField(null = True)
    Etat= models.TextField(max_length=30, default= "Nouvelle")

