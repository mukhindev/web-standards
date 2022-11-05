import { CUSTOM_PROPERTY } from "./constants.js";

class FieldProgressPainter {
  static get inputProperties() {
    return [
      CUSTOM_PROPERTY.LENGTH,
      CUSTOM_PROPERTY.COLOR,
      CUSTOM_PROPERTY.HEIGHT,
    ];
  }

  paint(ctx, geom, properties, args) {
    const length = properties.get(CUSTOM_PROPERTY.LENGTH).value;
    const color = properties.get(CUSTOM_PROPERTY.COLOR);
    const height = properties.get(CUSTOM_PROPERTY.HEIGHT).value;

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(0, geom.height, (geom.width / 100) * length, -height);
    ctx.fill();
  }
}

registerPaint("field-progress", FieldProgressPainter);
