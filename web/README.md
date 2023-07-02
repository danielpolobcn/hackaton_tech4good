# Comerç15' ::: El comercio de los 15 minutos en Barcelona

## Hackaton Tech4Good, BCN 2023

### Setup

Para trabajar con el backend en localhost se debe ejecutar el script de la base de datos y comprobar las credenciales asignadas en java en el archivo "application.properties". Una vez realizadas estas acciones se puede inicializar el servidor de Spring Boot. En caso de que la API ya tenga host se puede pasar directamente a la parte frontend.

### Equipo

Guillem Albo, Monica Fanlo, Gloria Figueras, Borja Garcia-Mila, Cristian Moller, Daniel Polo

### Marco

Fruto de la evolución que experimentan las propuestas para el desarrollo sostenible y la mejora de la calidad de vida en las ciudades, en la actualidad ha hecho fortuna el concepto de la **«ciudad de los 15 minutos»**. Éste transmite la idea de que, para facilitar la vida cotidiana de sus habitantes y en paralelo reducir el impacto ambiental de su actividad, la densidad y la localización de las actividades cotidianas deberían organizarse de tal forma que se puedan realizar en la proximidad del domicilio. Esta alta accesibilidad de las actividades redundaría en una menor necesidad de desplazarse para su realización, liberando así tiempo para los residentes y reduciendo la necesidad de recurrir a transportes motorizados. Dentro de la actividad cotidiana de la ciudad, el comercio es un elemento fundamental por ser el vector de suministro de bienes y servicios de consumo frecuente, por lo que su configuración tiene una fuerte incidencia sobre los trayectos que deberán hacer los ciudadanos.

### Objetivo

Desarrollar una aplicación que informe sobre cuánto contribuye al objetivo «ciudad de los 15 minutos» el tejido comercial en cada barrio de la ciudad de Barcelona. Más específicamente, la aplicación genera un índice sintético con rango 0-10 para describir el grado de proximidad del comercio a partir de múltiples estadísticas sobre tipología y actividad comercial en los barrios.

### Aplicaciones

Esta herramienta tiene una utilidad informativa, con dos públicos destinatarios. Por una parte, los ciudadanos que residen o planifican residir en una ciudad pueden conocer qué grado de proximidad y accesibilidad pueden esperar encontrar en cada barrio. Por otra, para el planificador se genera una lista de barrios mejor y peor adaptados al objetivo, conociendo así dónde resulta más crítico intervenir con políticas promotoras del comercio de proximidad.

### Datasets

Las estadísticas utilizadas para la elaboración del índice sintético de proximidad se han extraído del portal Open Data BCN, en formato CSV:

- [Censo de actividades económicas en planta baja de la ciudad de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/cens-activitats-comercials)
- [Mercados y ferias en la calle de la ciudad de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/mercats-fires-carrer)
- [Mercados municipales de la ciudad de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/mercats-municipals)
- [Grandes centros comerciales de la ciudad de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/grans-centres-comercials)
- [Galerías comerciales de la ciudad de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/galeries-comercials)

### Data Science

Los datasets extraídos de Open Data BCN ofrecen el inventario de los ítems descritos en su título con su asignación geográfica por distrito y barrio. En consecuencia, se han procesado para obtener recuentos agrupados por barrio para cada tipo de servicio (mercados, ferias, galerías comerciales, centros comerciales y tipologías de actividad). De las tipologías de actividad se han derivado dos nuevas variables para conocer la variedad total de actividades que se encuentran en cada barrio y qué proporción de éstas son de frecuentación cotidiana. Con estas dos variables, junto con la presencia o ausencia de mercados, ferias, galerías o centros comerciales se ha construido con ponderación el índice de proximidad. El resultado es una tabla con tantas líneas como barrios, donde las columnas contemplan el índice alcanzado y el valor de cada variable que contribuye al índice. Este bloque se ha trabajado con Python y la librería Pandas.

### Backend

La tabla suministrada por el equipo Data Science se ha transformado en una base de datos MySQL. Para su consulta, se ha generado una aplicación API REST de Java, con el framework SpringBoot, con distintos endpoints para acceso de equipo Frontend.

### Frontend

La interficie de usuario se ha desarrollado con React, utilizando _styled-components_. Se muestran los barrios según índice de proximidad en un gráfico de barras (Chart.js). Mediante una entrada de texto combinado con Datalist el usuario pueda encontrar el barrio de Barcelona que desea consultar, y encontrará información que justifica el valor del índice. También se han procesado los datos para visualizarlos en un mapa de la ciudad (Leaflet, React Leaflet, OpenStreetMap ).

### Entidades participantes

#### Organización

El evento ha sido organizado por [Barcelona Activa](https://www.barcelonactiva.cat/) y [Mobile World Capital Barcelona](https://mobileworldcapital.com/), en el Cibernàrium de Barcelona, 20 y 21 de junio de 2023.

#### Empresas

- [Agbar](https://www.agbar.es/)
- [Barcelona Supercomputing Center](https://www.bsc.es/)
- [Bayer](https://www.bayer.com/en/)
- [CaixaBank](https://www.caixabank.es/)
- [CloudBlue](https://www.cloudblue.com/)
- [IBM](https://www.ibm.com/es-es)
- [Pepsico](https://www.pepsico.es/)
- [Sage](https://www.sage.com/es-es/)
- [Schneider](https://www.se.com/es/es/)
- [Wolters Kluwer](https://www.wolterskluwer.com/es)
- [Zurich](https://www.zurich.es/)

#### Escuelas

- [IT Academy de Barcelona Activa](https://www.barcelonactiva.cat/itacademy)
- [42 Barcelona Fundació Telefònica](https://www.42barcelona.com/)
- [Asociación Factoría F5](https://factoriaf5.org/)
- [Assembler Institute of Technology](https://assemblerinstitute.com/)
- [EAE Business School Barcelona](http://eae%20business%20school%20barcelona/)
- [Fundación Esplai](https://campus.fundacionesplai.org/)
- [Ironhack](https://www.ironhack.com/es/es)
- [Le Wagon](https://www.lewagon.com/es)
- [MigraCode Barcelona](https://migracode.openculturalcenter.org/)
- [Nuclio Digital School](https://nuclio.school/)
- [Pime Coneixement SL](https://www.pimec.org/)
