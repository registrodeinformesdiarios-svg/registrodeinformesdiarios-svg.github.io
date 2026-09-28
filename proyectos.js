// ════════════════════════════════════════════════════════════════
//  DEFINICIÓN DE PROYECTOS — Panel de Herramientas de Supervisión
// ════════════════════════════════════════════════════════════════
//  Para agregar un proyecto: copie un bloque { ... }, péguelo al final
//  de la lista y ajuste sus datos. No es necesario tocar index.html.
//
//  · id      → identificador corto, único, sin espacios ni tildes.
//  · nombre  → texto de la pestaña y del título (el número se asigna
//              automáticamente según el orden de esta lista).
//  · alias   → valores alternativos aceptados en ?proyecto=... (minúsculas).
//  · URLs    → use '#' para herramientas aún no disponibles
//              (la tarjeta se muestra deshabilitada).
// ════════════════════════════════════════════════════════════════

// Proyecto que se abre cuando la URL no indica ?proyecto=...
const PROYECTO_POR_DEFECTO = 'tecales';

const PROYECTOS = [
    {
        id: 'numu',
        nombre: 'PS Numu',
        alias: ['ps_numu'],
        form: '#',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=PS+Numu',
        reports: '#',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=PS+Numu',
        kilometraje: 'https://docs.google.com/forms/d/e/1FAIpQLSfG9wMSAEXpbI4jzXTq24nWrLYi1wRwZPy2CC6GE5M-kf-2-w/viewform',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=PS+Numu&carpetaId=1qhfoK8UYyZ2WQjPjjSGS0IiHI5f4_Kq5',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=PS+Numu',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=ps_numu'
    },
    {
        id: 'tecales',
        nombre: 'PS Los Tecales',
        alias: ['ps_los_tecales', 'tecales_los'],
        form: 'https://docs.google.com/forms/d/e/1FAIpQLScnnyrYdjsp68DlC6RQa5v2ovD3as3yGlasiKuPUOb_ogXuLQ/viewform',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=PS+Los+Tecales',
        reports: 'https://registrodeinformesdiarios-svg.github.io/ReportGenerator/',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=PS+Los+Tecales',
        kilometraje: 'https://docs.google.com/forms/d/e/1FAIpQLSfG9wMSAEXpbI4jzXTq24nWrLYi1wRwZPy2CC6GE5M-kf-2-w/viewform',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=PS+Los+Tecales&carpetaId=1Sox86IWQ6IoAWDUxmc_EOhvGrXGRve0eHbWZ7M545f26jVmCrWe58QiWoCs-VfPkan0oB2Zf',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=PS+Los+Tecales',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=ps_los_tecales'
    },
    {
        id: 'canas',
        nombre: 'PS Cañas',
        alias: ['ps_las_canas', 'ps_las_cañas'],
        form: '#',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=PS+Las+Cañas',
        reports: '#',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=PS+Las+Cañas',
        kilometraje: '#',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=PS+Las+Cañas&carpetaId=PorDefinir',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=PS+Las+Cañas',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=ps_las_canas'
    },
    {
        id: 'inolasa',
        nombre: 'Inolasa',
        alias: [],
        form: '#',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=Inolasa',
        reports: '#',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=Inolasa',
        kilometraje: '#',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=Inolasa&carpetaId=PorDefinir',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=Inolasa',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=inolasa'
    },
    {
        id: 'boston',
        nombre: 'Boston Sc.',
        alias: ['boston_sc', 'bostor_sc'],
        form: '#',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=Bostor+Sc',
        reports: '#',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=Boston+Sc',
        kilometraje: '#',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=Bostor+Sc&carpetaId=PorDefinir',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=Boston+Sc',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=boston_sc'
    },
    {
        id: 'colorado',
        nombre: 'Colorado',
        alias: ['ps_colorado'],
        form: '#',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=PS+Colorado',
        reports: '#',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=PS+Colorado',
        kilometraje: '#',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=PS+Colorado&carpetaId=13u0tmrcQY6u_0wOtlrT8oSTmtrpdpvKj',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=PS+Colorado',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=ps_colorado'
    },
    {
        id: 'vicesa',
        nombre: 'Vicesa',
        alias: ['ps_vicesa'],
        form: '#',
        watermark: 'https://registrodeinformesdiarios-svg.github.io/marcas-agua-supervision/?proyecto=Vicesa',
        reports: '#',
        curveS: 'https://registrodeinformesdiarios-svg.github.io/CurvaS?project=Vicesa',
        kilometraje: '#',
        viaticos: 'https://registrodeinformesdiarios-svg.github.io/viaticos/',
        visualizador3D: 'https://registrodeinformesdiarios-svg.github.io/visualizador3D/',
        visualizadorFotos: 'https://registrodeinformesdiarios-svg.github.io/visualizadorFotos/?proyecto=Vicesa&carpetaId=PorDefinir',
        generadorPresentaciones: 'https://registrodeinformesdiarios-svg.github.io/GeneradorPresentaciones/',
        gestorDePlanos: 'https://registrodeinformesdiarios-svg.github.io/GestorPlanos/',
        galvanizado: 'https://registrodeinformesdiarios-svg.github.io/GalvanizedAnalyzer/?proyecto=Vicesa',
        digitalTwin: 'https://registrodeinformesdiarios-svg.github.io/DigitalTwin/?proyecto=vicesa'
    }
];
