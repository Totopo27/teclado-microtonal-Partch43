# Teclado Microtonal Harry Partch 43

Teclado hexagonal interactivo para el sistema de 43 tonos con afinación justa de Harry Partch.

## Características

- **Disposición hexagonal** de teclas para visualización de intervalos justos
- **Sistema completo de 43 tonos** de Harry Partch distribuidos en 2 octavas
  - Octava baja: 43 notas (0-42) 
  - Octava alta: 43 notas (0-42) + nota 0 adicional
  - **Total: 86 teclas hexagonales**
- **Afinación justa** basada en ratios de números enteros
- **Ratios visibles** en cada tecla para referencia teórica
- **5 colores distintivos** según función armónica:
  - **Blanco**: Notas fundamentales (1/1, 4/3, 3/2, etc.)
  - **Rojo**: Coma sintónica (81/80, 160/81)
  - **Verde**: Intervalos de 11-límite
  - **Azul**: Intervalos de 7-límite
  - **Morado**: Intervalos pitagóricos (32/27, 27/16, etc.)
  - **Naranja**: Intervalos de 21-límite
- **Visualización de escalas** con resaltado de notas
- **Modo de combinación de escalas** para explorar superposiciones armónicas
- **Controles de transposición** de octava (+8va, -8va, Reset)
- **Monitor de polifonía en tiempo real**: 
  - Visualización de todas las notas activas simultáneamente
  - Contador de voces activas
  - Información de frecuencia, ratio y octava por cada nota
  - Chips de colores según la octava
  - Orden cronológico de notas pulsadas
- **Información monofónica**: Muestra la última nota tocada con su ratio
- **Soporte completo de teclado QWERTY** (43 teclas + controles)
- **Soporte multi-touch** para dispositivos móviles


## Uso

### Online
Simplemente abre `index.html` en tu navegador web.

## Sistema de Harry Partch

### Fundamentos teóricos

Harry Partch (1901-1974) desarrolló un sistema microtonal de **43 tonos por octava** basado en **afinación justa** (Just Intonation), donde todos los intervalos se derivan de ratios de números enteros pequeños.

#### Límites armónicos:
- **5-límite**: Intervalos basados en 2, 3 y 5 (ej: 5/4, 6/5)
- **7-límite**: Añade el factor 7 (ej: 7/4, 8/7)
- **11-límite**: Añade el factor 11 (ej: 11/8, 16/11)

### Frecuencia base
- **264 Hz** como 1/1 (Do central)
- Cada nota se calcula como: `Frecuencia = ratio × 264 Hz × 2^octava`

### Ratios del sistema (43 tonos)

| # | Ratio | Cents | Nombre aproximado |
|---|-------|-------|-------------------|
| 0 | 1/1 | 0.0 | Unísono |
| 1 | 81/80 | 21.5 | Coma sintónica |
| 2 | 33/32 | 53.3 | Cuarto de tono |
| 3 | 21/20 | 84.5 | Semitono menor |
| 4 | 16/15 | 111.7 | Semitono diatónico |
| 5 | 12/11 | 150.6 | Neutral segundo |
| 6 | 11/10 | 165.0 | 11-límite segundo |
| 7 | 10/9 | 182.4 | Tono menor |
| 8 | 9/8 | 203.9 | Tono mayor |
| 9 | 8/7 | 231.2 | Supertono |
| 10 | 7/6 | 266.9 | Tercera submenor |
| 11 | 32/27 | 294.1 | Tercera pitagórica menor |
| 12 | 6/5 | 315.6 | Tercera menor |
| 13 | 11/9 | 347.4 | Neutral tercera |
| 14 | 5/4 | 386.3 | Tercera mayor |
| 15 | 14/11 | 417.5 | 11-límite tercera |
| 16 | 9/7 | 435.1 | Tercera supermajor |
| 17 | 21/16 | 470.8 | Cuarta aumentada |
| 18 | 4/3 | 498.0 | Cuarta justa |
| 19 | 27/20 | 519.6 | Cuarta aumentada |
| 20 | 11/8 | 551.3 | Tritono 11-límite |
| 21 | 7/5 | 582.5 | Tritono 7-límite |
| 22 | 10/7 | 617.5 | Quinta disminuida |
| 23 | 16/11 | 648.7 | Quinta 11-límite |
| 24 | 40/27 | 680.4 | Quinta pitagórica |
| 25 | 3/2 | 702.0 | Quinta justa |
| 26 | 32/21 | 729.2 | Quinta aumentada |
| 27 | 14/9 | 764.9 | Sexta menor |
| 28 | 11/7 | 782.5 | 7-límite sexta |
| 29 | 8/5 | 813.7 | Sexta menor |
| 30 | 18/11 | 852.6 | Neutral sexta |
| 31 | 5/3 | 884.4 | Sexta mayor |
| 32 | 27/16 | 905.9 | Sexta pitagórica |
| 33 | 12/7 | 933.1 | Sexta supermajor |
| 34 | 7/4 | 968.8 | Séptima menor |
| 35 | 16/9 | 996.1 | Séptima pitagórica |
| 36 | 9/5 | 1017.6 | Séptima menor |
| 37 | 20/11 | 1035.0 | 11-límite séptima |
| 38 | 11/6 | 1049.4 | Neutral séptima |
| 39 | 15/8 | 1088.3 | Séptima mayor |
| 40 | 40/21 | 1115.5 | Séptima aumentada |
| 41 | 64/33 | 1146.7 | Séptima aumentada |
| 42 | 160/81 | 1178.5 | Octava disminuida |

## Escalas incluidas

### Escalas de Harry Partch

#### **Otonalidad** (Serie armónica) (trabajo en proceso)
Basada en la serie de armónicos superiores: 1-3-5-7-9-11
- Notas: [0, 8, 14, 25, 34, 36]
- Ratios: 1/1, 9/8, 5/4, 3/2, 7/4, 9/5
- Uso: Acordes mayores consonantes, sonoridades brillantes

#### **Utonalidad** (Serie subarmónica) (trabajo en proceso)
Basada en la serie de armónicos inferiores: 1/1-1/3-1/5-1/7-1/9-1/11
- Notas: [0, 18, 12, 34, 7, 36]
- Ratios: 1/1, 4/3, 6/5, 7/4, 10/9, 9/5
- Uso: Acordes menores, sonoridades oscuras

#### **Mayor (Afinación justa)** (trabajo en proceso)
Escala mayor con tercera justa (5/4)
- Notas: [0, 8, 14, 18, 25, 31, 39]
- Ratios: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8

#### **Menor (Afinación justa)** (trabajo en proceso)
Escala menor natural con tercera menor justa (6/5)
- Notas: [0, 8, 12, 18, 25, 29, 35]
- Ratios: 1/1, 9/8, 6/5, 4/3, 3/2, 8/5, 16/9

#### **Cromática** (trabajo en proceso)
Las 43 notas completas del sistema

### Modos Griegos (trabajo en proceso)

- **Jónico**: Mayor con afinación justa
- **Dórico**: Modo dórico con tercera menor justa
- **Frigio**: Modo frigio con segunda menor
- **Lidio**: Modo lidio con cuarta aumentada
- **Mixolidio**: Mayor con séptima menor
- **Eólico**: Menor natural con afinación justa
- **Locrio**: Modo locrio con quinta disminuida

## Controles

### Ratón / Táctil
- **Clic/Tap en tecla**: Reproducir nota
- **Mantener presionado**: Nota sostenida
- **Hover**: Vista previa del color de activación
- **Multi-touch**: Soporte para múltiples notas simultáneas

### Teclado QWERTY - Sistema completo (43 notas)

```
┌─────────────────────────────────────────────────────────┐
│ Fila números:  1  2  3  4  5  6  7  8  9  0            │
│               (0)(1)(2)(3)(4)(5)(6)(7)(8)(9)            │
├─────────────────────────────────────────────────────────┤
│ Fila Q-]:  Q  W  E  R  T  Y  U  I  O  P  [  ]          │
│          (10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)(21)│
├─────────────────────────────────────────────────────────┤
│ Fila A-':  A  S  D  F  G  H  J  K  L  ;  '             │
│          (22)(23)(24)(25)(26)(27)(28)(29)(30)(31)(32)   │
├─────────────────────────────────────────────────────────┤
│ Fila Z-/:  Z  X  C  V  B  N  M  ,  .  /                │
│          (33)(34)(35)(36)(37)(38)(39)(40)(41)(42)       │
└─────────────────────────────────────────────────────────┘
```

#### Controles de octava:
- **↑ Flecha Arriba**: +8va (subir octava)
- **↓ Flecha Abajo**: -8va (bajar octava)
- **Barra Espaciadora**: Reset octava a 0

### Controles de interfaz
- **+8va / -8va**: Transponer octavas (también con flechas ↑↓)
- **Reset Octava**: Volver a octava base (también con Espacio)
- **Selector de escala**: Elegir escala Partch o modo griego
- **Combinar escalas**: Activar modo de superposición de escalas
- **Limpiar escalas**: Resetear visualización de escalas

### Atajos útiles
- Mantén presionadas múltiples teclas para tocar acordes justos
- Usa las flechas mientras tocas para cambiar de octava en tiempo real
- El espacio te permite volver rápidamente a la octava central
- Experimenta con Otonalidad + Utonalidad para crear estructuras complejas

## Disposición del teclado

- **Octava baja (-1)**: valores 133-175 (43 notas: 0-42)
- **Octava central (0)**: valores 174-217 (44 teclas: 0-42 + 0 adicional)

**Total**: 86 teclas hexagonales en disposición de 30°

## Sistema de colores (trabajo en proceso)

Los colores indican la función armónica de cada intervalo:

| Color | Función | Ejemplo de ratios |
|-------|---------|-------------------|
| Blanco | Intervalos fundamentales | 1/1, 9/8, 4/3, 3/2, 5/3 |
| Rojo | Coma sintónica | 81/80, 160/81 |
| Verde | 11-límite | 12/11, 11/10, 11/9, 14/11, 11/8, 16/11, 18/11, 11/7, 20/11, 11/6 |
| Azul | 7-límite | 8/7, 7/6, 9/7, 21/16, 7/5, 10/7, 32/21, 14/9, 11/7, 12/7, 7/4 |
| Morado | Pitagórico | 32/27, 27/20, 40/27, 27/16 |
| Naranja | 21-límite | 21/20, 40/21 |

### Array de frecuencias
El array `arrayPartch43` contiene 7 octavas (301 frecuencias) calculadas como:
```javascript
frequency = (numerator/denominator) × 264 Hz × 2^octave
```
