# Hide

FLUFF. When you hide, make an Agility (Stealth) skill check, and immediately loose all your remaining movement. Choose a number of valid hiding spots equal to your skill check result divided by 5, **rounded up.** Then, gain the [hidden]() status, although you do not immediately choose which hiding spot you are actually hiding in. In order for a hiding spot to be valid, it must be both **reasonable** and **veiled**:

- **Reasonable**
  - The spot is within range of your available movement when you take the Hide minor action
  - The spot is in a place that you could end your turn normally
  - The spot is large enough to contain all of your tiles
  - The spot would not trigger an obvious effect when moving into it (such as an *alarm* consumable, walking through a pool of acid, or triggering an attack of opportunity)
- **Veiled**
  1. At least one of the following is true:
     1. the area is in darkness
     2. the area is heavily shrouded
     3. the area behind full cover, relative to all enemy creatures
  2. Or, at least two of the following are true:
     1. the area is in dim light
     2. the area is lightly shrouded
     3. the area is behind partial (or full) cover, relative to all enemy creatures

If you take the Hide minor action while already hidden, designate new hiding spots in addition to your current ones. Performing this action again gives enemies another opportunity to [Track]() you if they still have a reaction available. When determining the distance requirement, measure from the nearest active hiding spot. This allows you to carefully move while hidden, expanding the network of your potential locations the longer you go without being found.

# Scan

Take a moment to learn more about your surroundings. If you are skilled enough to effortlessly learn about what you focus on, you may still have time to learn something else. Whenever you take the Scan minor action, you immediately gain one of the benefits listed below. Then, you may roll the listed skill check. If the result is 15 or higher, you may repeat the Scan minor action (choosing a different benefit if desired).

- **Reveal:** Choose a hiding spot within 6 tiles and reveal it. 
  - Focus (Perception). You have advantage on this skill check if you are adjacent to the chosen tile, and disadvantage if it is more than 3 tiles away from you.
- **Size Up:** Learn the attributes, tier and turns per round of a creature of your choice. 
  - Focus (Anima)
- **Triage:** Learn the percentage of life and the number of stacks of exhaustion that another creature is at. 
  - Focus (Medicine)
- **Classify:** Learn either the arms, armor, or trinket affixes of a creature of your choice. If you choose to learn their trinket affixes, you also learn the skills that they are proficient in. 
  - Expertise (Anima)
- **Identify:** Learn the details of a single power of your choice. You have advantage on this skill check if this power was used since your last turn. 
  - Expertise (Arcana)
- **Scout:** Learn the details of a vantage of your choice. If you do not specify a particular vantage, learn one of the worldspeaker's choice instead. 
  - Expertise (Arcana | Anima | Fontcraft | Tinkering). The skill used depends on the details of the vantage, and is specified in its description.

If there is no more information to gain from the benefit you chose, you may swap it out for a different one for free. Mechanical enemies use the 0-cost _mechanical_ trinket affix, which causes the Medicine and Anima skill checks in this list to be made with Tinkering instead. Elemental enemies will have the _primordial_ affix instead, which changes those skill checks into Fontcraft skill checks.

# Track

When a creature uses the Hide minor action (including if they are already hidden) and chooses at least one hiding spot that is within 6 tiles of you, you may attempt to track where they are attempting to hide. Like all effects with a range, this is blocked by full cover.

Make a Focus (Perception) skill check. If the result is greater than or equal to the Agility (Stealth) skill check from their Hide minor action, all of their hiding places within 6 tiles of you are immediately revealed.

# Hidden

While hidden:

- your position is uncertain, as explained below
- you do not impose disadvantage on ranged attacks to creatures in your zone of control
- you cannot shift
- for the purposes of determining ranges for your actions (such as attacks of opportunity), you are treated as if you occupied all of the hiding spots you are in

The hidden status on you ends immediately after:

- one of your hiding spot was revealed, and the investigating creature rolled an X on their discovery roll
- you spend movement to travel laterally
- you make an attack against or apply a boon to a creature other than yourself

After you are revealed, you appear in the the tile from which you took the action in question (having been hiding there all along) and have advantage on single-target attacks until the end of the current turn. If the tile(s) are now occupied (and you cannot normally share tiles), you appear in the nearest tile(s) of your choice instead.

Other creatures can reveal hiding spots by taking the Scan minor action or Track reaction. Hiding spots are also immediately revealed when they no longer suitable, as defined below:

1. At least one of the following is true:
   1. the area is in darkness
   2. the area is heavily shrouded
   3. you are behind full cover, relative to all enemies creatures
2. Or, at least two of the following are true:
   1. the area is in dim light
   2. the area is lightly shrouded
   3. you are behind partial (or full) cover, relative to all enemies creatures

When a hiding spot is revealed, the creature who revealed the hiding spot makes a **discovery roll:**

1. Roll 1dX, where X is the remaining number of hiding spots that creature has.
2. On a result of 1, the hidden status ends. Remove all hiding spots associated with that creature from the battlemap.
3. On any other result, remove this hiding spot from the battlemap.

You may always choose to be revealed by a discovery roll.

<div class="infobox">

**Rolling 1dX with rejection sampling**

Discovery rolls tell you to "Roll 1dX, where X is the remaining number of hiding spots that creature has."
While this makes plenty of sense as a game mechanic, the implementation can be a bit puzzling.

If you're playing on a virtual tabletop, this is trivial. Simply /roll 1d7 and you're good to go.
Those playing with physical dice may find this more challenging: few people have a d2, d3, d5 or a d7 around!

The fastest and easiest way to mimic dice with unusual numbers of sides is a technique called **rejection sampling:**

1. Pick a die that is slightly larger than the die you wish to simulate. If you were rolling a d7, pick a d8 for example.
2. Roll the larger die.
3. If the roll is possible on the desired die (in our example 1 through 7), you're done! Use this roll.
4. If the roll is larger than the highest value possible on the desired die (in our example, an 8), roll the dice again. Repeat until you get a valid number.

This produces fair results quickly and without the need for any special tools.

</div>

Creatures (and other entities such as traps or pools of acid) can make attacks can be made against your hiding spot, guessing that you are there:

1. If the attack would hit your defense, the attacker makes a discovery roll, revealing hiding spots in the usual fashion.
   1. No discovery roll is made (and hence no hiding spots are revealed) if you miss.
2. On a roll of 1, you also suffer the attack's effects.
3. On any other roll, you do not suffer the attack's effects (as you were not in that location after all).

If multiple hiding spots would be hit by a multi-target attack, the discovery roll is a success on any number less than or equal to the number of hiding spots that would be hit. In that case, reveal all hiding spots other than those that were hit.

Boons (and other effects which do not require an attack roll) function in an identical fashion, except that your hiding spots are not revealed due to the discovery rolls. BUG: If the boon is sucessfully applied, you are either in that location, or inconsistencies are created.

# Blinded

All other creatures are invisible to you, causing you to have disadvantage on single-target attacks.

You cannot use the Traack reaction or reveal hiding places with the Scan minor action.

# Invisible

You are invisible to all other creatures, causing single-target attacks made against you have disadvantage.

Hiding places are always suitable for you, regardless of the environmental conditions.
