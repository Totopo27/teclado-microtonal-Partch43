// js/scales.js
// Definición de escalas adaptadas al sistema de 43 tonos de Harry Partch

// Mapeo de escalas musicales en Partch 43
const scales = {
  // ========== ESCALAS PARTCH ==========
  
  // Otonalidad sobre 1/1 (serie armónica: 1-3-5-7-9-11)
  // Posiciones: 0, 8, 14, 25, 34, 36
  otonality: [0, 8, 14, 25, 34, 36],
  
  // Utonalidad sobre 1/1 (serie subarmónica: 1/1-1/3-1/5-1/7-1/9-1/11)
  // Posiciones aproximadas: 0, 18, 12, 34, 7, 36
  utonality: [0, 18, 12, 34, 7, 36],
  
  // Escala Mayor (aproximada usando ratios justos)
  // Do-Re-Mi-Fa-Sol-La-Si
  // Ratios: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8
  major: [0, 8, 14, 18, 25, 31, 39],
  
  // Escala Menor Natural (aproximada usando ratios justos)
  // Do-Re-Mib-Fa-Sol-Lab-Sib
  // Ratios: 1/1, 9/8, 6/5, 4/3, 3/2, 8/5, 16/9
  minor: [0, 8, 12, 18, 25, 29, 35],
  
  // Cromática: todas las 43 notas
  chromatic: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42
  ],

  // ========== MODOS GRIEGOS APROXIMADOS ==========
  
  // Jónico (Mayor) - 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8
  ionian: [0, 8, 14, 18, 25, 31, 39],
  
  // Dórico - 1/1, 9/8, 6/5, 4/3, 3/2, 5/3, 16/9
  dorian: [0, 8, 12, 18, 25, 31, 35],
  
  // Frigio - 1/1, 16/15, 6/5, 4/3, 3/2, 8/5, 16/9
  phrygian: [0, 4, 12, 18, 25, 29, 35],
  
  // Lidio - 1/1, 9/8, 5/4, 7/5, 3/2, 5/3, 15/8
  lydian: [0, 8, 14, 21, 25, 31, 39],
  
  // Mixolidio - 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 16/9
  mixolydian: [0, 8, 14, 18, 25, 31, 35],
  
  // Eólico (Menor Natural) - 1/1, 9/8, 6/5, 4/3, 3/2, 8/5, 16/9
  aeolian: [0, 8, 12, 18, 25, 29, 35],
  
  // Locrio - 1/1, 16/15, 6/5, 4/3, 10/7, 8/5, 16/9
  locrian: [0, 4, 12, 18, 22, 29, 35]
};

// Nombres legibles de las escalas
const scaleNames = {
  none: 'Ninguna',
  otonality: 'Otonalidad (1-3-5-7-9-11)',
  utonality: 'Utonalidad (1/1-1/3-1/5-1/7-1/9-1/11)',
  major: 'Mayor',
  minor: 'Menor',
  chromatic: 'Cromática (43 tonos)',
  ionian: 'Jónico',
  dorian: 'Dórico',
  phrygian: 'Frigio',
  lydian: 'Lidio',
  mixolydian: 'Mixolidio',
  aeolian: 'Eólico',
  locrian: 'Locrio'
};