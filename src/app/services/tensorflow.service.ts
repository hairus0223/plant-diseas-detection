import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root',
})
export class TensorflowService {
  private model: tf.GraphModel | null = null;

  constructor() {}

  async loadModel() {
    try {
      this.model = await tf.loadGraphModel('/assets/model/model.json');
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading model:', error);
    }
  }

  async predict(image: HTMLImageElement): Promise<number[] | null> {
    if (!this.model) {
      console.error('Model not loaded');
      return null;
    }

    // Preprocess the image
    const tensor = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([224, 224]) // Adjust size based on your model's input
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();

    // Make a prediction
    const predictions = (await this.model.predict(tensor)) as tf.Tensor;
    const results = Array.from(predictions.dataSync());

    // Clean up
    tensor.dispose();
    predictions.dispose();

    return results;
  }
}
