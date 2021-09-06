from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
