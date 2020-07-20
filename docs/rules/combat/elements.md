# Elements
One of the central concepts in Fonts of Power is the idea of unique, distinct elements that deal damage of different types and, from a thematic perspective, have different effects and abilities associated with them. In additional to **physical damage,** there are 12 **elemental damage types,** arranged in opposing pairs:
* **air** and **earth**
* **fire** and **water**
* **arcane** and **eldritch**
* **radiant** and **umbral**
* **primal** and **decay**
* **electric** and **corrosion**

Creatures can be **vulnerable, resistant,** or **immune** to types of damage. Creatures that are vulnerable to an element take twice as much damage from that element, if they are resistant they take half as much from that element, and immunity they ignore all damage of that element.

There are two different ways in which multiple various damage types might be combined: **split damage** and **hybrid damage.**

## Split Damage {docsify-ignore}
Split damage is evenly divided among its base types. In the event of an uneven division, the remainder is of the most effective type. 

For example, if you were to deal 13 fire-physical split damage to a creature that was vulnerable to fire, you would first split the damage in half, dealing 6 of each type. The remainder would become fire damage, resulting in 7 fire damage, and 6 physical damage. Due to the vulnerability, the fire damage would be doubled, and the creature would lose 7 × 2 + 6 = 20 life.

## Hybrid Damage {docsify-ignore}
Hybrid damage is treated as the most effective of its base types:
* A creature is vulnerable to the hybrid type if it is vulnerable to any of the base types.
* A creature is only resistant to the hybrid type if it is resistant to all of the base types.
* A creature is only immune to the hybrid type if it is immune to all of the base types.
