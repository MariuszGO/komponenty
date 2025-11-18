import { Component } from '@angular/core';
import { syn } from './syn/syn';
import { corka } from './corka/corka';


@Component({
selector: 'app-root',
standalone: true,
imports: [syn, corka],
templateUrl: './app.html',
 styleUrl: './app.css',
})
export class App {}