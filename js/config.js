// js/config.js
// Ratios de Harry Partch

const keyConfigurations = [
    // ========== FILA SUPERIOR (0-41, octava arriba que usa primera nota C de octava siguiente) ==========

    { id: '0', name: '0', value: 172, top: 345, left: 150, color: 'white', text: '0', ratio: '1/1' },
    { id: '1', name: '1', value: 173, top: 265, left: 195, color: 'red', text: '1', ratio: '81/80' },
    { id: '2', name: '2', value: 174, top: 185, left: 240, color: 'green', text: '2', ratio: '33/32' },
    { id: '3', name: '3', value: 175, top: 345, left: 240, color: 'orange', text: '3', ratio: '21/20' },
    { id: '4', name: '4', value: 176, top: 265, left: 285, color: 'white', text: '4', ratio: '16/15' },
    { id: '5', name: '5', value: 177, top: 185, left: 330, color: 'green', text: '5', ratio: '12/11' },
    { id: '6', name: '6', value: 178, top: 425, left: 285, color: 'green', text: '6', ratio: '11/10' },
    { id: '7', name: '7', value: 179, top: 345, left: 330, color: 'white', text: '7', ratio: '10/9' },
    { id: '8', name: '8', value: 180, top: 265, left: 375, color: 'white', text: '8', ratio: '9/8' },
    { id: '9', name: '9', value: 181, top: 185, left: 420, color: 'blue', text: '9', ratio: '8/7' },
    { id: '10', name: '10', value: 182, top: 425, left: 375, color: 'blue', text: '10', ratio: '7/6' },
    { id: '11', name: '11', value: 183, top: 345, left: 420, color: 'purple', text: '11', ratio: '32/27' },
    { id: '12', name: '12', value: 184, top: 265, left: 465, color: 'white', text: '12', ratio: '6/5' },
    { id: '13', name: '13', value: 185, top: 185, left: 510, color: 'green', text: '13', ratio: '11/9' },
    { id: '14', name: '14', value: 186, top: 425, left: 465, color: 'white', text: '14', ratio: '5/4' },
    { id: '15', name: '15', value: 187, top: 345, left: 510, color: 'green', text: '15', ratio: '14/11' },
    { id: '16', name: '16', value: 188, top: 265, left: 555, color: 'blue', text: '16', ratio: '9/7' },
    { id: '17', name: '17', value: 189, top: 185, left: 600, color: 'blue', text: '17', ratio: '21/16' },
    { id: '18', name: '18', value: 190, top: 425, left: 555, color: 'white', text: '18', ratio: '4/3' },
    { id: '19', name: '19', value: 191, top: 345, left: 600, color: 'purple', text: '19', ratio: '27/20' },
    { id: '20', name: '20', value: 192, top: 265, left: 645, color: 'green', text: '20', ratio: '11/8' },
    { id: '21', name: '21', value: 193, top: 185, left: 690, color: 'blue', text: '21', ratio: '7/5' },
    { id: '22', name: '22', value: 194, top: 345, left: 690, color: 'blue', text: '22', ratio: '10/7' },
    { id: '23', name: '23', value: 195, top: 265, left: 735, color: 'green', text: '23', ratio: '16/11' },
    { id: '24', name: '24', value: 196, top: 185, left: 780, color: 'purple', text: '24', ratio: '40/27' },
    { id: '25', name: '25', value: 197, top: 105, left: 825, color: 'white', text: '25', ratio: '3/2' },
    { id: '26', name: '26', value: 198, top: 345, left: 780, color: 'blue', text: '26', ratio: '32/21' },
    { id: '27', name: '27', value: 199, top: 265, left: 825, color: 'blue', text: '27', ratio: '14/9' },
    { id: '28', name: '28', value: 200, top: 185, left: 870, color: 'green', text: '28', ratio: '11/7' },
    { id: '29', name: '29', value: 201, top: 105, left: 915, color: 'white', text: '29', ratio: '8/5' },
    { id: '30', name: '30', value: 202, top: 345, left: 870, color: 'green', text: '30', ratio: '18/11' },
    { id: '31', name: '31', value: 203, top: 265, left: 915, color: 'white', text: '31', ratio: '5/3' },
    { id: '32', name: '32', value: 204, top: 185, left: 960, color: 'purple', text: '32', ratio: '27/16' },
    { id: '33', name: '33', value: 205, top: 105, left: 1005, color: 'blue', text: '33', ratio: '12/7' },
    { id: '34', name: '34', value: 206, top: 345, left: 960, color: 'blue', text: '34', ratio: '7/4' },
    { id: '35', name: '35', value: 207, top: 265, left: 1005, color: 'white', text: '35', ratio: '16/9' },
    { id: '36', name: '36', value: 208, top: 185, left: 1050, color: 'white', text: '36', ratio: '9/5' },
    { id: '37', name: '37', value: 209, top: 105, left: 1095, color: 'green', text: '37', ratio: '20/11' },
    { id: '38', name: '38', value: 210, top: 345, left: 1050, color: 'green', text: '38', ratio: '11/6' },
    { id: '39', name: '39', value: 211, top: 265, left: 1095, color: 'white', text: '39', ratio: '15/8' },
    { id: '40', name: '40', value: 212, top: 185, left: 1140, color: 'orange', text: '40', ratio: '40/21' },
    { id: '41', name: '41', value: 213, top: 345, left: 1140, color: 'green', text: '41', ratio: '64/33' },
    { id: '42', name: '42', value: 214, top: 265, left: 1185, color: 'red', text: '42', ratio: '160/81' },
    { id: '0a', name: '0', value: 215, top: 185, left: 1230, color: 'white', text: '0', ratio: '1/1' },

    // ========== FILA INFERIOR (Notas 0-42 octava baja) ==========

    { id: '0b', name: '0', value: 129, top: 780, left: 150, color: 'white', text: '0', ratio: '1/1' },
    { id: '1b', name: '1', value: 130, top: 700, left: 195, color: 'red', text: '1', ratio: '81/80' },
    { id: '2b', name: '2', value: 131, top: 620, left: 240, color: 'green', text: '2', ratio: '33/32' },
    { id: '3b', name: '3', value: 132, top: 780, left: 240, color: 'orange', text: '3', ratio: '21/20' },
    { id: '4b', name: '4', value: 133, top: 700, left: 285, color: 'white', text: '4', ratio: '16/15' },
    { id: '5b', name: '5', value: 134, top: 620, left: 330, color: 'green', text: '5', ratio: '12/11' },
    { id: '6b', name: '6', value: 135, top: 860, left: 285, color: 'green', text: '6', ratio: '11/10' },
    { id: '7b', name: '7', value: 136, top: 780, left: 330, color: 'white', text: '7', ratio: '10/9' },
    { id: '8b', name: '8', value: 137, top: 700, left: 375, color: 'white', text: '8', ratio: '9/8' },
    { id: '9b', name: '9', value: 138, top: 620, left: 420, color: 'blue', text: '9', ratio: '8/7' },
    { id: '10b', name: '10', value: 139, top: 860, left: 375, color: 'blue', text: '10', ratio: '7/6' },
    { id: '11b', name: '11', value: 140, top: 780, left: 420, color: 'purple', text: '11', ratio: '32/27' },
    { id: '12b', name: '12', value: 141, top: 700, left: 465, color: 'white', text: '12', ratio: '6/5' },
    { id: '13b', name: '13', value: 142, top: 620, left: 510, color: 'green', text: '13', ratio: '11/9' },
    { id: '14b', name: '14', value: 143, top: 860, left: 465, color: 'white', text: '14', ratio: '5/4' },
    { id: '15b', name: '15', value: 144, top: 780, left: 510, color: 'green', text: '15', ratio: '14/11' },
    { id: '16b', name: '16', value: 145, top: 700, left: 555, color: 'blue', text: '16', ratio: '9/7' },
    { id: '17b', name: '17', value: 146, top: 620, left: 600, color: 'blue', text: '17', ratio: '21/16' },
    { id: '18b', name: '18', value: 147, top: 860, left: 555, color: 'white', text: '18', ratio: '4/3' },
    { id: '19b', name: '19', value: 148, top: 780, left: 600, color: 'purple', text: '19', ratio: '27/20' },
    { id: '20b', name: '20', value: 149, top: 700, left: 645, color: 'green', text: '20', ratio: '11/8' },
    { id: '21b', name: '21', value: 150, top: 620, left: 690, color: 'blue', text: '21', ratio: '7/5' },
    { id: '22b', name: '22', value: 151, top: 780, left: 690, color: 'blue', text: '22', ratio: '10/7' },
    { id: '23b', name: '23', value: 152, top: 700, left: 735, color: 'green', text: '23', ratio: '16/11' },
    { id: '24b', name: '24', value: 153, top: 620, left: 780, color: 'purple', text: '24', ratio: '40/27' },
    { id: '25b', name: '25', value: 154, top: 540, left: 825, color: 'white', text: '25', ratio: '3/2' },
    { id: '26b', name: '26', value: 155, top: 780, left: 780, color: 'blue', text: '26', ratio: '32/21' },
    { id: '27b', name: '27', value: 156, top: 700, left: 825, color: 'blue', text: '27', ratio: '14/9' },
    { id: '28b', name: '28', value: 157, top: 620, left: 870, color: 'green', text: '28', ratio: '11/7' },
    { id: '29b', name: '29', value: 158, top: 540, left: 915, color: 'white', text: '29', ratio: '8/5' },
    { id: '30b', name: '30', value: 159, top: 780, left: 870, color: 'green', text: '30', ratio: '18/11' },
    { id: '31b', name: '31', value: 160, top: 700, left: 915, color: 'white', text: '31', ratio: '5/3' },
    { id: '32b', name: '32', value: 161, top: 620, left: 960, color: 'purple', text: '32', ratio: '27/16' },
    { id: '33b', name: '33', value: 162, top: 540, left: 1005, color: 'blue', text: '33', ratio: '12/7' },
    { id: '34b', name: '34', value: 163, top: 780, left: 960, color: 'blue', text: '34', ratio: '7/4' },
    { id: '35b', name: '35', value: 164, top: 700, left: 1005, color: 'white', text: '35', ratio: '16/9' },
    { id: '36b', name: '36', value: 165, top: 620, left: 1050, color: 'white', text: '36', ratio: '9/5' },
    { id: '37b', name: '37', value: 166, top: 540, left: 1095, color: 'green', text: '37', ratio: '20/11' },
    { id: '38b', name: '38', value: 167, top: 780, left: 1050, color: 'green', text: '38', ratio: '11/6' },
    { id: '39b', name: '39', value: 168, top: 700, left: 1095, color: 'white', text: '39', ratio: '15/8' },
    { id: '40b', name: '40', value: 169, top: 620, left: 1140, color: 'orange', text: '40', ratio: '40/21' },
    { id: '41b', name: '41', value: 170, top: 780, left: 1140, color: 'green', text: '41', ratio: '64/33' },
    { id: '42b', name: '42', value: 171, top: 700, left: 1185, color: 'red', text: '42', ratio: '160/81' }
];

// Array de frecuencias extensible para el sistema de 43 tonos de Harry Partch
// Fórmula: F_n = ratio_n × 264 Hz × 2^octave
// Permite trabajar con múltiples octavas hacia arriba y hacia abajo

// Frecuencia base global (modificable por el usuario)
let baseFrequency = 392; // G = 392 Hz como 1/1 en octava central (A = 441)

const generatePartch43Array = (numOctaves = 7, centerOctave = 0) => {
    const tonesPerOctave = 43;

    // Ratios de Harry Partch (43 tonos) en orden ascendente
    const ratios = [
        [1, 1],      // 0: 1/1
        [81, 80],     // 1: 81/80
        [33, 32],     // 2: 33/32
        [21, 20],     // 3: 21/20
        [16, 15],     // 4: 16/15
        [12, 11],     // 5: 12/11
        [11, 10],     // 6: 11/10
        [10, 9],      // 7: 10/9
        [9, 8],       // 8: 9/8
        [8, 7],       // 9: 8/7
        [7, 6],       // 10: 7/6
        [32, 27],     // 11: 32/27
        [6, 5],       // 12: 6/5
        [11, 9],      // 13: 11/9
        [5, 4],       // 14: 5/4
        [14, 11],     // 15: 14/11
        [9, 7],       // 16: 9/7
        [21, 16],     // 17: 21/16
        [4, 3],       // 18: 4/3
        [27, 20],     // 19: 27/20
        [11, 8],      // 20: 11/8
        [7, 5],       // 21: 7/5
        [10, 7],      // 22: 10/7
        [16, 11],     // 23: 16/11
        [40, 27],     // 24: 40/27
        [3, 2],       // 25: 3/2
        [32, 21],     // 26: 32/21
        [14, 9],      // 27: 14/9
        [11, 7],      // 28: 11/7
        [8, 5],       // 29: 8/5
        [18, 11],     // 30: 18/11
        [5, 3],       // 31: 5/3
        [27, 16],     // 32: 27/16
        [12, 7],      // 33: 12/7
        [7, 4],       // 34: 7/4
        [16, 9],      // 35: 16/9
        [9, 5],       // 36: 9/5
        [20, 11],     // 37: 20/11
        [11, 6],      // 38: 11/6
        [15, 8],      // 39: 15/8
        [40, 21],     // 40: 40/21
        [64, 33],     // 41: 64/33
        [160, 81]     // 42: 160/81
    ];

    const totalTones = numOctaves * tonesPerOctave;
    const startOctave = centerOctave - Math.floor(numOctaves / 2);
    const arrayPartch43 = [];

    // Generar frecuencias para todas las octavas
    for (let octaveOffset = 0; octaveOffset < numOctaves; octaveOffset++) {
        const currentOctave = startOctave + octaveOffset;
        const octaveMultiplier = Math.pow(2, currentOctave);

        for (let toneIndex = 0; toneIndex < tonesPerOctave; toneIndex++) {
            const [numerator, denominator] = ratios[toneIndex];
            const frequency = (numerator / denominator) * baseFrequency * octaveMultiplier;
            arrayPartch43.push(parseFloat(frequency.toFixed(6)));
        }
    }

    return arrayPartch43;
};

// Crear array con 7 octavas (por defecto)
// centerOctave = -1 para que la nota 0 (índice 172) en octava 0 sea 392Hz
let arrayPartch43 = generatePartch43Array(7, -1);

// Función para actualizar la frecuencia base y regenerar el array
function updateBaseFrequency(newFrequency) {
    baseFrequency = newFrequency;
    arrayPartch43 = generatePartch43Array(7, -1);
    console.log(`Frecuencia base actualizada a ${baseFrequency} Hz`);
}

// Ejemplos de uso:
/*
// 7 octavas centradas en octava 0 (recomendado para rango estándar)
const standardRange = generatePartch43Array(7, 0);

// 11 octavas para rango extendido (más grave y más agudo)
const extendedRange = generatePartch43Array(11, 0);

// 5 octavas centradas en octava 2 (más agudo)
const highRange = generatePartch43Array(5, 2);
*/


//Para acceder a las frecuencias en tu teclado, la fórmula sería:
/*
function getFrequency(value) {
    if (value >= 0 && value < arrayPartch43.length) {
        return arrayPartch43[value];
    }
    return null;
}
*/


// Para crear arrays más grandes:
// const arrayPartch43Large = generatePartch43Array(11, 0); // 11 octavas
// const arrayPartch43Custom = generatePartch43Array(5, 2);  // 5 octavas centradas en octava 2
