export function setup() {
  console.log('UI');
  return {
    raw: [0, 0, 0],
    result: [0, 0, 0]
  };
}

export default function(source, values) {
  let rawValues = { average: [0, 0, 0], count: 0 };
  let resultValues = { average: [0, 0, 0], count: 0 };
  let data = createBuffer(source.buffer),
    r = 0,
    g = 0,
    b = 0,
    rgb = null,
    lab = null;

  function process(source, data) {
    for (var i = source.length / 4; i >= 0; i--) {
      rgb = getRGB(data[i]);
      lab = rgb2lab(rgb);
      calcAverage(rawValues, i, lab);
      clampLabByAverage(lab, values.raw, data, i, rgb);
      rgb = getRGB(data[i]);
      let labRaw = rgb2lab(rgb);
      calcAverage(resultValues, i, labRaw);
      clampLabByAverage(labRaw, values.result, data, i, rgb);
    }
    return {
      values: {
        raw: rawValues.average,
        result: resultValues.average
      },
      data: source
    };
  }

  return process(source, data);

  function rgb2lab(rgb) {
    let r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      x,
      y,
      z;

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  }

  function calcAverage(result, i, lab) {
    let count = result.count;
    if (lab[0] && lab[1] && lab[2]) {
      result.average[0] = (result.average[0] * count + lab[0]) / (count + 1);
      result.average[1] = (result.average[1] * count + lab[1]) / (count + 1);
      result.average[2] = (result.average[2] * count + lab[2]) / (count + 1);
      result.count++;
    }
  }

  function clampLabByAverage(lab, avg, data, i, rgb) {
    if (
      lab[0] > 55 &&
      lab[0] > avg[0] &&
      lab[1] > avg[1] &&
      lab[2] > avg[2] &&
      lab[2] > lab[1]
    ) {
      data[i] = getRGBFrag(rgb);
    } else {
      data[i] = getRGBFrag([0, 0, 0]);
    }
  }

  function createBuffer(buffer) {
    buffer = new Uint32Array(buffer);
    buffer.average = [0, 0, 0];
    buffer.count = 0;
    return buffer;
  }

  function getRGB(rgb) {
    b = (rgb >> 16) & 0xff; // blue
    g = (rgb >> 8) & 0xff; // green
    r = (rgb >> 0) & 0xff; // red
    return [r, g, b];
  }

  function getRGBFrag(rgb) {
    return (
      (255 << 24) | // Alpha
      (rgb[2] << 16) | // Blue
      (rgb[1] << 8) | // Green
      rgb[0]
    ); // Red
  }
}
