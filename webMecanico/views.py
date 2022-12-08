from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "Index.html")

def contacto(request):
    return render(request, "Contacto.html")

def categoria(request):
    # X_FRAME_OPTIONS = 'SAMEORIGIN'
    return render(request, "Categorias.html")

def nissan(request):
    return render(request, "Nissan.html")

def chevrolet(request):
    return render(request, "Chevrolet.html")

def honda(request):
    return render(request, "Honda.html")

def formTrabajo(request):
    return render(request, "FormularioTrabajos.html")



