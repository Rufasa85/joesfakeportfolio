import React from 'react';
import Card from './Card';

const pets = [{
  name: 'Spot',
  description: 'The best boy',
  id: 1,
},
{
  name: 'Puppy',
  description: 'Great dane with a heart of gold',
  id: 2,
},
{
  name: 'Cocoa',
  description: 'very rambunctious',
  id: 3,
},
{
  name: 'Bette Midler',
  description: 'not a cat, but in fact a lizard',
  id: 4,
},
]

export default function Display() {
  return (
    <div>
        {pets.map(pet=><Card key={pet.id} name={pet.name} description={pet.description} id={pet.id}/>)}
    </div>
  );
}
