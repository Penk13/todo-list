from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound

from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

import os


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


# Add this CBV
class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
