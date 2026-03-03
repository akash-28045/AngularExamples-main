import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
title = signal('Directive_Demo');

products = [
{
  name: 'Laptop', description: 'High Performance Computing', price: '$5000'
},
{
  name: 'Mobile Phone', description: 'Smart Features, Smooth Use', price: '$3500'
},
{
  name: 'Tablet', description: 'Lightweight Device for Study', price: '$1000'
},
{
  name: 'Smart Watches', description: 'Smart Tracking Device', price: '$500'
},
{
  name: 'Smart TV', description: ' Smart Streaming Device-OTT', price: '$2000'
},
{
  name: 'PowerBank', description: 'Long Lasting Battery', price: '$200'
},
{
  name: 'Washing Machine', description: 'Powerful Cleaning Performance', price: '$3500'
},
{
  name: 'AC', description: 'AI Powered Cooling', price: '$4000'
},
{
  name: 'Refrigerator', description: ' Cool Fresh Storage', price: '$3000'
}
]
}