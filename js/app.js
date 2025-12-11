// js/app.js
// Inicialización y gestión de eventos para Harry Partch 43

document.addEventListener('DOMContentLoaded', function () {
  // Generar teclado al cargar
  generateKeyboard();

  // Controles de octava
  document.getElementById('octave-up').addEventListener('click', () => {
    currentOctave = Math.min(currentOctave + 1, 2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('octave-down').addEventListener('click', () => {
    currentOctave = Math.max(currentOctave - 1, -2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('reset-octave').addEventListener('click', () => {
    currentOctave = 0;
    document.getElementById('current-octave').textContent = 0;
  });

  // Selector de escala
  document.getElementById('scale-selector').addEventListener('change', (e) => {
    const selectedScale = e.target.value;

    if (combineMode) {
      if (selectedScale !== 'none') {
        combinedScales.add(selectedScale);
        updateCombinedScalesList();
        e.target.value = 'none';
      }
    } else {
      currentScale = selectedScale;
      combinedScales.clear();
      updateCombinedScalesList();
    }

    updateScaleDisplay();
  });

  // Selector de Límites
  document.getElementById('limit-selector').addEventListener('change', (e) => {
    const selectedLimit = e.target.value;
    console.log(`Límite seleccionado: Grado ${selectedLimit}`);

    if (selectedLimit === 'none') {
      if (typeof restoreOriginalColors === 'function') {
        restoreOriginalColors();
      }
    } else {
      if (typeof applyLimitColors === 'function') {
        applyLimitColors(selectedLimit);
      }
    }
  });

  // Checkbox de combinación de escalas
  document.getElementById('combine-scales').addEventListener('change', (e) => {
    combineMode = e.target.checked;
    const combinationPanel = document.getElementById('scale-combination');

    if (combineMode) {
      combinationPanel.style.display = 'block';
      if (currentScale !== 'none') {
        combinedScales.add(currentScale);
      }
    } else {
      combinationPanel.style.display = 'none';
      if (combinedScales.size > 0) {
        currentScale = Array.from(combinedScales).pop();
        document.getElementById('scale-selector').value = currentScale;
      }
      combinedScales.clear();
    }

    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // Botón de limpiar escalas
  document.getElementById('clear-scales').addEventListener('click', () => {
    combinedScales.clear();
    currentScale = 'none';
    document.getElementById('scale-selector').value = 'none';
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // Control de frecuencia base
  document.getElementById('base-frequency').addEventListener('change', (e) => {
    const newFrequency = parseFloat(e.target.value);

    // Validar rango
    if (newFrequency >= 200 && newFrequency <= 600) {
      updateBaseFrequency(newFrequency);
      console.log(`Nueva frecuencia base: ${newFrequency} Hz`);
    } else {
      alert('Por favor ingresa una frecuencia entre 200 y 600 Hz');
      e.target.value = baseFrequency; // Restaurar valor anterior
    }
  });

  // Mapeo QWERTY para 43 notas (distribución en 2 filas)
  const keyMap = {
    // Fila superior (0-21)
    '1': '0', '2': '1', '3': '2', '4': '3', '5': '4',
    '6': '5', '7': '6', '8': '7', '9': '8', '0': '9',
    'q': '10', 'w': '11', 'e': '12', 'r': '13', 't': '14',
    'y': '15', 'u': '16', 'i': '17', 'o': '18', 'p': '19',
    '[': '20', ']': '21',

    // Fila inferior (22-42)
    'a': '22', 's': '23', 'd': '24', 'f': '25', 'g': '26',
    'h': '27', 'j': '28', 'k': '29', 'l': '30', ';': '31',
    "'": '32', 'z': '33', 'x': '34', 'c': '35', 'v': '36',
    'b': '37', 'n': '38', 'm': '39', ',': '40', '.': '41',
    '/': '42'
  };

  const controlKeys = {
    'ArrowUp': 'octave-up',
    'ArrowDown': 'octave-down',
    ' ': 'reset-octave'
  };

  const pressedKeys = new Set();

  document.addEventListener('keydown', (e) => {
    if (controlKeys[e.key]) {
      e.preventDefault();
    }

    if (controlKeys[e.key] && !pressedKeys.has(e.key)) {
      pressedKeys.add(e.key);
      const buttonId = controlKeys[e.key];
      document.getElementById(buttonId).click();

      const button = document.getElementById(buttonId);
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 100);
      return;
    }

    const key = e.key.toLowerCase();
    if (keyMap[key] && !pressedKeys.has(key)) {
      pressedKeys.add(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        playNote(config);
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();

    if (controlKeys[e.key]) {
      pressedKeys.delete(e.key);
      return;
    }

    if (keyMap[key]) {
      pressedKeys.delete(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        stopNote(config);
      }
    }
  });

  showKeyboardHelp();
});

function showKeyboardHelp() {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║       CONTROLES DE TECLADO QWERTY - PARTCH 43            ║
╠══════════════════════════════════════════════════════════╣
║   OCTAVA COMPLETA (43 notas)                             ║
║   Fila 1: 1234567890 + QWERTYUIOP[]                      ║
║   Fila 2: ASDFGHJKL;'ZXCVBNM,./                          ║
║                                                           ║
║   CONTROLES:                                              ║
║   ↑ Flecha Arriba   → +8va                               ║
║   ↓ Flecha Abajo    → -8va                               ║
║   Espacio           → Reset octava                       ║
╚══════════════════════════════════════════════════════════╝
  `);
}