
var races = {
	elf:{
		name:"Elf",
		hitDice:3,
		mana:5,
		strength:0,
		dexterity:2,
		toughness:0,
		willpower: 1,
		mental: 2
	},
	human:{
		name:"Human",
		hitDice:4,
		mana:4,
		strength:1,
		dexterity:1,
		toughness:1,
		willpower: 1,
		mental: 1
	},
	dwarf:{
		name:"Dwarf",
		hitDice:5,
		mana:3,
		strength:1,
		dexterity:0,
		toughness:2,
		willpower: 2,
		mental: 0
	}
}

var enemyRaces = {
	slime:{
		name:"Elf",
		hitDice:3,
		mana:5,
		strength:0,
		dexterity:2,
		toughness:0,
		willpower: 1,
		mental: 2
	},
	goblin:{
		name:"Human",
		hitDice:4,
		mana:4,
		strength:1,
		dexterity:1,
		toughness:1,
		willpower: 1,
		mental: 1
	},
	orc:{
		name:"Dwarf",
		hitDice:5,
		mana:3,
		strength:1,
		dexterity:0,
		toughness:2,
		willpower: 2,
		mental: 0
	}
}



var enemyProfession = {
	soldier:{
		name:"Soldier",
		hitDice:5,
		mana:1,
		strength:2,
		dexterity:1,
		toughness:2,
		willpower: 0,
		mental: 0,
		minionEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		standardEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		eliteEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		bossEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		}
	},
	lurker:{
		name:"Lurker",
		hitDice:5,
		mana:1,
		strength:1,
		dexterity:3,
		toughness:1,
		willpower: 0,
		mental: 0,
		minionEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		standardEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		eliteEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		bossEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		}
	},
	caster:{
		name:"Caster",
		hitDice:5,
		mana:1,
		strength:0,
		dexterity:1,
		toughness:0,
		willpower: 2,
		mental: 2,
		minionEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		standardEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		eliteEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		bossEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		}
	},
	brute:{
		name:"Brute",
		hitDice:5,
		mana:1,
		strength:2,
		dexterity:0,
		toughness:3,
		willpower: 0,
		mental: 0,
		minionEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		standardEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		eliteEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		},
		bossEquipment:{
			startingWeapon: "longSword",
			startingArmor:"chainArmor",
			startingWand:"firWand",
			startingSymbol:"woodSymbol",
			startingAccessory:"copperRing"	
		}
	}
}

var profession = {
	fighter:{
		name:"Fighter",
		hitDice:5,
		mana:1,
		strength:2,
		dexterity:1,
		toughness:2,
		willpower: 0,
		mental: 0,
		startingWeapon: "longSword",
		startingArmor:"chainArmor",
		startingWand:"firWand",
		startingSymbol:"woodSymbol",
		startingAccessory:"copperRing"
	},
	healer:{
		name:"Healer",
		hitDice:1,
		mana:5,
		strength:0,
		dexterity:0,
		toughness:1,
		willpower: 3,
		mental: 1,
		startingWeapon: "dagger",
		startingArmor:"paddedArmor",
		startingWand:"mahoganyWand",
		startingSymbol:"steelSymbol",
		startingAccessory:"bronzeRing"
	},
	paladin:{
		name:"Paladin",
		hitDice:3,
		mana:2,
		strength:2,
		dexterity:0,
		toughness:1,
		willpower: 2,
		mental: 0,
		startingWeapon: "cutlass",
		startingArmor:"hideArmor",
		startingWand:"firWand",
		startingSymbol:"bronzeSymbol",
		startingAccessory:"copperRing"
	},
	thief:{
		name:"Thief",
		hitDice:2,
		mana:3,
		strength:1,
		dexterity:3,
		toughness:1,
		willpower: 0,
		mental: 0,
		startingWeapon: "rapier",
		startingArmor:"leatherArmor",
		startingWand:"oakWand",
		startingSymbol:"copperSymbol",
		startingAccessory:"bronzeRing"
	},
	wizard:{
		name:"Wizard",
		hitDice:1,
		mana:5,
		strength:0,
		dexterity:0,
		toughness:1,
		willpower: 1,
		mental: 3,
		startingWeapon: "dagger",
		startingArmor:"clothArmor",
		startingWand:"obsidianWand",
		startingSymbol:"copperSymbol",
		startingAccessory:"steelRing"
	}
}

var equipment = {
	weapon : {
		dagger: {
			id:"dagger",
			name:"Dagger",
			damage:1,
			bonus:0,
			cost:100
		},
		shortSword: {
			id:"shortSword",
			name:"Short Sword",
			damage:2,
			bonus:0,
			cost:200
		},
		cutlass:{
			id:"cutlass",
			name:"Cutlass",
			damage:3,
			bonus:0,
			cost:300
		},
		rapier:{
			id:"rapier",
			name:"Rapier",
			damage:4,
			bonus:0,
			cost:400
		},
		longSword:{
			id:"longSword",
			name:"Long Sword",
			damage:5,
			bonus:0,
			cost:500
		},
		scimitar:{
			id:"scimitar",
			name:"Scimitar",
			damage:6,
			bonus:0,
			cost:600
		},
		bastardSword:{
			id:"bastardSword",
			name:"Bastard Sword",
			damage:7,
			bonus:0,
			cost:700
		},
		greatSword:{
			id:"greatSword",
			name:"Great Sword",
			damage:8,
			bonus:0,
			cost:800
		}
	},
	armor:{
		clothArmor:{
			id:"clothArmor",
			name:"Cloth Armor",
			defenseValue:1,
			bonus:0,
			cost:100	
		},
		paddedArmor:{
			id:"paddedArmor",
			name:"Padded Armor",
			defenseValue:2,
			bonus:0,
			cost:200
		},
		leatherArmor:{
			id:"leatherArmor",
			name:"Leather Armor",
			defenseValue:3,
			bonus:0,
			cost:300
		},
		hideArmor:{
			id:"hideArmor",
			name:"Hide Armor",
			defenseValue:4,
			bonus:0,
			cost:400
		},
		chainArmor:{
			id:"chainArmor",
			name:"Chain Armor",
			defenseValue:5,
			bonus:0,
			cost:500
		},
		scaleArmor:{
			id:"scaleArmor",
			name:"Scale Armor",
			defenseValue:6,
			bonus:0,
			cost:600
		},
		breastPlate:{
			id:"breastPlate",
			name:"Breastplate",
			defenseValue:7,
			bonus:0,
			cost:700
		},
		plateArmor:{
			id:"plateArmor",
			name:"Plate Armor",
			defenseValue:8,
			bonus:0,
			cost:800
		}
	},
	holySymbol:{
		woodSymbol:{
			id:"woodSymbol",
			name:"Wooden Holy Symbol",
			heal: 1,
			bonus:0,
			cost:100
		},
		copperSymbol:{
			id:"copperSymbol",
			name:"Copper Holy Symbol",
			heal: 2,
			bonus:0,
			cost:200
		},
		bronzeSymbol:{
			id:"bronzeSymbol",
			name:"Bronze Holy Symbol",
			heal:3,
			bonus:0,
			cost:300
		},
		ironSymbol:{
			id:"ironSymbol",
			name:"Iron Holy Symbol",
			heal:4,
			bonus:0,
			cost:400
		},
		steelSymbol:{
			id:"steelSymbol",
			name:"Steel Holy Symbol",
			heal:5,
			bonus:0,
			cost:500
		},
		silverSymbol:{
			id:"silverSymbol",
			name:"Silver Holy Symbol",
			heal:6,
			bonus:0,
			cost:600
		},
		goldSymbol:{
			id:"goldSymbol",
			name:"Gold Holy Symbol",
			heal:7,
			bonus:0,
			cost:700
		},
		diamondSymbol:{
			id:"diamondSymbol",
			name:"Diamond Holy Symbol",
			heal:8,
			bonus:0,
			cost:800
		}
	},
	accessory:{
		woodRing : {
			id:"woodRing",
			name:"Wooden Ring",
			defenseValue:1,
			bonus:0,
			cost:100
		},
		copperRing : {
			id:"copperRing",
			name:"Copper Ring",
			defenseValue:2,
			bonus:0,
			cost:200
		},
		bronzeRing : {
			id:"bronzeRing",
			name:"Bronze Ring",
			defenseValue:3,
			bonus:0,
			cost:300
		},
		ironRing : {
			id:"ironRing",
			name:"Iron Ring",
			defenseValue:4,
			bonus:0,
			cost:400
		},
		steelRing : {
			id:"steelRing",
			name:"Steel Ring",
			defenseValue:5,
			bonus:0,
			cost:500
		},
		silverRing : {
			id:"silverRing",
			name:"Silver Ring",
			defenseValue:6,
			bonus:0,
			cost:600
		},
		goldRing : {
			id:"goldRing",
			name:"Gold Ring",
			defenseValue:7,
			bonus:0,
			cost:700
		},
		diamondRing : {
			id:"diamondRing",
			name:"Diamond Ring",
			defenseValue:8,
			bonus:0,
			cost:800
		}
	},
	wand : {
		firWand : {
			id:"firWand",
			name:"Fir Wand",
			damage:3,
			bonus:0,
			cost:300
		},
		oakWand : {
			id:"oakWand",
			name:"Oak Wand",
			damage:3,
			bonus:0,
			cost:300
		},
		mahoganyWand : {
			id:"mahoganyWand",
			name:"Mahogany Wand",
			damage:3,
			bonus:0,
			cost:300
		},
		crystalWand : {
			id:"crystalWand",
			name:"Crystal Wand",
			damage:3,
			bonus:0,
			cost:300
		},
		obsidianWand : {
			id:"obsidianWand",
			name:"Obsidian Wand",
			damage:3,
			bonus:0,
			cost:300
		},
		rubyWand : {
			id:"rubyWand",
			name:"Ruby Wand",
			damage:3,
			bonus:0,
			cost:300
		},
		sapphireWand : {
			id:"sapphireWand",
			name:"Sapphire Wand",
			damage:7,
			bonus:0,
			cost:700
		},
		diamondWand : {
			id:"diamondWand",
			name:"Diamond Wand",
			damage:8,
			bonus:0,
			cost:800
		}
	}
}



function combat(allies, opponents){
	var inProgress = true;
	var combatQueue = new Array();
	var alliesLength = allies.length;
	var opponentsLength = opponents.length;
	for(var i = 0; i < alliesLength; i++){
		combatQueue.push(allies[i])
	}
	for(i = 0; i < opponentsLength; i++){
		combatQueue.push(opponents[i])
	}
	
	for(i=0; i < combatQueue.length; i++){
		console.log(combatQueue[i].vitals.name + ' init: ' + combatQueue[i].combat.initiative );
	}
	
	combatQueue.sort(function(a,b){
		a.combat.initiative - b.combat.initiative;
	});
	
	for(i=0; i < combatQueue.length; i++){
		console.log(combatQueue[i].vitals.name + ' init: ' + combatQueue[i].combat.initiative );
	}
	
	while(inProgress){
	inProgress=false;	
	}
	
}

var player = new Entity({strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1}, "elf", "wizard", races, profession, "Vanidar", equipment, 1);
var player2 = new Entity({strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1}, "dwarf", "fighter", races, profession, "Alrick", equipment, 1);
var enemy = new Entity({strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1}, "elf", "thief", races, profession, "Jander", equipment, 1);
var enemy2 = new Entity({strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1}, "human", "paladin", races, profession, "Derek", equipment, 1);

var allies = [player,player2];
var opponents = [enemy, enemy2];

combat(allies,opponents);

var diceRoller = function(numDice, dieType){
	var randomNumber = 0;
	var generatedNumber = 0;
	for(var i=0; i < numDice; i++){
		randomNumber = (Math.floor(Math.random()*dieType) + 1);
		generatedNumber += randomNumber;
	} 			
	return generatedNumber;
}

var attackRoll = function(attacker, defender, attackType, attackerID){
	
	var attackRoll, damageRoll, totalDamage, result, hitRating, defenseRating, damageBonus, armorBonus, weaponDamage;
	
	switch (attackType){
		case "physical":
			hitRating = attacker.combat.physicalAttack;
			damageBonus = attacker.equipment.weapon.bonus;
			weaponDamage = attacker.equipment.weapon.damage;
			armorBonus = defender.equipment.armor.bonus;
			defenseRating = defender.combat.physicalDefense;
			break;
		case "magic":
			hitRating = attacker.combat.magicAttack;
			damageBonus = attacker.equipment.wand.bonus;
			weaponDamage = attacker.equipment.wand.damage;
			defenseRating = defender.combat.magicDefense;
			armorBonus = defender.equipment.accessory.bonus;
			break;
		default:
			break;
	}
	
	attackRoll = hitRating + diceRoller(1, 20);
	console.log('attackRoll: ' + attackRoll + ' defenseRating: '+ defenseRating);
		if(attackRoll > defenseRating){
			result = "Hit"
			damageRoll = damageBonus + diceRoller(1, weaponDamage);
			if(damageRoll < armorBonus){
				totalDamage=1;
				defender.vitals.currentHitPoints -= totalDamage;
			} else {
				totalDamage = damageRoll - armorBonus;
				defender.vitals.currentHitPoints -= totalDamage;
				
			} 
			
		} else {
				result = "Miss"
		}
		//console.log('current hit points: ' + defender.vitals.currentHitPoints);
		if(defender.vitals.currentHitPoints < 1){
			console.log('dead!')
			alert('You killed ' + defender.vitals.name);
		}
		
		switch(attackerID){
			case 'player':
				updateCombatZone(attacker, defender);
			break;
			case 'enemy':
				updateCombatZone(defender, attacker)
			break;
		}

		console.log("AttackResult: " + result);
		console.log("Damage: " + totalDamage);
}



function lookupEquipment(equipmentID, equipmentSlot){
	return equipment[equipmentSlot][equipmentID];
}

//Entity Constructor
function Entity(bonusArray, myRace, myProfession, race, profession, name, equipment, level ){
	this.attributes = { 
		strength: 1 + race[myRace].strength + profession[myProfession].strength + bonusArray.strength,
		dexterity: 1 + race[myRace].dexterity + profession[myProfession].dexterity + bonusArray.dexterity,
		toughness: 1 + race[myRace].toughness + profession[myProfession].toughness + bonusArray.toughness,
		willpower: 1 + race[myRace].willpower + profession[myProfession].willpower + bonusArray.willpower,
		mental: 1 + race[myRace].mental + profession[myProfession].mental + bonusArray.mental
	};
	this.equipment = {
		armor : lookupEquipment(profession[myProfession].startingArmor, "armor"),
		weapon : lookupEquipment(profession[myProfession].startingWeapon, "weapon"),
		wand: lookupEquipment(profession[myProfession].startingWand, "wand"),
		holySymbol: lookupEquipment(profession[myProfession].startingSymbol, "holySymbol"),
		accessory: lookupEquipment(profession[myProfession].startingAccessory, "accessory"),
		gold: 0
	};
	this.combat = {
		initiative: this.attributes.dexterity,
		physcialAttack: this.attributes.strength + this.attributes.dexterity,
		magicAttack: this.attributes.mental + this.attributes.willpower,
		physicalDamage: this.attributes.strength + this.attributes.dexterity,
		magicDamage:this.attributes.mental + this.attributes.willpower,
		physicalDefense:this.attributes.strength + this.attributes.dexterity,
		magicDefense:this.attributes.mental + this.attributes.willpower,
		heal:this.attributes.willpower,
	};
	this.vitals = {
		name: name,
		race: myRace,
		level: level,
		hitDice: race[myRace].hitDice + profession[myProfession].hitDice,
		manaDice: race[myRace].mana + profession[myProfession].mana,
		maxHitPoints: this.attributes.toughness + level * (race[myRace].hitDice + profession[myProfession].hitDice),
		maxMagicPoints: this.attributes.willpower + this.attributes.mental + level * (race[myRace].mana + profession[myProfession].mana),
		currentHitPoints:this.attributes.toughness + level * (race[myRace].hitDice + profession[myProfession].hitDice),
		currentMagicPoints: this.attributes.willpower + this.attributes.mental + level * (race[myRace].mana + profession[myProfession].mana),
		bloodedValue: (this.attributes.toughness + level * (race[myRace].hitDice + profession[myProfession].hitDice)) * .5,
		criticalValue: (this.attributes.toughness + level * (race[myRace].hitDice + profession[myProfession].hitDice)) * .25,
		experiencePoints:0,
		classType:myProfession,
		status: ""
	};
	this.inventory={};
	this.equipItem = function(item, slot){
		var equipmentSlot = this.equipment[slot];
		if (equipmentSlot.hasOwnPorperty()){
			var unequippedItem = this.equipment[slot];	
			equipment[slot] = equipmentSlot[item];
			this.inventory.push(slot, unequippedItem);
		}
	}
};



var equipPlayer = function(entity, item, slot){
	//var unequippedItem = player.equipment[slot];
	var equipmentSlot = equipment[slot];
	entity.equipment[slot] = equipmentSlot[item];
	//player.inventory.push(slot, unequippedItem);
	
}

////////////////////////////////////////////////////
// finish building magic armor and wand objects
// Enchantment cost = itemcost * bonus number
// add ItemAttribute to entity and requiredAttribute to equipmentArrays - magic: mental + willpower physical: Strength + dexterity
// have to add combat and vitals after entity was created to reference entity attributes
var characterSheet = function(entity){
	document.writeln('<div>' + entity.vitals.name + ' ' + entity.vitals.race + ' ' + entity.vitals.profession + '</div>');
	document.writeln('<div>' + 'Level ' + entity.vitals.level + '</div>');
	document.writeln('<br />');
	document.writeln('<div>' + 'Attributes:' + '</div>');
	document.writeln('<div>' + '---------------------------------------------------------------------------' + '</div>');
	document.writeln('<div>' + 'Strength: ' + entity.attributes.strength + '</div>');
	document.writeln('<div>' + 'Dexterity: ' + entity.attributes.dexterity + '</div>');
	document.writeln('<div>' + 'Toughness: ' + entity.attributes.toughness + '</div>');
	document.writeln('<div>' + 'Willpower: ' + entity.attributes.willpower + '</div>');
	document.writeln('<div>' + 'Mental: ' + entity.attributes.mental + '</div>');
	document.writeln('<br />');
	document.writeln('<div>' + 'Statistics:' + '</div>');
	document.writeln('<div>' + '---------------------------------------------------------------------------' + '</div>');
	document.writeln('<div>' + 'Hit Points: '  + entity.vitals.maxHitPoints + '</div>');
	document.writeln('<div>' + 'Mana: '  + entity.vitals.maxMagicPoints + '</div>')
	document.writeln('<div>' + 'Initiative Bonus: ' + entity.combat.initiative + '</div>');
	document.writeln('<div>' + 'Physical Defense: ' + entity.combat.physicalDefense + '</div>');
	document.writeln('<div>' + 'Magic Defense: ' + entity.combat.magicDefense + '</div>');
	document.writeln('<div>' + 'Armor: ' + entity.equipment.armor.defenseValue + '</div>');
	document.writeln('<div>' + 'Arcane Armor: ' + entity.equipment.accessory.defenseValue + '</div>');
	document.writeln('<div>' + 'Physical Attack: ' + entity.combat.physicalAttack + '</div>');
	document.writeln('<div>' + 'Physical Damage: ' + ( entity.combat.physicalDamage + entity.equipment.weapon.damage ) +  '</div>');
	document.writeln('<div>' + 'Magic Attack: ' + entity.combat.magicAttack + '</div>');
	document.writeln('<div>' + 'Magic Damage: ' + (entity.combat.magicDamage + entity.equipment.wand.magicDamage) + '</div>');
	document.writeln('<div>' + 'Heal: ' + (entity.equipment.holySymbol.heal + entity.combat.heal) + '</div>');
	document.writeln('<br />')
	document.writeln('<div>' + 'Equipment:' + '</div>');
	document.writeln('<div>' + '---------------------------------------------------------------------------' + '</div>');
	document.writeln('<div>' + 'Armor: ' + entity.equipment.armor.name + '</div>');
	document.writeln('<div>' + 'Accessory: ' + entity.equipment.accessory.name + '</div>');
	document.writeln('<div>' + 'Wand: ' + entity.equipment.wand.name + '</div>');
	document.writeln('<div>' + 'Holy Symbol: ' + entity.equipment.holySymbol.name + '</div>');
	document.writeln('<div>' + 'Weapon: ' + entity.equipment.weapon.name + '</div>');	
};

function updateCombatZone(player, enemy){
	var allyName = document.querySelector('.js-ally .js-name');
	var allyHealth = document.querySelector('.js-ally .js-hitPoints');
	var allyMana = document.querySelector('.js-ally .js-magicPoints');
	var enemyName = document.querySelector('.js-enemy .js-name');
	var enemyHealth = document.querySelector('.js-enemy .js-hitPoints');
	var enemyMana = document.querySelector('.js-enemy .js-magicPoints');
	
	allyName.innerHTML = player.vitals.name;
	allyHealth.innerHTML = player.vitals.currentHitPoints;
	allyMana.innerHTML = player.vitals.currentMagicPoints;
	enemyName.innerHTML = enemy.vitals.name;
	enemyHealth.innerHTML = enemy.vitals.currentHitPoints;
	enemyMana.innerHTML = enemy.vitals.currentMagicPoints;
}

var player = new Entity({strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1}, "dwarf", "fighter", races, profession, "Alrick", equipment, 1);
var enemy = new Entity({strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1}, "human", "thief", races, profession, "Derek", equipment, 1);

//Document.ready()
document.addEventListener("DOMContentLoaded", function() {


document.getElementById("btnAttack").onclick = function(){
	attackRoll(player, enemy, "physical");
}

document.getElementById("btnMagic").onclick = function(){
	attackRoll(player, enemy, "magic")
}

updateCombatZone(player, enemy);

});

/*document.getElementById("btnAttack").onclick = function(){
	attackRoll(player, enemy, "physical");
}*/