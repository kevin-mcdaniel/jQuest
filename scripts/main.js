
var diceRoller = function(numDice, dieType){
	var randomNumber = 0;
	var generatedNumber = 0;
	console.log("Number of Dice: " + numDice);
	console.log("Roll: "+ numDice +  " D" + dieType);
	for(var i=0; i < numDice; i++){
		randomNumber = (Math.floor(Math.random()*dieType) + 1);
		console.log("roll: " + randomNumber);	
		generatedNumber += randomNumber;
	} 			
	console.log("generatedNumber: " + generatedNumber);
	return generatedNumber;
}
/*
var AttackRoll = function(hitRating, defenseRating, damageBonus, weaponDamage, armor){
		var attackRoll, damageRoll, totalDamage, result;
		attackRoll = hitRating + diceRoller(1, 20);
		if(attackRoll > defenseRating){
			result = "Hit"
			damageRoll = damageBonus + diceRoller(1, weaponDamage);
			if(damageRoll < armor){
				totalDamage=1;
			} else {
				totalDamage = damageRoll - armor;
			} 
			
		} else {
				result = "Miss"
		}
		
		console.log("AttackResult: " + result);
		console.log("Damage: " + totalDamage);
		
}*/

var attackRoll = function(attacker, defender, attackType){
	
	var attackRoll, damageRoll, totalDamage, result, hitRating, defenseRating, damageBonus, armorBonus, weaponDamage;
	
	switch (attackType){
		case "physical":
			hitRating = attacker.physicalAttack;
			damageBonus = attacker.equipment.weapon.bonus;
			weaponDamage = attacker.equipment.weapon.damage;
			armorBonus = defender.equipment.armor.bonus;
			defenseRating = defender.physicalDefense;
			break;
		case "magic":
			hitRating = attacker.magicAttack;
			damageBonus = attacker.equipment.wand.bonus;
			weaponDamage = attacker.equipment.wand.damage;
			defenseRating = defender.magicDefense;
			armorBonus = defender.equipment.accessory.bonus;
			break;
		default:
			break;
	}
	
	attackRoll = hitRating + diceRoller(1, 20);
		if(attackRoll > defenseRating){
			result = "Hit"
			damageRoll = damageBonus + diceRoller(1, weaponDamage);
			if(damageRoll < armorBonus){
				totalDamage=1;
			} else {
				totalDamage = damageRoll - armorBonus;
			} 
			
		} else {
				result = "Miss"
		}
		
		console.log("AttackResult: " + result);
		console.log("Damage: " + totalDamage);
}

var bonusArray = {
	strength:3,
	dexterity:1,
	toughness:2,
	willpower:1,
	mental:0
}


var entity = {
	attributes : { 
		strength: 1,
		dexterity: 1,
		toughness: 1,
		willpower: 1,
		mental: 1
	},
	equipment : {
		armor : {},
		weapon : {},
		wand: {},
		holySymbol: {},
		accessory: {},
		gold: 0
	},
	combat:{
		initiative: 0,
		physcialAttack:0,
		magicAttack:0,
		physicalDamage:0,
		magicDamage:0,
		physicalDefense:0,
		magicDefense:0,
		physicalArmor:0,
		magicArmor:0,
		healCost:0,
		healRegen:0
	}, vitals:{
		name:"",
		race: {},
		level: 0,
		hitDice: 0,
		manaDice: 0,
		maxHitPoints: 0,
		maxMagicPoints: 0,
		currentHitPoints:0,
		currentMagicPoints: 0,
		bloodedValue: 0,
		criticalValue: 0,
		experiencePoints:0,
		classType:{},
		status: ""
	}, inventory:{}
}

var player = Object.create(entity);

var initializePlayer = function(name, race, profession, bonusArray){
	var playerWeapon, playerArmor, playerWand, playerSymbol, playerAccessory;
	
	playerWeapon = {};
	playerArmor = {};
	playerWand = {};
	playerSymbol = {};
	playerAccessory = {};
	
	player.vitals.name = name;
	player.vitals.race = race;
	player.vitals.profession = profession;
	
	updatePlayer(bonusArray, 1);
	equipPlayer(profession[profession].startingWeapon, "weapon");
	equipPlayer(profession[profession].startingArmor, "armor");
	equipPlayer(profession[profession].startingWand, "wand");
	equipPlayer(profession[profession].startingSymbol, "symbol");
	equipPlayer(profession[profession].startingAccessory, "accessory");
	
}

var updatePlayer = function(bonusArray, levelBonus){
	
	var myRace = races[player.race];
	var myProfession = profession[player.profession];
	//Generate Attributes
	var strength = 1 + myRace.strength + myProfession.strength + bonusArray.strength;
	var dexterity = 1 + myRace.dexterity + myProfession.dexterity + bonusArray.dexterity;
	var toughness = 1 + myRace.toughness + myProfession.toughness + bonusArray.toughness;
	var willpower = 1 + myRace.willpower + myProfession.willpower + bonusArray.willpower;
	var mental = 1 + myRace.mental + myProfession.mental + bonusArray.mental;
	var hitPoints = toughness + (levelBonus + player.level) * (myRace.hitDice + myProfession.hitDice); 
	var magicPoints = willpower + mental + (levelBonus + player.level) * (myRace.mana + myProfession.mana); 
	
	//Assign Values
	player.attributes.strength = strength;
	player.attributes.dexterity = dexterity;
	player.attributes.toughness = toughness;
	player.attributes.willpower = willpower;
	player.attributes.mental = mental;
	player.combat.initiative = dexterity;
	player.combat.physicalAttack = strength + dexterity;
	player.combat.magicAttack = mental + willpower;
	player.combat.physicalDamage = strength;
	player.combat.magicDamage = mental;
	player.combat.physicalDefense = strength + dexterity;
	player.combat.magicDefense = mental + willpower;
	player.combat.heal = willpower;
	player.vitals.level = levelBonus + player.level;
	player.vitals.hitDice = myRace.hitDice + myProfession.hitDice;
	player.vitals.manaDice = myRace.mana + myProfession.mana;
	player.vitals.maxHitPoints = hitPoints;
	player.vitals.currentHitPoints = hitPoints;
	player.vitals.maxMagicPoints = magicPoints;
	player.vitals.currentMagicPoints = magicPoints;
	player.vitals.bloodedValue = hitPoints * .5;
	player.vitals.criticalValue = hitPoints * .25;
		
}

var equipPlayer = function(item, slot){
	//var unequippedItem = player.equipment[slot];
	player.equipment[slot] = item;
	//player.inventory.push(slot, unequippedItem);
	
}


/*var entityMap = {
	attributes : { 
		strength: 1 + races.strength + profession.strength + bonusArray.strength,
		dexterity: 1 + races.dexterity + profession.dexterity + bonusArray.dexterity,
		toughness: 1 + races.toughness + profession.toughness + bonusArray.toughness,
		willpower: 1 + races.willpower + profession.willpower + bonusArray.willpower,
		mental: 1 + races.mental + profession.mental + bonusArray.mental
	},
	equipment : {
		armor : {},
		weapon : {},
		wand: {},
		accessory: {},
		gold: 0
	},
	combat:{
		initiative: dexterity,
		physcialAttack:strength + dexterity,
		magicAttack:mental + willpower,
		physicalDamage: strength,
		magicDamage: mental,
		physicalDefense: strength + dexterity,
		magicDefense: mental + willpower,
		heal: willpower
	}, vitals:{
		name:name,
		race: races,
		level: 1,
		hitDice: races.hitDice + profession.hitDice,
		manaDice: races.mana + profession.mana,
		maxHitPoints: toughness + level * hitDice,
		maxMana: willpower + mental + level * manaDice,
		currentHitPoints:0,
		currentMana: 0,
		bloodedValue: maxHitPoints * .5,
		criticalValue:maxHitPoints * .25,
		experiencePoints:0,
		classType:profession
	}
	
	
}*/


////////////////////////////////////////////////////
// finish building magic armor and wand objects
// Enchantment cost = itemcost * bonus number
// add ItemAttribute to entity and requiredAttribute to equipmentArrays - magic: mental + willpower physical: Strength + dexterity
// have to add combat and vitals after entity was created to reference entity attributes
var characterSheet = function(){
	console.log(player.vitals.name + ' ' + player.vitals.race + ' ' + player.vitals.classType);
	console.log('Level ' + player.vitals.level);
	console.log('');
	console.log('Attributes:');
	console.log('---------------------------------------------------------------------------');
	console.log('Strength: ' + player.attributes.strength);
	console.log('Dexterity: ' + player.attributes.dexterity);
	console.log('Toughness: ' + player.attributes.toughness);
	console.log('Willpower: ' + player.attributes.willpower);
	console.log('Mental: ' + player.attributes.mental);
	console.log('');
	console.log('Statistics:');
	console.log('---------------------------------------------------------------------------');
	console.log('Hit Points: '  + player.vitals.maxHitPoints);
	console.log('Mana: '  + player.vitals.maxMana)
	console.log('Initiative Bonus: ' + player.combat.initiative);
	console.log('Physical Defense: ' + player.combat.physicalDefense);
	console.log('Magic Defense: ' + player.combat.magicDefense);
	console.log('Armor: ' + player.combat.physicalArmor);
	console.log('Arcane Armor: ' + player.combat.magicArmor);
	console.log('Physical Attack: ' + player.combat.physicalAttack);
	console.log('Physical Damage: ' + player.combat.physicalDamage);
	console.log('Magic Attack: ' + player.combat.magicAttack);
	console.log('Magic Damage: ' + player.combat.magicDamage);
	console.log('');
	console.log('Equipment:');
	console.log('---------------------------------------------------------------------------');
	console.log('Armor: ' + player.equipment.armor.name);
	console.log('Accessory: ' + player.equipment.accessory.name);
	console.log('Wand: ' + player.equipment.wand.name);
	console.log('Holy Symbol: ' + player.equipment.holySymbol.name);
	console.log('Weapon: ' + player.equipment.weapon.name);	
};
	
initializePlayer("Alrick", "dwarf", "fighter",{strength: 1,dexterity: 1, toughness: 1, willpower: 1, mental: 1});	
characterSheet();