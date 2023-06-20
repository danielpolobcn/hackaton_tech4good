# Comercio de 15 minutos en Barcelona

## Hackaton Tech4Good, BCN 2023

### Equipo
Guillem Albo, Monica Fanlo, Gloria Figueras, Borja Garcia-Mila, Cristian Moller, Daniel Polo 

### Marco
Fruto de la evolución que experimentan las propuestas para el desarrollo sostenible y la mejora de la calidad de vida en las ciudades, en la actualidad ha hecho fortuna el concepto de la «ciudad de los 15 minutos». Éste transmite la idea de que, para facilitar la vida cotidiana de sus habitantes i en paralelo reducir el impacto ambiental de su actividad, la densidad y la localización de las actividades cotidianas deberían organizarse de tal forma que se puedan realizar en la proximidad del domicilio. Esta alta accesibilidad de las actividades redundaría en una menor necesidad de desplazarse para su realización, liberando así tiempo para los residentes y reduciendo la necesidad de recurrir a transportes motorizados. Dentro de la actividad cotidiana de la ciudad, el comercio es un elemento fundamental por ser el vector de suministro de bienes y servicios de consumo frecuente, por lo que su configuración tiene una fuerte incidencia sobre los trayectos que deberán hacer los ciudadanos.

### Objetivo
Desarrollar una aplicación que informe sobre cuánto contribuye al objetivo «ciudad de los 15 minutos» el tejido comercial en cada barrio de la ciudad de Barcelona. Más específicamente, la aplicación genera un índice sintético con rango 0-10 para describir el grado de proximidad del comercio a partir de múltiples estadísticas sobre tipología y actividad comercial en los barrios.

### Aplicaciones
Esta herramienta tiene una utilidad informativa, con dos públicos destinatarios. Por una parte, los ciudadanos que residen o planifican residir en una ciudad pueden conocer qué grado de proximidad y accesibilidad pueden esperar encontrar en cada barrio. Por otra, para el planificador se genera una lista de barrios mejor y peor adaptados al objetivo, conociendo así dónde resulta más crítico intervenir con políticas promotoras del comercio de proximidad.

### Datasets
Las estadísticas utilizadas para la elaboración del índice sintético de proximidad se han extraído del portal Open Data BCN, en formato CSV:
- [Cens d'activitats econòmiques en planta baixa de la ciutat de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/cens-activitats-comercials)
- [Mercats i fires al carrer de la ciutat de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/mercats-fires-carrer)
- [Mercats municipals de la ciutat de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/mercats-municipals)
- [Grans centres comercials de la ciutat de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/grans-centres-comercials)
- [Galeries comercials de la ciutat de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/galeries-comercials)

### Data Science
Los datasets extraídos de Open Data BCN ofrecen el inventario de los ítems descritos en su título  con su asignación geográfica por distrito y barrio. En consecuencia, se han procesado para obtener recuentos agrupados por barrio para cada tipo de servicio (mercados, ferias, galerías comerciales, centros comerciales y tipologías de actividad). De las tipologías de actividad se han derivado dos nuevas variables para conocer la variedad total de actividades se encuentran en cada barrio y qué proporción de éstas son de frecuentación cotidiana. Con estas dos variables, junto con la presencia o ausencia de mercados, ferias, galerías o centros comerciales se ha construido con ponderación el índice de proximidad. El resultado es una tabla con tantas líneas como barrios, donde las columnas contemplan el índice alcanzado y el valor de cada variable que contribuye al índice. Este bloque se ha trabajado con Python y la librería Pandas.

### Backend


### Frontend
