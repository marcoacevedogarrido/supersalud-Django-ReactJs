from rest_framework import serializers, viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
from rest_framework.views import APIView
from rest_framework import status
import json

from server.models import  Instancia, Representante, Cotizante, \
    Afectado, Comuna, Provincia, Region, Sexo, \
    Genero, Nacionalidad, Aseguradora, Process_Definition, \
    Tipo_Reclamo, Materia, Sub_Materia, Prestador, \
    Tipo_Prioridad

from server.api.representantes import RepresentanteSerializer
from server.api.process_definition import ProcessInstanceSerializer
from server.api.tipo_prioridad import Tipo_PrioridadSerializer
from server.api.cotizante import CotizanteSerializers
from server.api.materias import MateriaSerializer
from server.api.submaterias import SubmateriaSerializer
from server.api.tipos_reclamos import TipoReclamoSerializer
from server.api.regiones import RegionSerializer
from server.api.provincias import ProvinciaSerializer
from server.api.comunas import ComunaSerializer

class InstanciaSerializers(serializers.ModelSerializer):
    representante = RepresentanteSerializer()
    process_definition = ProcessInstanceSerializer()
    triage = Tipo_PrioridadSerializer()
    cotizante = CotizanteSerializers()
    materia = MateriaSerializer()
    sub_materia = SubmateriaSerializer()
    tipo_reclamo = TipoReclamoSerializer()
    region = RegionSerializer()
    provincia = ProvinciaSerializer()
    comuna = ComunaSerializer()

    class Meta:
        model = Instancia
        fields = "__all__"
        


class InstanciaFuriaView(APIView):

    def post(self, request):
        body = request.body.decode('utf-8')
        json_body = json.loads(body)
        # print(json_body)

        # Variables
        n_reclamo = json_body['folio']
        lugar_uno = json_body['lugar_uno']
        pdf_dec_jur = json_body['pdf_dec_jur']
        archivo_adj_cuatro = json_body['archivo_adj_cuatro']
        tipo_beneficiario = json_body['tipo_beneficiario']
        complaint_id = json_body['complaint_id']
        v_correo_not = json_body['v_correo_not']
        hasta_dos = json_body['hasta_dos']
        desde_uno = '2020-05-10' if json_body['desde_uno'] == "" or json_body['desde_uno'] == None else json_body['desde_uno']
        pdf_poder_simple_her = json_body['pdf_poder_simple_her']
        solicitud_concreta = json_body['solicitud_concreta']
        lugar_tres = json_body['lugar_tres']
        pdf_unico = json_body['pdf_unico']
        pdf_cer_def = json_body['pdf_cer_def']
        submateria = json_body['submateria']
        archivo_adj_dos = json_body['archivo_adj_dos']
        hasta_uno = '2020-06-10' if json_body['hasta_uno'] == "" or json_body['hasta_uno'] == None else json_body['hasta_uno']
        desde_dos = json_body['desde_dos']
        notificar_tramite_id = json_body['notificar_tramite_id']
        desde_tres = json_body['desde_tres']
        desc_problema = json_body['desc_problema']
        hasta_tres = json_body['hasta_tres']
        lugar_dos = json_body['lugar_dos']
        hecho_ano = json_body['hecho_ano']
        pdf_cer_nac_her = json_body['pdf_cer_nac_her']
        correo_not = json_body['correo_not']
        notificacion = json_body['notificacion']
        archivo_adj_uno = json_body['archivo_adj_uno']
        tipo_reclamo = json_body['tipo_reclamo']
        categoria_clasificador = json_body['categoria_clasificador']
        folio = json_body['folio']
        materia = json_body['materia']
        pk = json_body['pk']
        aseguradora = json_body['aseguradora']
        triage = 1 if json_body['triage'] == "" or json_body['triage'] == None or json_body['triage'] == 0 else json_body['triage']
        hospitalizacion = json_body['hospitalizacion']
        hecho_mes = json_body['hecho_mes']

        # Representante
        genero_rep = json_body['genero_rep']
        sexo_rep = json_body['sexo_rep']
        nacionalidad_rep = json_body['nacionalidad_rep']
        run_rep = 0 if json_body['run_rep'] == "" or json_body['run_rep'] == None else json_body['run_rep']
        comuna_rep = json_body['comuna_rep']
        region_rep = json_body['region_rep']
        direccion_tipo_rep = json_body['direccion_tipo_rep']
        fecha_nac_rep = json_body['fecha_nac_rep']
        copia_ced_rep = json_body['copia_ced_rep']
        email_rep = json_body['email_rep']
        apellido_p_rep = json_body['apellido_p_rep']
        edad_rep = json_body['edad_rep']
        dv_rep = json_body['dv_rep']
        nombre_rep = json_body['nombre_rep']
        apellido_m_rep = json_body['apellido_m_rep']
        direccion_nombre_rep = json_body['direccion_nombre_rep']
        archivo_adj_tres = json_body['archivo_adj_tres']
        tipo_rep = json_body['tipo_rep']
        poder_simple_rep = json_body['poder_simple_rep']
        telefono_uno_rep = json_body['telefono_uno_rep']
        telefono_dos_rep = json_body['telefono_dos_rep']
        direccion_depto_rep = json_body['direccion_depto_rep']
        direccion_nro_rep = json_body['direccion_nro_rep']

        # Paciente / Afectado
        genero_pac = json_body['genero_pac'] 
        sexo_pac = json_body['sexo_pac']
        apellido_m_pac = json_body['apellido_m_pac']
        apellido_p_pac = json_body['apellido_p_pac']
        nombre_pac = json_body['nombre_pac']
        edad_pac = 0 if json_body['edad_pac'] == "" or json_body['edad_pac'] == None else json_body['edad_pac']
        fallece_pac = json_body['fallece_pac']
        dv_pac = json_body['dv_pac']
        run_pac = 0 if json_body['run_pac'] == "" or json_body['run_pac'] == None else json_body['run_pac']
        tipo_pac = False if json_body['tipo_pac'] == "" or json_body['tipo_pac'] == None else json_body['tipo_pac']
        fecha_nacimiento_pac = '2020-10-01' if json_body['fecha_nacimiento_pac'] == "" or json_body['fecha_nacimiento_pac'] == None else json_body['fecha_nacimiento_pac']

        # Cotizante / Reclamante
        sexo_cot = json_body['sexo_cot']
        nacionalidad_cot = json_body['nacionalidad_cot']
        region_cot = json_body['region_cot']
        direccion_tipo_cot = json_body['direccion_tipo_cot']        
        comuna_cot = json_body['comuna_cot']
        genero_cot = json_body['genero_cot']
        dv_cot = json_body['dv_cot']
        nombre_cot = json_body['nombre_cot']
        apellido_m_cot = json_body['apellido_m_cot']
        correo_cot = json_body['correo_cot']
        pdf_cedula_cot = json_body['pdf_cedula_cot']
        telefono_uno_cot = json_body['telefono_uno_cot']
        apellido_p_cot = json_body['apellido_p_cot']
        edad_cot = json_body['edad_cot']
        run_cot = 0 if json_body['run_cot'] == "" or json_body['run_cot'] == None else json_body['run_cot']
        direccion_depto_cot = json_body['direccion_depto_cot']
        telefono_dos_cot = json_body['telefono_dos_cot']
        direccion_nombre_cot = json_body['direccion_nombre_cot']
        direccion_nro_cot = json_body['direccion_nro_cot']
        fecha_nacimiento_cot = '2020-10-10' if json_body['fecha_nacimiento_cot'] == "" or json_body['fecha_nacimiento_cot'] == None else json_body['fecha_nacimiento_cot']

        # Antes de crear los otros objetos, hay que traer los que existe: comuna, region, nacionalidad
        # genero, sexo, aseguradora, provincia

        # Como la aseguradora siempre viene, no es necesario que entre al if/elif/else
        # Aseguradora
        aseguradora_id = 99 if aseguradora['codigo_isapre'] == "" or aseguradora['codigo_isapre'] == None or aseguradora['codigo_isapre'] == 0 else aseguradora['codigo_isapre']
        aseguradora_obj = Aseguradora.objects.get(codigo_isapre=aseguradora_id)

        # Lo mismo para el cotizante
        sexo_cot_id = 3 if sexo_cot['id'] == "" or sexo_cot['id'] == None or sexo_cot['id'] == 0 else sexo_cot['id']
        sexo_obj_cot = Sexo.objects.get(id=sexo_cot_id)
        genero_cot_id = 3 if genero_cot['id'] == "" or genero_cot['id'] == None or genero_cot['id'] == 0 else genero_cot['id']
        genero_obj_cot = Genero.objects.get(id=genero_cot_id)
        nacionalidad_cot_id = 38 if nacionalidad_cot['codigo'] == "" or nacionalidad_cot['codigo'] == None or nacionalidad_cot['codigo'] == 0 else nacionalidad_cot['codigo']
        nacionalidad_obj_cot = Nacionalidad.objects.get(id=nacionalidad_cot_id)
        region_cot_id = 13 if region_cot['region_id'] == "" or region_cot['region_id'] == None or region_cot['region_id'] == 0 else region_cot['region_id']
        region_obj_cot = Region.objects.get(codigo_region=region_cot_id)
        provincia_cot_id = 131 if comuna_cot['comuna_provincia_id'] == "" or comuna_cot['comuna_provincia_id'] == None  or comuna_cot['comuna_provincia_id'] == 0 else comuna_cot['comuna_provincia_id']
        provincia_obj_cot = Provincia.objects.get(codigo_provincia=provincia_cot_id)
        comuna_cot_id = 13101 if comuna_cot['comuna_id'] == "" or comuna_cot['comuna_id'] == None  or comuna_cot['comuna_id'] == 0 else comuna_cot['comuna_id']
        comuna_obj_cot = Comuna.objects.get(codigo_comuna=comuna_cot_id, provincia=provincia_obj_cot)

        try:
            cotizante = Cotizante.objects.get(rut=run_cot, dv=dv_cot)
            print("El cotizante ya esta ingresado en el sistema")
        except:
            cotizante = Cotizante.objects.create(
                rut = run_cot,
                dv = json_body['dv_cot'],
                nombres = json_body['nombre_cot'],
                apellido_materno = json_body['apellido_m_cot'],
                apellido_paterno = json_body['apellido_p_cot'],
                nacionalidad = nacionalidad_obj_cot,
                genero = genero_obj_cot,
                sexo = sexo_obj_cot,
                fecha_nacimiento = fecha_nacimiento_cot,
                aseguradora = aseguradora_obj,
                telefono_contacto_uno = json_body['telefono_uno_cot'],
                telefono_contacto_dos = json_body['telefono_dos_cot'],
                correo_electronico = json_body['correo_cot'],
                region = region_obj_cot,
                provincia = provincia_obj_cot,
                comuna = comuna_obj_cot,
                direccion_nombre_calle = json_body['direccion_nombre_cot'],
                direccion_numero_calle = json_body['direccion_nro_cot'],
                direccion_departamento = json_body['direccion_tipo_cot']
            )
        

        # Analizar tipo_pac y tipo_rep
        if tipo_pac == False and tipo_rep == False:
            print("Las variables _pac y _rep vienen")

            # Sexo
            sexo_pac_id = 3 if sexo_pac['id'] == "" or sexo_pac['id'] == None or sexo_pac['id'] == 0 else sexo_pac['id']
            # sexo_cot_id = 3 if sexo_cot['id'] == "" or sexo_cot['id'] == None or sexo_cot['id'] == 0 else sexo_cot['id']
            sexo_rep_id = 3 if sexo_rep['id'] == "" or sexo_rep['id'] == None or sexo_rep['id'] == 0 else sexo_rep['id']
            sexo_obj_pac = Sexo.objects.get(id=sexo_pac_id)
            # sexo_obj_cot = Sexo.objects.get(id=sexo_cot_id)
            sexo_obj_rep = Sexo.objects.get(id=sexo_rep_id)

            # Genero
            genero_pac_id = 3 if genero_pac['id'] == "" or genero_pac['id'] == None or genero_pac['id'] == 0 else genero_pac['id']
            # genero_cot_id = 3 if genero_cot['id'] == "" or genero_cot['id'] == None or genero_cot['id'] == 0 else genero_cot['id']
            genero_rep_id = 3 if genero_rep['id'] == "" or genero_rep['id'] == None or genero_rep['id'] == 0 else genero_rep['id']
            genero_obj_pac = Genero.objects.get(id=genero_pac_id)
            # genero_obj_cot = Genero.objects.get(id=genero_cot_id)
            genero_obj_rep = Genero.objects.get(id=genero_rep_id)

            # Nacionalidad
            # nacionalidad_cot_id = 38 if nacionalidad_cot['codigo'] == "" or nacionalidad_cot['codigo'] == None or nacionalidad_cot['codigo'] == 0 else nacionalidad_cot['codigo']
            nacionalidad_rep_id = 38 if nacionalidad_rep['codigo'] == "" or nacionalidad_rep['codigo'] == None or nacionalidad_rep['codigo'] == 0 else nacionalidad_rep['codigo']
            # nacionalidad_obj_cot = Nacionalidad.objects.get(id=nacionalidad_cot_id)
            nacionalidad_obj_rep = Nacionalidad.objects.get(id=nacionalidad_rep_id)

            # Region 
            # region_cot_id = 13 if region_cot['region_id'] == "" or region_cot['region_id'] == None or region_cot['region_id'] == 0 else region_cot['region_id']
            region_rep_id = 13 if region_rep['region_id'] == "" or region_rep['region_id'] == None or region_rep['region_id'] == 0 else region_rep['region_id']
            # region_obj_cot = Region.objects.get(codigo_region=region_cot_id)
            region_obj_rep = Region.objects.get(codigo_region=region_rep_id)

            # Provincia 
            # provincia_cot_id = 131 if comuna_cot['comuna_provincia_id'] == "" or comuna_cot['comuna_provincia_id'] == None  or comuna_cot['comuna_provincia_id'] == 0 else comuna_cot['comuna_provincia_id']
            provincia_rep_id = 131 if comuna_rep['comuna_provincia_id'] == "" or comuna_rep['comuna_provincia_id'] == None  or comuna_rep['comuna_provincia_id'] == 0 else comuna_rep['comuna_provincia_id']
            # provincia_obj_cot = Provincia.objects.get(codigo_provincia=provincia_cot_id)
            provincia_obj_rep = Provincia.objects.get(codigo_provincia=provincia_rep_id)

            # Comuna
            # comuna_cot_id = 13101 if comuna_cot['comuna_id'] == "" or comuna_cot['comuna_id'] == None  or comuna_cot['comuna_id'] == 0 else comuna_cot['comuna_id']
            comuna_rep_id = 13101 if comuna_rep['comuna_id'] == "" or comuna_rep['comuna_id'] == None  or comuna_rep['comuna_id'] == 0 else comuna_rep['comuna_id']
            # comuna_obj_cot = Comuna.objects.get(codigo_comuna=comuna_cot_id, provincia=provincia_obj_cot)
            comuna_obj_rep = Comuna.objects.get(codigo_comuna=comuna_rep_id, provincia=provincia_obj_rep)


            # Representante
            try:

                representante = Representante.objects.get(rut = run_rep, dv = json_body['dv_rep'])
                print("Representante existe, hay que asociar la instancia") 
            
            except:
                print(nombre_rep)
                print("Representante nuevo")
                representante = Representante.objects.create(
                    rut = run_rep,
                    dv = json_body['dv_rep'],
                    nombres = json_body['nombre_rep'],
                    apellido_paterno = json_body['apellido_p_rep'],
                    apellido_materno = json_body['apellido_m_rep'],
                    nacionalidad = nacionalidad_obj_rep,
                    sexo = sexo_obj_rep,
                    genero = genero_obj_rep,
                    # fecha_nacimiento = json_body['fecha_nac_rep'],
                    fecha_nacimiento = '2020-12-04',
                    aseguradora = aseguradora_obj,
                    telefono_contacto_uno = json_body['telefono_uno_rep'],
                    telefono_contacto_dos = json_body['telefono_dos_rep'],
                    correo_electronico = json_body['email_rep'],
                    region = region_obj_rep,
                    provincia = provincia_obj_rep,
                    comuna = comuna_obj_rep,
                    direccion_nombre_calle = json_body['direccion_nombre_rep'],
                    direccion_numero_calle = json_body['direccion_nro_rep'],
                    direccion_departamento = json_body['direccion_depto_rep']
                )
                

            try: 
                paciente = Afectado.objects.get(rut=run_pac, dv=dv_pac)
                print("El paciente ya esta ingresado en el sistema")
            except:
                paciente = Afectado.objects.create(
                    rut = run_pac,
                    dv = json_body['dv_pac'],
                    apellido_paterno = json_body['apellido_p_pac'],
                    apellido_materno = json_body['apellido_m_pac'],
                    genero = genero_obj_pac,
                    sexo = sexo_obj_pac,
                    fecha_nacimiento = fecha_nacimiento_pac,
                    edad = json_body['edad_pac'],
                    nombre = json_body['nombre_pac'],
                    tipo_pac = json_body['tipo_pac'],
                    fallece_pac = json_body['fallece_pac']
                )
                print(paciente)

            try:
                cotizante = Cotizante.objects.get(rut=run_cot, dv=dv_cot)
                print("El cotizante ya esta ingresado en el sistema")
            except:
                cotizante = Cotizante.objects.create(
                    rut = run_cot,
                    dv = json_body['dv_cot'],
                    nombres = json_body['nombre_cot'],
                    apellido_materno = json_body['apellido_m_cot'],
                    apellido_paterno = json_body['apellido_p_cot'],
                    nacionalidad = nacionalidad_obj_cot,
                    genero = genero_obj_cot,
                    sexo = sexo_obj_cot,
                    fecha_nacimiento = fecha_nacimiento_cot,
                    aseguradora = aseguradora_obj,
                    telefono_contacto_uno = json_body['telefono_uno_cot'],
                    telefono_contacto_dos = json_body['telefono_dos_cot'],
                    correo_electronico = json_body['correo_cot'],
                    region = region_obj_cot,
                    provincia = provincia_obj_cot,
                    comuna = comuna_obj_cot,
                    direccion_nombre_calle = json_body['direccion_nombre_cot'],
                    direccion_numero_calle = json_body['direccion_nro_cot'],
                    direccion_departamento = json_body['direccion_tipo_cot']
                )

            # Ahora creamos la instancia
            proces_definition = Process_Definition.objects.get(id=1)
            materia_obj = Materia.objects.get(id=1)
            sub_materia_obj = Sub_Materia.objects.get(id=1)
            tipo_reclamo_obj = Tipo_Reclamo.objects.get(id=1)
            prestador_obj = Prestador.objects.get(id=1)
            prioridad = Tipo_Prioridad.objects.get(codigo=triage)
            instancia = Instancia.objects.create(
                origen_reclamo = "Furia",
                complaintId = json_body['complaint_id'],
                original_json = body,
                n_reclamo = n_reclamo,
                cotizante = cotizante,
                afectado = paciente,
                representante = representante,
                aseguradora = aseguradora_obj,
                prestador = prestador_obj,
                region = region_obj_rep,
                provincia = provincia_obj_rep,
                comuna = comuna_obj_rep,
                process_definition = proces_definition,
                descripcion_problema = json_body['desc_problema'],
                explicacion = "",
                es_reclamante_y_afectado = True,
                notificacion_electronica = json_body['notificacion'],
                correo_electronico_notificacion = "",
                comentarios = "",
                materia = materia_obj,
                sub_materia = sub_materia_obj,
                fecha_limite = '2020-01-12',
                folio = "",
                triage = prioridad,
                canal_ingreso = "",
                fecha_reclamo_prestador = '2020-01-12',
                fecha_carta_respuesta = '2020-01-12',
                fecha_limite_respuesta_prestador = hasta_uno,
                fecha_inicio_para_prestar_reclamo = desde_uno,
                fecha_fin_para_prestar_reclamo = '2020-01-12',
                tipo_reclamo = tipo_reclamo_obj,
                fecha_desde = '2020-01-12',
                fecha_hasta = '2020-01-12'
            )
            serializer = InstanciaSerializers(instancia)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        elif tipo_pac == True and tipo_rep == False:
            print("Las _rep viene y las _pac no")
            sexo_rep_id = 3 if sexo_rep['id'] == "" or sexo_rep['id'] == None or sexo_rep['id'] == 0 else sexo_rep['id']
            sexo_obj_rep = Sexo.objects.get(id=sexo_rep_id)
            genero_rep_id = 3 if genero_rep['id'] == "" or genero_rep['id'] == None or genero_rep['id'] == 0 else genero_rep['id']
            genero_obj_rep = Genero.objects.get(id=genero_rep_id)
            nacionalidad_rep_id = 38 if nacionalidad_rep['codigo'] == "" or nacionalidad_rep['codigo'] == None or nacionalidad_rep['codigo'] == 0 else nacionalidad_rep['codigo']
            region_rep_id = 13 if region_rep['region_id'] == "" or region_rep['region_id'] == None or region_rep['region_id'] == 0 else region_rep['region_id']
            region_obj_rep = Region.objects.get(codigo_region=region_rep_id)
            provincia_rep_id = 131 if comuna_rep['comuna_provincia_id'] == "" or comuna_rep['comuna_provincia_id'] == None  or comuna_rep['comuna_provincia_id'] == 0 else comuna_rep['comuna_provincia_id']
            provincia_obj_rep = Provincia.objects.get(codigo_provincia=provincia_rep_id)
            comuna_rep_id = 13101 if comuna_rep['comuna_id'] == "" or comuna_rep['comuna_id'] == None  or comuna_rep['comuna_id'] == 0 else comuna_rep['comuna_id']
            comuna_obj_rep = Comuna.objects.get(codigo_comuna=comuna_rep_id, provincia=provincia_obj_rep)

            try:

                representante = Representante.objects.get(rut = run_rep, dv = json_body['dv_rep'])
                print("Representante existe, hay que asociar la instancia") 
            
            except:
                print(nombre_rep)
                print("Representante nuevo")
                representante = Representante.objects.create(
                    rut = run_rep,
                    dv = json_body['dv_rep'],
                    nombres = json_body['nombre_rep'],
                    apellido_paterno = json_body['apellido_p_rep'],
                    apellido_materno = json_body['apellido_m_rep'],
                    nacionalidad = nacionalidad_obj_rep,
                    sexo = sexo_obj_rep,
                    genero = genero_obj_rep,
                    # fecha_nacimiento = json_body['fecha_nac_rep'],
                    fecha_nacimiento = '2020-12-04',
                    aseguradora = aseguradora_obj,
                    telefono_contacto_uno = json_body['telefono_uno_rep'],
                    telefono_contacto_dos = json_body['telefono_dos_rep'],
                    correo_electronico = json_body['email_rep'],
                    region = region_obj_rep,
                    provincia = provincia_obj_rep,
                    comuna = comuna_obj_rep,
                    direccion_nombre_calle = json_body['direccion_nombre_rep'],
                    direccion_numero_calle = json_body['direccion_nro_rep'],
                    direccion_departamento = json_body['direccion_depto_rep']
                )
            # Ahora creamos la instancia
            proces_definition = Process_Definition.objects.get(id=1)
            materia_obj = Materia.objects.get(id=1)
            sub_materia_obj = Sub_Materia.objects.get(id=1)
            tipo_reclamo_obj = Tipo_Reclamo.objects.get(id=1)
            prestador_obj = Prestador.objects.get(id=1)
            prioridad = Tipo_Prioridad.objects.get(codigo=triage)
            instancia = Instancia.objects.create(
                origen_reclamo = "Furia",
                complaintId = json_body['complaint_id'],
                original_json = body,
                n_reclamo = n_reclamo,
                cotizante = cotizante,
                # afectado = paciente, tipo_pac == True
                representante = representante,
                aseguradora = aseguradora_obj,
                prestador = prestador_obj,
                region = region_obj_rep,
                provincia = provincia_obj_rep,
                comuna = comuna_obj_rep,
                process_definition = proces_definition,
                descripcion_problema = json_body['desc_problema'],
                explicacion = "",
                es_reclamante_y_afectado = False,
                notificacion_electronica = json_body['notificacion'],
                correo_electronico_notificacion = "",
                comentarios = "",
                materia = materia_obj,
                sub_materia = sub_materia_obj,
                fecha_limite = '2020-01-12',
                folio = "",
                triage = prioridad,
                canal_ingreso = "",
                fecha_reclamo_prestador = '2020-01-12',
                fecha_carta_respuesta = '2020-01-12',
                fecha_limite_respuesta_prestador = hasta_uno,
                fecha_inicio_para_prestar_reclamo = desde_uno,
                fecha_fin_para_prestar_reclamo = '2020-01-12',
                tipo_reclamo = tipo_reclamo_obj,
                fecha_desde = '2020-01-12',
                fecha_hasta = '2020-01-12'
            )
            serializer = InstanciaSerializers(instancia)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        elif tipo_pac == False and tipo_rep == True:
            print("Las _pac viene y las _rep no")
            sexo_pac_id = 3 if sexo_pac['id'] == "" or sexo_pac['id'] == None or sexo_pac['id'] == 0 else sexo_pac['id']
            sexo_obj_pac = Sexo.objects.get(id=sexo_pac_id)
            genero_pac_id = 3 if genero_pac['id'] == "" or genero_pac['id'] == None or genero_pac['id'] == 0 else genero_pac['id']
            genero_obj_pac = Genero.objects.get(id=genero_pac_id)

            try: 
                paciente = Afectado.objects.get(rut=run_pac, dv=dv_pac)
                print("El paciente ya esta ingresado en el sistema")
            except:
                paciente = Afectado.objects.create(
                    rut = run_pac,
                    dv = json_body['dv_pac'],
                    apellido_paterno = json_body['apellido_p_pac'],
                    apellido_materno = json_body['apellido_m_pac'],
                    genero = genero_obj_pac,
                    sexo = sexo_obj_pac,
                    fecha_nacimiento = fecha_nacimiento_pac,
                    edad = json_body['edad_pac'],
                    nombre = json_body['nombre_pac'],
                    tipo_pac = json_body['tipo_pac'],
                    fallece_pac = json_body['fallece_pac']
                )
            proces_definition = Process_Definition.objects.get(id=1)
            materia_obj = Materia.objects.get(id=1)
            sub_materia_obj = Sub_Materia.objects.get(id=1)
            tipo_reclamo_obj = Tipo_Reclamo.objects.get(id=1)
            prestador_obj = Prestador.objects.get(id=1)
            prioridad = Tipo_Prioridad.objects.get(codigo=triage)
            instancia = Instancia.objects.create(
                origen_reclamo = "Furia",
                complaintId = json_body['complaint_id'],
                original_json = body,
                n_reclamo = n_reclamo,
                cotizante = cotizante,
                afectado = paciente,
                # representante = representante, tipo_rep == True
                aseguradora = aseguradora_obj,
                prestador = prestador_obj,
                region = region_obj_rep,
                provincia = provincia_obj_rep,
                comuna = comuna_obj_rep,
                process_definition = proces_definition,
                descripcion_problema = json_body['desc_problema'],
                explicacion = "",
                es_reclamante_y_afectado = False,
                notificacion_electronica = json_body['notificacion'],
                correo_electronico_notificacion = "",
                comentarios = "",
                materia = materia_obj,
                sub_materia = sub_materia_obj,
                fecha_limite = '2020-01-12',
                folio = "",
                triage = prioridad,
                canal_ingreso = "",
                fecha_reclamo_prestador = '2020-01-12',
                fecha_carta_respuesta = '2020-01-12',
                fecha_limite_respuesta_prestador = hasta_uno,
                fecha_inicio_para_prestar_reclamo = desde_uno,
                fecha_fin_para_prestar_reclamo = '2020-01-12',
                tipo_reclamo = tipo_reclamo_obj,
                fecha_desde = '2020-01-12',
                fecha_hasta = '2020-01-12'
            )
            serializer = InstanciaSerializers(instancia)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:
            print("Solo viene el cotizante")


class InstanciasView(APIView):

    def get(self, request, format=None):
        query =  Instancia.objects.all()
        serializers = InstanciaSerializers(query, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)


class IntanciaDetailView(APIView):

    def get(self, request, pk, format=None):
        query = Instancia.objects.get(id=pk)
        serializers = InstanciaSerializers(query)
        return Response(serializers.data, status=status.HTTP_200_OK)
        # falta agregar la logica, si existe, si tiene permiso, etc
