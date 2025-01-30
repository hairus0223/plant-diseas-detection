import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TensorflowService } from './services/tensorflow.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Plant Disease Detection</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" (click)="captureImage()"
        >Capture Image</ion-button
      >
      @if(imageSrc) {
      <img [src]="imageSrc" alt="Captured Image" />
      } @if(prediction) {
      <ion-card>
        <ion-card-header>Prediction</ion-card-header>
        <ion-card-content>
          <p>{{ prediction }}</p>
        </ion-card-content>
      </ion-card>
      }
    </ion-content>
  `,
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
  ],
})
export class AppComponent implements OnInit {
  imageSrc: string | undefined;
  prediction: string | undefined;

  constructor(private tensorflowService: TensorflowService) {}

  async ngOnInit() {
    await this.tensorflowService.loadModel();
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    this.imageSrc = image.webPath;

    if (image.webPath) {
      const img = new Image();
      img.src = image.webPath;
      img.onload = async () => {
        const predictedClass = await this.tensorflowService.predict(img);
        if (predictedClass) {
          this.prediction = `Predicted Disease: ${predictedClass}`;
        }
      };
    }
  }
}
