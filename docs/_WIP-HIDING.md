# Hide

Choose a hiding spot, gain the hidden status, spend all of your movement and make an Agility (Stealth) skill check. For every 5 points of your skill check result, you may designate one additional location of your choice as a hiding spot. Hiding spots must be:

- **reachable**
  - hiding spots must be within range of your avaiable movement at the time that you use the Hide minor action
  - this is affected by all of the ordinary effects, such as the withered ailment, difficult terrain, height tiers and so on
- **suitable**
  1. At least one of the following is true:
     1. the area is in darkness
     2. the area is heavily shrouded
     3. you are behind full cover, relative to all enemies creatures
  2. Or, at least two of the following are true:
     1. the area is in dim light
     2. the area is lightly shrouded
     3. you are behind partial (or full) cover, relative to all enemies creatures
- **sizable**
  - hiding spots must be able to contain all of your connected tiles
    - if a creature has an affix such as _horde_ or _amorphous_, the hidden status applies to specific subcomponents seperately
  - you must be able to end your turn there: typically, this means they must be empty
- **traceless**
  - you cannot designate a hiding spot that would require you to trigger a tile effect or attack of opportunity
  - you can get around this restriction by moving further first, then hiding
  - this restriction avoids terrible paradoxes, but should rarely come into play

If you were already hidden, you may designate new hiding spots. For the purposes of the reachable criteria, distance is measured from your nearest current hiding spot. This allows you to carefully move while hidden, expanding the network of possible places you could be the longer you go without being found.

<div class="infobox">

**Effective Stealth**

The Hide minor action can be incredibly powerful in the hands of a specialist, but using it effectively requires sophisticated strategy.

The first step is setting up the battlefield properly, to ensure that you have access to appropriate possible hiding places.
You can become invisible, linger in the shadows by disabling sources of light, create shrouded effects or cause convenient cover to pop into existence.
Several classes, such as the Shaman, Weaver and Devout have powers that do this effectively, but consumable affixes like _??_ and arms affixes like _??_ are always accesible.

Once you have a place to hide, make sure that you can get to it without getting seen!
Extra movement, such as from the _fast_ affix or the Dash minor action can make a big difference when you're looking to dive in, strike hard and then vanish back into the shadows.

As you slip away, your biggest worry is the Track reaction, which can completely shut down your attempts to hide.
Pay attention to which enemies have their reaction available, and do everything you can to force them to use it before you hide.
Hit so hard that your opponent has to focus on dodging or blocking, team up with durable frontliners who deliberately provoke attacks of opportunity with the _overpowered_ affix, apply stacks of lethargic, or dip in, strike, dip out and then dodge the resulting attack of opportunity!

</div>

# Scan

Learn more about the battlefield. When you use the Scan minor action, gain one of the benefits listed below. If there is no more information to gain of the type specified, you may choose another type of information instead for free. Once you have learned the chosen information, make a skill check of the type listed. If your result is 15 or higher, gain the effects of the Scan minor action again.

- **Focus (Perception):** Choose a hiding spot within 6 tiles and reveal it. You have advantage on this skill check if you are adjacent to the chosen tile, and disadvantage if it is more than 3 tiles away from you.
- **Focus (Anima):** Learn the attributes, tier and turns per round of a creature of your choice.
- **Focus (Medicine):** Learn the percentage of life and the number of stacks of exhaustion that another creature is at.
- **Expertise (Anima):** Learn either the arms, armor or trinket affixes of a creature of your choice. If you choose to learn their trinket affixes, you also learn the skills that they are proficient in.
- **Expertise (Arcana):** Learn the details of a single power of your choice. You have advantage on this skill check if this power was used since your last turn.
- **Expertise (Arcana | Anima | Fontcraft | Tinkering):** Learn the details of a vantage of your choice. If you do not specify a particular vantage, one of the worldspeaker's choice is chosen instead. The skill used depends on the details of the vantage, and is specified in its description.

Mechanical enemies use the 0-cost _mechanical_ trinket affix, which causes the Medicine and Anima skill checks in this list to be made with Tinkering instead. Elemental enemies will have the _primordial_ affix instead, which changes those skill checks into Fontcraft skill checks.

# Track

When a creature within a 6 tile range of you uses the Hide minor action, you may attempt to track where they are attempting to hide. Make a Focus (Perception) skill check. If your result is greater than or equal to the Agility (Stealth) skill check result of their Hide minor action, all of their hiding places are immediately revealed.

Like all effects with a range, this is blocked by full cover.

If the creature used the Hide minor action was hidden already, you may use this reaction if they designate any new hiding points that are within a 6 tile range.

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

Creatures (and other entities such as traps or pools of acid) can make attacks can be made against your hiding spot, guessing that you are there:

1. If the attack would hit your defense, the attacker makes a discovery roll, revealing hiding spots in the usual fashion.
   1. No discovery roll is made (and hence no hiding spots are revealed) if you miss.
2. On a roll of 1, you also suffer the attack's effects.
3. On any other roll, you do not suffer the attack's effects (as you were not in that location after all).

If multiple hiding spots would be hit by a multi-target attack, the discovery roll is a success on any number less than or equal to the number of hiding spots that would be hit. In that case, reveal all hiding spots other than those that were hit.

Boons (and other effects which do not require an attack roll) function in an identical fashion, except that your hiding spots are not revealed due to the discovery rolls. BUG: If the boon is sucessfully applied, you are either in that location, or inconsistencies are created.

# Blinded

You have disadvantage on single-target attacks.

You cannot use the Traack reaction or reveal hiding places with the Scan minor action.

# Invisible

Single-target attacks made against you have disadvantage.

Hiding places are always suitable for you, regardless of the environmental conditions.
