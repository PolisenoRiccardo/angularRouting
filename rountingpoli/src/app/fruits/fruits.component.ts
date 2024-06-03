import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits: Array<any>  = [
    { name: 'teffa7', emoji: '🍎' },    // Mela
    { name: 'limo', emoji: '🍋' },      // Limone
    { name: 'bortoqal', emoji: '🍊' },  // Arancia
    { name: 'muz', emoji: '🍌' },       // Banana
    { name: '3inab', emoji: '🍇' },     // Uva
    { name: 'fraoula', emoji: '🍓' },   // Fragola
    { name: 'de7', emoji: '🍉' },       // Anguria
    { name: 'frawla', emoji: '🍓' },    // Fragola
    { name: 'kiwi', emoji: '🥝' },      // Kiwi
    { name: 'khukh', emoji: '🍑' },     // Pesca
    { name: 'le3nab', emoji: '🍇' },    // Uva
    { name: 'bela', emoji: '🍐' },      // Pera
    { name: '7emama', emoji: '🍈' },    // Melone
    { name: 'ananass', emoji: '🍍' },   // Ananas
    { name: 'mangha', emoji: '🥭' },    // Mango
    { name: 'rumman', emoji: '🍏' },    // Melagrana
    { name: '9roq', emoji: '🍒' },      // Ciliegia
    { name: 'limoun', emoji: '🍋' },    // Limone
    { name: 'teffah', emoji: '🍎' },    // Mela
    { name: 'batalikh', emoji: '🍈' },  // Melone
    { name: 'khukh', emoji: '🍑' },     // Pesca
    { name: 'bwazzi', emoji: '🍌' },    // Banana
    { name: 'laymon', emoji: '🍋' },    // Limone
    { name: 'ananas', emoji: '🍍' },    // Ananas
    { name: 'tufa7', emoji: '🍏' },     // Mela
    { name: '3inab', emoji: '🍇' },     // Uva
    { name: 'tin', emoji: '🍉' },       // Anguria
    { name: 'zabib', emoji: '🍇' },     // Uva secca
    { name: 'battikh', emoji: '🍈' },   // Melone
    { name: 'shmam', emoji: '🍈' },     // Melone
    { name: 'ballout', emoji: '🍈' },   // Melone
    { name: 'bess', emoji: '🍋' },      // Limone
    { name: 'lawzi', emoji: '🍑' },     // Pesca
    { name: 'farawla', emoji: '🍓' },   // Fragola
    { name: 'rman', emoji: '🍏' },      // Melagrana
    { name: 'tanger', emoji: '🍊' },    // Mandarino
    { name: 'bardq', emoji: '🍊' },     // Arancia
    { name: 'lazwart', emoji: '🍇' }    // Uva blu
];

}
