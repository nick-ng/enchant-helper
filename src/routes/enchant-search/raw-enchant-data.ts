const rawEnchants = [
	{
		href: '',
		text: 'Tornado Shot fires an additional secondary Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1580810115%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spark fires 3 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_186513618%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Void Sphere has 18% increased Pulse Frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2523663201%22,%22value%22:{%22min%22:18,%22max%22:18}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Berserk has 30% increased Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1663783758%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Void Sphere has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2690342765%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Blade Vortex Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3024867180%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Boneshatter has 24% chance to grant +1 Trauma'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2870283358%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Determination has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2721871046%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ethereal Knives fires Projectiles in a circle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3491968196%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Arrow hits 2 additional Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1901955093%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Void Sphere has 12% increased Pulse Frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2523663201%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Spear fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3801130154%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3949159285%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Temporal Chains Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1662974426%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '9% increased Flicker Strike Damage per Frenzy Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3701991680%22,%22value%22:{%22min%22:9,%22max%22:9}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3628984170%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap releases an additional Wave'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1389191919%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Malevolence has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3266567165%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Despair Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3185156108%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Shockwave Totem Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2259906777%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Righteous Fire Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3359178310%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Discipline has 45% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1692887998%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Elements has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_491551762%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Raging Spirits deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2085855914%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Molten Strike fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_995860222%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Strike fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1213035889%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Fire Trap Burning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_345703394%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Berserk has 40% reduced Rage loss per second'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1019790379%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2896672990%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Tornado Shot Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3555919553%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Trap causes 2 additional smaller explosions'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3078026860%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Grace has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1803598623%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hexblast deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2318562335%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pride has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3484910620%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Skeletons deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3059357595%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spark fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_186513618%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Venom Gyre has a 25% chance to keep each caught Projectile fired with Whirling Blades'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2563177940%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Blast has a 75% chance for an additional explosion'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3105097589%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summon Skitterbots has 45% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3818053347%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spectral Shield Throw fires 3 additional Shard Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3608981617%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hatred has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1920370417%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Righteous Fire Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2430635444%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Forbidden Rite fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3047407995%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '+1 to Maximum Blood Charges'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+5 metres to Discharge radius'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '10% increased Temporal Chains Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1662974426%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "15% increased Battlemage's Cry Buff Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2426838124%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Cyclone Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_835592326%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Elemental Hit Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1151217691%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Elemental Weakness Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3348324479%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Blade Vortex Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2748553775%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Lightning Arrow Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4129421630%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% reduced Lightning Warp Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_609478942%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Blade Vortex Spell Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4221797807%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Boneshatter Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2384264970%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Caustic Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1496334795%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Detonate Dead Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3087527696%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Fire Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_181307038%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Flicker Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_464448327%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Frost Blades Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3449510470%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ice Shot Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3026752303%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3630274354%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Rain of Arrows Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3432170876%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Shockwave Totem Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2440551805%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Spark Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1208019382%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Tornado Shot Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1815368527%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Protector Totem grants 18% increased Attack Speed while Active'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1303996723%22,%22value%22:{%22min%22:18,%22max%22:18}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Anger has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2963485753%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ball Lightning fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3420683028%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Barrage fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3009270704%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Berserk has 20% increased Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1663783758%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blood Rage grants additional 12% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3418033798%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cobra Lash Chains 3 additional times'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1471796012%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Corrupting Fever deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4010544321%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Determination has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2721871046%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Detonate Dead has a 45% chance to detonate an additional corpse'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1539846779%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Exsanguinate deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2259734653%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Eye of Winter fires Shard projectiles with 12% increased Frequency during flight'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_173612563%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flesh Offering grants an additional 21% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_513715594%22,%22value%22:{%22min%22:21,%22max%22:21}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "General's Cry has +1 to maximum number of Mirage Warriors"
	},
	{ href: '', text: '' },
	{
		href: '',
		text: "General's Cry has 30% increased Cooldown Recovery Rate"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3637727672%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Haste has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_804667127%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Agony has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1284151528%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Ice has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3059700363%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Purity has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1542765265%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Thunder has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3959101898%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Arrow hits an additional Enemy'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1901955093%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Strike pierces 3 additional Targets'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3134777190%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Petrified Blood has 45% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1829483269%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Power Siphon fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1177831984%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Precision has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_658622139%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Fire has 45% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1135152940%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Ice has 45% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2665518524%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pyroclast Mine fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_841281094%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rage Vortex Sacrifices +5% of Rage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Righteous Fire grants 30% increased Spell Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3316822388%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Scourge Arrow creates an additional spore pod at Maximum Stages'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1044970549%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Sniper's Mark has 15% increased Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2789561878%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spark fires Projectiles in a circle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3803013948%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spectres have 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3645693773%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Storm Brand Damage Penetrates 12% of Branded Enemy's Lightning Resistance"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3318254108%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summon Raging Spirit has 24% chance to summon an extra Minion'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1381908541%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Carrion Golems deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3593547682%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Toxic Rain deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_865511246%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Toxic Rain fires 1 additional Arrow'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2140127102%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Unearth Spawns corpses with +5 Level'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Venom Gyre has a 20% chance to inflict Withered for 2 seconds on Hit'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2157671820%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vortex has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2461424099%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Winter Orb has +2 Maximum Stages'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3734339018%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wrath has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1761642973%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Zealotry has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4216444167%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Eye of Winter Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1739537617%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Forbidden Rite Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3383175526%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Cyclone Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1454162553%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Static Strike Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2906742892%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ethereal Knives Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3514973342%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Artillery Ballista Projectiles fall in two perpendicular lines instead'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2056176052%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arc Chains an additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2461552986%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Blade Vortex Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3024867180%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '300% increased Ice Spear Critical Strike Chance in second form'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3510848926%22,%22value%22:{%22min%22:300,%22max%22:300}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3628984170%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1041365824%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hexblast has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1811698551%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volatile Dead Consumes up to 1 additional corpse'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3034788766%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Artillery Ballista fires 2 additional Arrows'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3283028259%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Brand deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_531461618%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summon Raging Spirit has 30% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_38715141%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Boneshatter has 16% chance to grant +1 Trauma'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2870283358%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Elemental Hit deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4109038270%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Trap pierces 3 additional Targets'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3764410821%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Vortex Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_200942664%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '+1 to maximum number of Sentinels of Purity'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '150% increased Effect of the Buff granted by your Carrion Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2420972973%22,%22value%22:{%22min%22:150,%22max%22:150}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Kinetic Blast Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1660758870%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Eye of Winter Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1015388938%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ice Nova Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1086309398%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Vortex has +3% to Critical Strike Multiplier for each blade'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Corrupting Fever has +50% chance to inflict an additional Corrupted Blood Debuff'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Hydrosphere has 30% increased Pulse Frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_222917854%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Strike fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1213035889%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Reap deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1545524769%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Venom Gyre deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1404787106%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Soulrend fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3371533847%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Split Arrow fires 3 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2278715446%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3949159285%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '9% increased Frenzy Damage per Frenzy Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1255310381%22,%22value%22:{%22min%22:9,%22max%22:9}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hexblast has 15% chance to not remove a Hex'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_997807729%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Bolt changes direction 2 additional times'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1460506005%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Winter Orb deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2200744772%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Flammability Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_282417259%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Ethereal Knives Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_760994068%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Spectral Shield Throw Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1891516164%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Exsanguinate has a 25% chance to Chain an additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2304517189%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flicker Strike has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1398394628%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Ash has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3819451758%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Holy Flame Totem fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_775200811%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Icicle Mine has +30% to Critical Strike Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '40% increased Ice Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4224384031%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blood and Sand has 40% increased Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2471636515%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vitality has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1233806203%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smite has 30% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2294732229%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Malevolence has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3266567165%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "30% increased Assassin's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1961975107%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Herald of Thunder Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_558298545%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blazing Salvo fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3908539803%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Rain of Arrows Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3825617457%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '6% increased Flicker Strike Damage per Frenzy Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3701991680%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Berserk has 25% reduced Rage loss per second'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1019790379%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blast Rain fires an additional Arrow'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_297308603%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bone Offering grants an additional +9% Chance to Block Attack Damage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Cremation can have up to 1 additional Geyser at a time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3503624267%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Scourge Arrow deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_192534517%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Burst has a 15% chance to create an additional Orb'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1898356067%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Winter Orb has 3% increased Area of Effect per Stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1017161280%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Withering Step inflicts 3 additional Withered Debuffs'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2273926362%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rain of Arrows has 15% chance to fire an additional sequence of arrows'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3505939359%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Effect of Curses applied by Bane'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2843908086%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volcanic Fissure fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1460853241%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Raging Spirits deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2085855914%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Freezing Pulse Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1894493605%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Charged Dash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1265055278%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '+1 to maximum Blade Flurry stages'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_865345996%22,%22value%22:{%22min%22:0,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '+1 to maximum Snipe Stages'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+1 to maximum number of Bladestorms'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+1 to maximum number of Flame Walls'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+24% increased Flame Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+3 metres to Discharge radius'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Ancestral Protector Totem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Animated Guardian Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Chaos Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Ice Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Lightning Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Raised Spectre Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% to Stone Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '10% Chance to gain a Power Charge on Critical Strike with Ice Spear'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3232905239%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Cyclone Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_835592326%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Despair Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3185156108%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Elemental Weakness Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3348324479%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Enfeeble Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3293830776%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Frostbite Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1443215722%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Incinerate Damage for each stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4151555126%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Power Siphon Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2753191013%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Rain of Arrows Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3825617457%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Shockwave Totem Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2259906777%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '100% increased Effect of the Buff granted by your Chaos Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1648511635%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Absolution Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2558170600%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Bodyswap Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_397438226%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Cremation Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2938856716%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Dark Pact Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1549594869%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Fireball Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2231403318%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Lightning Spire Trap Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1978232370%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Lightning Warp Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1347575155%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Scorching Ray Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3279758713%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Unearth Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2387717928%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Volatile Dead Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3179781611%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% Chance to gain a Power Charge on Critical Strike with Ice Spear'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3232905239%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Attack Speed with Snipe'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2513745555%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Barrage Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2523298357%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Cleave Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3106577499%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Conductivity Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3395908304%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Double Strike Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2779309910%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Dual Strike Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1917107304%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Enfeeble Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3293830776%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Frostbite Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1443215722%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Frostbolt Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4231484190%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Heavy Strike Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_343849491%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Leap Slam Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3730999759%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Power Siphon Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2753191013%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Punishment Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2844206732%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Rallying Cry Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4147277532%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Scorching Ray beam length'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_702909553%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Shield Charge Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_648343221%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Shield Crush Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1948292587%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Vulnerability Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1065909420%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% increased Whirling Blades Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1902197291%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% of Burning Arrow Physical Damage gained as Extra Fire Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3229580299%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% of Galvanic Arrow Physical Damage gained as extra Lightning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1943147282%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% of Glacial Hammer Physical Damage gained as Extra Cold Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2555366825%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% of Ice Crash Physical Damage gained as Extra Cold Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3465202861%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '15% of Infernal Blow Physical Damage gained as Extra Fire Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2484188706%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '150% increased Effect of the Buff granted by your Flame Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_269930125%22,%22value%22:{%22min%22:150,%22max%22:150}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '150% increased Effect of the Buff granted by your Ice Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2250111474%22,%22value%22:{%22min%22:150,%22max%22:150}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '150% increased Effect of the Buff granted by your Lightning Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2527931375%22,%22value%22:{%22min%22:150,%22max%22:150}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '150% increased Effect of the Buff granted by your Stone Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2284801675%22,%22value%22:{%22min%22:150,%22max%22:150}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Blade Vortex Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2748553775%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Blight Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2511915418%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Dark Pact Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_957864706%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Glacial Cascade Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_88796379%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Manabond Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_441455463%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Righteous Fire Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2430635444%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Shock Nova Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_565901339%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '18% increased Ancestral Protector Totem Placement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_592861938%22,%22value%22:{%22min%22:18,%22max%22:18}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% Chance on Frenzy to gain an additional Frenzy Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4243904146%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Animate Weapon Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3338074370%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "20% increased Assassin's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1961975107%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Ethereal Knives Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_760994068%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Eye of Winter Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1739537617%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Frost Blades Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1087923932%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Mana Reservation Efficiency of Skills Supported by Spellslinger'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1341061286%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "20% increased Warlord's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1528965411%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% reduced Spectral Throw Projectile Deceleration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_444686294%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '200% increased Ice Spear Critical Strike Chance in second form'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3510848926%22,%22value%22:{%22min%22:200,%22max%22:200}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% chance to create an additional Animate Weapon copy'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3711386843%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ancestral Warchief Totem Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3320271130%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ball Lightning Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_788307702%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Blade Trap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1502095380%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Bladefall Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2413715772%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Blight Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2511915418%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Caustic Arrow Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3854556792%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Cleave Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3172519570%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Cold Snap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3371538704%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Contagion Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1056396846%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Creeping Frost Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3816022821%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Dark Pact Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_957864706%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Decoy Totem Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1686675991%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Detonate Dead Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_482660590%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Earthquake Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_684174846%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Explosive Concoction Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4100281103%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Firestorm explosion Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3931013900%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Frost Bomb Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1451372148%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Glacial Cascade Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_88796379%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ground Slam Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3061969105%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ice Crash Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3930497977%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ice Nova Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_68809719%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ice Shot Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1962401751%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Ice Trap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3367298564%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Infernal Blow Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4031295671%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Lacerate Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3854723321%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Leap Slam Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3367800526%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Lightning Tendrils Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1230050013%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Manabond Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_441455463%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Molten Strike Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2524620107%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Orb of Storms Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2875508213%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Poisonous Concoction Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3892584986%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Rage Vortex Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3988628118%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Rain of Arrows Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2205814812%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Reap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_647221668%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Reave Radius'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1486490067%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Rolling Magma Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1646093658%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Shock Nova Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_565901339%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Shockwave Totem Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1153159301%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Static Strike Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2685860927%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Storm Burst Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3961497709%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Storm Call Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2070247068%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Sweep Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4202548383%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Tornado Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1866415366%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Voltaxic Burst Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2982851186%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Blight Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1623552446%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Boneshatter Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2384264970%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Boneshatter Stun Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2742093846%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Cleave Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1359058534%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Cyclone Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1454162553%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Detonate Dead Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3087527696%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Eye of Winter Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1015388938%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Fire Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_181307038%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Flicker Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_464448327%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ice Shot Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3026752303%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Kinetic Blast Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1007135105%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lightning Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2896672990%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Poisonous Concoction Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_295557151%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Righteous Fire Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3359178310%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Spark Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1208019382%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Spectral Shield Throw Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1891516164%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Tornado Shot Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3555919553%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Vengeance Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1972101281%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% Chance for Puncture to Maim on hit'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_244125450%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% Chance on Frenzy to gain an additional Frenzy Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4243904146%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% chance for Discharge to deal Damage without removing Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1833626118%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% chance for Phase Run to increase Duration without removing Frenzy Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4259029320%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "30% increased Alchemist's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3583185303%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Animate Weapon Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3338074370%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Caustic Arrow Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_387490713%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Contagion Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2565809961%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Corrupting Fever Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3529090048%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Essence Drain Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3698833303%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Exsanguinate Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_292721070%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Firestorm Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1691710359%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Flame Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3996051430%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Flesh Offering Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_101788216%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Forbidden Rite Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3316480899%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Freezing Pulse Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2003026405%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Frost Blades Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1087923932%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Intuitive Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3545503197%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Mana Reservation Efficiency of Skills Supported by Spellslinger'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1341061286%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "30% increased Poacher's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3278819254%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Protective Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3917923501%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Sentinel of Absolution Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1778800422%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Sentinel of Dominance Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3772643988%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Smoke Mine Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3719728947%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Soul Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3975033889%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Spectral Helix Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1952647315%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Spectral Shield Throw Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1561141582%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Spectral Throw Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1062615953%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Static Strike Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2906742892%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Summon Reaper Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_82475304%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Vampiric Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1238426677%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Viper Strike Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3869217625%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Vortex Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4074562940%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "30% increased Warlord's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1528965411%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% reduced Spectral Throw Projectile Deceleration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_444686294%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% reduced Storm Call Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1843506018%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Convocation Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2054059315%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Creeping Frost Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3804575865%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Devouring Totem Leech per second'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3317752680%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Frost Wall Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_775034903%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Immortal Call Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1336543283%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Phase Run Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2556095677%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Searing Bond Totem Elemental Resistances'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2519689029%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '36% increased Wild Strike Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_524936200%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% chance to Summon an additional Skeleton with Summon Skeletons'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1040958896%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ancestral Warchief Totem Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_78239163%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Arc Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2740567252%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ball Lightning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3152812191%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Barrage Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3685345485%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Blade Flurry Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_754797886%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Blade Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3676486210%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Bladefall Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3069740560%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Blight Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1623552446%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Bodyswap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_341054435%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Boneshatter Stun Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2742093846%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Burning Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_696995312%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Cleave Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1359058534%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Cold Snap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3729006707%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Contagion Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_277116504%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Creeping Frost Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2846773529%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Cremation Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4175469673%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Dark Pact Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1573799461%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Discharge Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1935930829%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Double Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1809965314%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Dual Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2094069860%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Earthquake Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1697080607%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Essence Drain Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3469967347%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Explosive Concoction Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_383710904%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Fire Trap Burning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_345703394%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Fireball Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2600498881%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Firestorm Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2201904285%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Flame Dash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3013068851%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Flameblast Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_169405468%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Freezing Pulse Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_819852672%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Frenzy Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_522780692%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Frost Bomb Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2380598805%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Frostbolt Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2078274993%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Galvanic Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2634945088%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Glacial Cascade Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_451037529%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Glacial Hammer Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2732675053%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ground Slam Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_108883700%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Heavy Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_954135826%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Herald of Ash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_767884542%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Herald of Ice Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3910961021%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Ice Crash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1794090421%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Incinerate Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2246425134%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Infernal Blow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_242838571%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Kinetic Blast Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1007135105%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lacerate Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1844721010%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Tendrils Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_39356080%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3131492956%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Trap Lightning Ailment Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4210927948%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Warp Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_209345940%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Manabond Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1609869231%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Molten Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2038865857%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Poisonous Concoction Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_295557151%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Power Siphon Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_78767457%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Puncture Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3496292484%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Rage Vortex Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3153431030%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Reave Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_862824495%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Reckoning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_308326229%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Riposte Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4071708873%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Rolling Magma Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_600891507%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Scorching Ray Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3395096718%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Searing Bond Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2298223148%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Shield Charge Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3490662882%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Shield Crush Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1451671945%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Shock Nova Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3948894096%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Spectral Helix Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_183131376%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Spectral Throw Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3755794090%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Split Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2555469486%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Static Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_551375258%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Storm Burst Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2948719994%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Storm Call Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3359777583%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Storm Rain Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1463790510%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Sweep Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_253870897%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Tempest Shield Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2121581717%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Tornado Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2681941384%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Unearth Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3953599026%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Vigilant Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2287764959%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Viper Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2585271359%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Volatile Dead Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1212590278%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Voltaxic Burst Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2913890852%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Whirling Blades Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3723124286%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Wild Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1666713639%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% Chance to gain an additional Power Charge on Kill with Power Siphon'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3609207587%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Bone Offering Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1607493537%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Conductivity Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_819890745%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Despair Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_683073695%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Elemental Weakness Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2690620076%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Enfeeble Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_516587640%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Fire Trap Burning Ground Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3279786746%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Flammability Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2166622264%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Flesh Offering Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_101788216%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Frostbite Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1783696476%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Puncture Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3186938438%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Punishment Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1924239636%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Rejuvenation Totem Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1588572574%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Spirit Offering Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1063173946%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Temporal Chains Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_888039248%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '45% increased Vulnerability Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3229878341%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '50% chance to Avoid being Stunned while Channelling Snipe'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3024408350%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '6% increased Frenzy Damage per Frenzy Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1255310381%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Bladefall Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2833482311%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Decoy Totem Life'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1631824124%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Flame Surge Damage with Hits and Ailments against Burning Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_430890565%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Lacerate Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_578067404%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Lightning Tendrils Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_12756171%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Searing Bond Totem Placement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_708179348%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Tornado Shot Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1815368527%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Lightning Warp Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1347575155%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Scorching Ray Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3279758713%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Bladefall Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2833482311%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Dual Strike Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2729530556%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Flame Surge Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1030003515%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Flameblast Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3053448465%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Orb of Storms Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_168538372%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Split Arrow Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1028884162%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Viper Strike Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3734756042%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Cry has a minimum of 10 Power'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_988554168%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Protector Totem deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2596239449%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Warchief Totem grants 30% increased Melee Damage while Active'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3543257184%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Anger has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2963485753%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Animated Guardians deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4157143640%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Animated Weapons deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1819674879%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arc deals 12% increased Damage for each time it has Chained'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3998182656%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arc has +30% chance to Shock'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Arcane Cloak Spends an additional 15% of current Mana'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_122106412%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arcane Cloak grants Life Regeneration equal to 15% of Mana Spent per Second'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3606492882%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arcanist Brand has 12% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1147445274%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arctic Armour has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2605040931%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Armageddon Brand Damage Penetrates 12% of Branded Enemy's Fire Resistance"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1715805151%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Armageddon Brand deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1699139870%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Armageddon Brand has 12% increased Activation Frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2512194486%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Artillery Ballista Damage Penetrates 10% Fire Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1734517294%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Artillery Ballista fires an additional Arrow'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3283028259%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Attacks Exerted by Ambush have +40% to Critical Strike Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Attacks Exerted by Ancestral Cry deal 50% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2146663823%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Attacks Exerted by Seismic Cry deal 35% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3252913608%22,%22value%22:{%22min%22:35,%22max%22:35}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Attacks Exerted by Seismic Cry deal 50% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3252913608%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Attacks with Energy Blades Penetrate 12% Lightning Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1501151168%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bane deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2206071316%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bane has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4224588066%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Battlemage's Cry Exerts 1 additional Attack"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_931713173%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bear Trap has 15% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_918308703%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Blast deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2276547155%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Blast detonates other Lingering Blades within an 50% increased Area'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3309486263%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Blast detonates other Lingering Blades within an 75% increased Area'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3309486263%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Blast has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3569393676%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Trap rotates +1 times'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Bladefall has an additional Volley'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3040033697%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bladestorm deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_599289531%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blast Rain deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4014289250%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blast Rain has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_574378310%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blazing Salvo Projectiles land in a 20% increased Area'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1785831895%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blazing Salvo Projectiles land in a 30% increased Area'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1785831895%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blazing Salvo deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4102281803%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blight has 30% increased Hinder Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4170725899%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blink Arrow and Blink Arrow Clones have 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1554597333%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blink Arrow and Blink Arrow Clones have 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1967878868%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blink Arrow has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2983274404%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blood Rage grants additional 30% chance to gain a Frenzy Charge on Kill'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3152806535%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blood Rage grants additional 8% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3418033798%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Burning Arrow has +30% chance to Ignite'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2226973351%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Caustic Arrow has 14% chance to inflict Withered on Hit for 2 seconds base Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1993913925%22,%22value%22:{%22min%22:14,%22max%22:14}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Caustic Arrow has 20% chance to inflict Withered on Hit for 2 seconds base Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1993913925%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chain Hook has +0.1 metres to radius per 12 Rage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Chain Hook has a 40% chance to grant +1 Rage if it Hits Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2588242810%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chaos Golems deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2505115650%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Charged Dash has +0.6 metres to radius of each Wave's last damage Area"
	},
	{ href: '', text: '' },
	{
		href: '',
		text: "Charged Dash has +6 to Radius of each Wave's last damage Area"
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Chills from Ice Nova Hits always reduce Action Speed by at least 8%'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_644285691%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Clarity has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2668611054%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Clarity has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2668611054%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cobra Lash Chains 2 additional times'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1471796012%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cobra Lash deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2224580362%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cobra Lash has 30% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_732631533%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cold Snap has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2289367813%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Combust has 30% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4225882962%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Ground from Holy Flame Totem applies 9% increased Damage taken to Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2807947%22,%22value%22:{%22min%22:9,%22max%22:9}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Ground from Purifying Flame applies 9% increased Damage taken to Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3100629498%22,%22value%22:{%22min%22:9,%22max%22:9}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Path deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4047323043%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Path has 15% increased teleport range'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2048678824%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Path has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3285061858%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Conversion Trap 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2143519574%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Converted Enemies have 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_131320052%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Convocation has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2680060124%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Corrupting Fever deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4010544321%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Crackling Lance deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_435519320%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Crackling Lance has 16% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_617228927%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Crackling Lance has 36% increased branching angle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2896346908%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Creeping Frost's Chilling Area has 38% increased Movement Speed"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2781179464%22,%22value%22:{%22min%22:38,%22max%22:38}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dash has +2 Cooldown Uses'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Dash travels 100% increased distance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4147746721%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Defiance Banner has 25% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1105773670%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Defiance Banner has 40% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1105773670%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Desecrate Spawns 2 additional corpses'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3655654928%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Desecrate Spawns 3 additional corpses'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3655654928%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Detonate Dead has a 30% chance to detonate an additional corpse'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1539846779%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Devouring Totem has 60% Chance to Consume an additional corpse'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4189505564%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Discharge has +5 to Radius'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Discipline has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1692887998%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Divine Ire Damages 2 additional nearby Enemies when gaining Stages'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1477213724%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Divine Ire deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2584129062%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Divine Ire's beam has 15% increased width"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2212298325%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dominating Blow can summon 3 additional Magic Sentinels of Dominance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1095160683%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dominating Blow can summon an additional Rare Sentinel of Dominance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2337005967%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Double Strike has a 10% chance to deal Double Damage to Bleeding Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3125201823%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Double Strike has a 15% chance to deal Double Damage to Bleeding Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3125201823%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dread Banner has 25% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_287319069%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dread Banner has 40% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_287319069%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Earthquake deals 8% increased Damage per 0.1 seconds Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2068943099%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Earthshatter creates +1 fissures'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Earthshatter deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_335520087%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Earthshatter has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3469056056%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Elemental Hit has +30% chance to Freeze, Shock and Ignite'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3205997967%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Enduring Cry grants 1 additional Endurance Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2977067558%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Enduring Cry has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3617955571%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Enemies Drenched by Hydrosphere have Cold and Lightning Exposure, applying -6% to Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Enemies affected by Bear Trap take 10% increased Damage from Trap or Mine Hits'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1678345858%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Enemies in Void Sphere's range take up to 10% increased Damage, based on distance from the Void Sphere"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4271709087%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Energy Blades have 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1217516474%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ensnaring Arrow has 30% increased Debuff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1405738574%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ensnaring Arrow has 90% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2791271819%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 30% reduced Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3590425794%22,%22value%22:{%22min%22:-30,%22max%22:-30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 40% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3590425794%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Concoction uses 12% reduced Flask Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1907051864%22,%22value%22:{%22min%22:-12,%22max%22:-12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Trap causes an additional smaller explosion'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3078026860%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Trap deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4207255685%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Trap has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1694915226%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Exsanguinate deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2259734653%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Eye of Winter fires Shard projectiles with 8% increased Frequency during flight'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_173612563%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Dash has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1440798870%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Golems have 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1575282859%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Wall grants 31 to 47 Added Fire Damage to Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3881327877%22,%22value%22:{%22min%22:31,%22max%22:47}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4162139595%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap has 15% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2962501808%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap has 2 additional Flames'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1452255482%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap has 30% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_525771896%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap has an additional Flame'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1452255482%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flesh and Stone has 75% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3563089138%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Bomb has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3524326896%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Shield has +180 to maximum Life per Stage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Frost Wall has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2479762395%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frostblink has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_815588902%22,%22value%22:{%22min%22:-30,%22max%22:-30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frostblink has 75% increased maximum travel distance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3070497632%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frostbolt has +15% chance to Freeze'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Frozen Legion has +1 Cooldown Use'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Frozen Legion has +2 Cooldown Uses'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Frozen Legion has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3809563078%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frozen Sweep deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1048825825%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Arrow has 20% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1698558866%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Arrow has 30% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1698558866%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Field Chains an additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3893203185%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Field deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3821213705%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Field has 12% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2364563825%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "General's Cry has 20% increased Cooldown Recovery Rate"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3637727672%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Glacial Cascade gains 10% of Physical Damage as Extra Cold Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3492427828%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Glacial Hammer has +30% chance to Freeze'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Grace has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1803598623%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ground Slam has a 24% increased angle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_648647905%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Haste has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_804667127%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hatred has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1920370417%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Heavy Strike has a 12% chance to deal Double Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3760588941%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Agony has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1284151528%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Ash has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3819451758%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Ice has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3059700363%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Purity has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1542765265%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Herald of Thunder has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3959101898%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hexblast deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2318562335%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hexblast has 10% chance to not remove a Hex'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_997807729%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hexblast has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1811698551%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hits at Close Range with Shattering Steel Fortify'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_611022108%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Holy Flame Totem deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2801853811%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Holy Flame Totem fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_775200811%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Holy Flame Totem has 30% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4082863126%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hydrosphere deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1040582501%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hydrosphere has 20% increased Pulse Frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_222917854%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Golems deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3816405721%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Nova has +20% chance to Freeze'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3269321994%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Shot has 30% increased Area of Effect angle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3781924200%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Shot has 60% increased Area of Effect angle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3781924200%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Spear travels 20% reduced distance before changing forms'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3295914630%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Spear travels 30% reduced distance before changing forms'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3295914630%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Trap Damage Penetrates 10% Cold Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3698446010%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Icicle Mine deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2363866815%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Icicle Mine has 10% increased Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3162144587%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Icicle Mine has 15% increased Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3162144587%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Incinerate has +2 to maximum stages'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Incinerate has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2562208244%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Infernal Blow Debuff deals an additional 3% of Damage per Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_105839441%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Infernal Blow Debuff deals an additional 5% of Damage per Charge'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_105839441%22,%22value%22:{%22min%22:5,%22max%22:5}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Infernal Cry has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2702698464%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Intimidating Cry has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1134560807%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Blast has a 50% chance for an additional explosion'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3105097589%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Bolt changes direction 1 additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1460506005%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Bolt has 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2244239056%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Bolt has 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2244239056%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Bolt has 30% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2482018205%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lacerate deals 14 to 25 added Physical Damage against Bleeding Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_732320584%22,%22value%22:{%22min%22:14,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lancing Steel deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2159486200%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lancing Steel fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4081185348%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lancing Steel has 30% chance to count as consuming Steel Shards without Consuming them'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2891251105%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Conduit deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2511245659%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Conduit deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2511245659%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Conduit has 12% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2437571727%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Conduit has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2252888886%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Conduit has 8% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2437571727%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Golems deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3280107027%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_982975385%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap has 15% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1570047087%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap has 30% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2207890291%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap strikes an additional area'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1104507216%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Strike pierces 2 additional Targets'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3134777190%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Trap Damage Penetrates 10% Lightning Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1557531966%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Manabond Penetrates 12% Lightning Resistance while on Low Mana'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2052200782%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Manabond Penetrates 8% Lightning Resistance while on Low Mana'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2052200782%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Mirror Arrow and Mirror Arrow Clones deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4136186767%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Mirror Arrow and Mirror Arrow Clones have 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3653459847%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Mirror Arrow has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1781106044%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Molten Shell has 40% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4255043252%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Molten Strike fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_995860222%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Orb of Storms deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4084540709%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Orb of Storms deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4084540709%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Orb of Storms has 30% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2778301298%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Penance Brand deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_610562666%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Penance Brand has 12% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_709541481%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Penance Brand has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1486948114%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Penance Brand has 8% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_709541481%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Perforate creates +2 Spikes'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Perforate deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2731606134%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Perforate has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3536566359%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pestilent Strike deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_856157011%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pestilent Strike has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3787328468%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pestilent Strike has 40% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_64670441%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Petrified Blood has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1829483269%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Plague Bearer Buff grants +20% to Poison Damage over Time Multiplier while Infecting'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Plague Bearer deals Damage based on an additional 5% of Plague Value'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3672666316%22,%22value%22:{%22min%22:5,%22max%22:5}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Poisonous Concoction uses 12% reduced Flask Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1474722052%22,%22value%22:{%22min%22:-12,%22max%22:-12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Power Siphon fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1177831984%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Precision has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_658622139%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pride has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3484910620%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purifying Flame deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_944311193%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purifying Flame has 30% increased Area of Effect if targeting Consecrated Ground'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1954529734%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Elements has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_491551762%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Fire has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1135152940%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Ice has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2665518524%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Lightning has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1450978702%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purity of Lightning has 45% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1450978702%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pyroclast Mine deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4048820315%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pyroclast Mine has 15% increased Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2005440071%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rage Vortex Sacrifices +3% of Rage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Raised Zombies deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2228518621%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Raised Zombies have +36% to Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Raised Zombies have 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2499559911%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rallying Cry Exerts 1 additional Attack'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2080441723%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Reap deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1545524769%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Reckoning has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_804983774%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rejuvenation Totem also grants Mana Regeneration equal to 15% of its Life Regeneration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1803063132%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Righteous Fire grants 20% increased Spell Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3316822388%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Riposte has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2287986752%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rolling Magma Chains an additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2589980605%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rune Blast teleports you to the detonated Rune if you have not detonated Runes in the past 1.5 seconds'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_242209782%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sand Bladestorms move with 75% increased speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1556508042%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Scourge Arrow has 8% chance to Poison per Stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2257652056%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Cry has a minimum of 10 Power'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_355086768%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1175282728%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap has 15% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3618430531%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap has 20% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1615912303%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap has 30% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1615912303%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shattering Steel deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2313072099%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shattering Steel has 20% chance to not consume Steel Shards'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4072657110%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shattering Steel has 30% chance to not consume Steel Shards'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4072657110%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shield Crush central wave has 24% more Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_734712401%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shock Nova ring deals 60% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3652051346%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shrapnel Ballista Pierces 6 additional Targets'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1494168614%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shrapnel Ballista fires an additional Arrow'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_959534996%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shrapnel Ballista has 30% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1213017413%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siege Ballista deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_840189382%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siege Ballista has 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_444858149%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siege Ballista has 15% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_444858149%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siege Ballista has 45% increased Totem Placement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2896357741%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sigil of Power requires 20% reduced Mana Spent to gain a Stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1582465837%22,%22value%22:{%22min%22:-20,%22max%22:-20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Sigil of Power's Buff also grants 30% increased Critical Strike Chance per Stage"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_479197076%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siphoning Trap deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3686368306%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siphoning Trap has 25% increased Chill Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2530563277%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siphoning Trap has 40% increased Chill Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2530563277%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siphoning Trap has 45% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4166695945%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Siphoning Trap's beam to you grants 1% reduced Damage taken for each other beam"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2673745094%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Skeletons deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3059357595%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Skills Supported by Spellslinger have 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_465162370%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smite deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3901016205%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smite has a 15% chance for lightning to strike another target'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3946561324%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smoke Mine grants additional 30% increased Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3564777492%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Soulrend also Hinders Enemies, with 25% reduced Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_303359279%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Soulrend also Hinders Enemies, with 40% reduced Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_303359279%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Soulrend deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4117042530%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spectral Helix Projectile spirals through +1 rotations'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Spectral Shield Throw fires 2 additional Shard Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3608981617%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spectres have 12% increased Attack and Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4137556603%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spells Triggered by Arcanist Brand Unnerve enemies on Hit for 4 seconds'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1350243490%22,%22value%22:{%22min%22:0,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spirit Offering grants +12% to Critical Strike Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Split Arrow fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2278715446%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Splitting Steel deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_866725377%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Splitting Steel has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1977935782%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Splitting Steel has 30% chance to not consume Steel Shards'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3367825241%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Static Strike has +2 maximum Beam Targets'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Steelskin Buff can take 45% increased amount of Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4102483123%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Steelskin grants 12% additional Physical Damage Reduction'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_680880155%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stone Golems deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1171483499%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Brand has a 18% chance to Chain an additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1510381560%22,%22value%22:{%22min%22:18,%22max%22:18}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Burst has a 10% chance to create an additional Orb'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1898356067%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Rain fires an additional Arrow'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3548112418%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Rain has 40% increased Beam frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1799087078%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormbind deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1235531589%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormbind has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3823033989%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormblast Mine deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_494231298%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormblast Mine has 15% increased Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_321894708%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormblast Mine has 40% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2718657160%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summon Raging Spirit has 16% chance to summon an extra Minion'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1381908541%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summon Raging Spirit has 20% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_38715141%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summon Skitterbots has 30% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3818053347%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Agony Crawler fires 2 additional Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_155429578%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Carrion Golems deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3593547682%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Carrion Golems have +36% to all Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Summoned Holy Relics deal 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1152784934%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Holy Relics have 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3026568825%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Holy Relics have 60% increased Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3080391193%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Reaper deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2516903912%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Reaper has +20% to Physical Damage over Time Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Summoned Sentinels of Absolution have 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_771292654%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Skitterbots have 90% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2844839137%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sunder has 20% reduced delay between Areas in the Wave'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_40032620%22,%22value%22:{%22min%22:-20,%22max%22:-20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sunder has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3316767657%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sunder has 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4033078288%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sweep has a 30% chance to grant an Endurance Charge on Hit'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_609916976%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tectonic Slam deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3999206457%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tectonic Slam has +20% fissure branching chance'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Tectonic Slam has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_340193547%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tempest Shield chains an additional 3 times'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3096183736%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Temporal Rift has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3614009195%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tornado has 30% increased Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3713499406%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Toxic Rain deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_865511246%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Toxic Rain gains 10% of Physical Damage as Extra Chaos Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1798919988%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Unearth Spawns corpses with +3 Level'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Vengeance has 30% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1447427508%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Venom Gyre has a 12% chance to inflict Withered for 2 seconds on Hit'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2157671820%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vigilant Strike has 30% increased Fortification Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2275055843%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vitality has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1233806203%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Void Sphere has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2690342765%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volcanic Fissure deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1124690737%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volcanic Fissure fires an additional Projectile'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1460853241%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volcanic Fissure travels 80% faster'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_373677479%22,%22value%22:{%22min%22:80,%22max%22:80}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Voltaxic Burst deals 3% increased Damage per 0.1 seconds of Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3472104870%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vortex has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2461424099%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vortex has 45% increased Area of Effect when Cast on Frostbolt'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2295263113%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'War Banner has 40% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2592211591%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wave of Conviction deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_309198891%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wave of Conviction deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_309198891%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wave of Conviction has 30% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2412561418%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Wave of Conviction's Exposure applies an extra -6% to Elemental Resistance"
	},
	{ href: '', text: '' },
	{
		href: '',
		text: "Wild Strike's Beam Chains an additional 6 times"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2447447843%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Winter Orb deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2200744772%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wintertide Brand deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_770334536%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wintertide Brand has +2 to maximum Stages'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Wintertide Brand has +4 to maximum Stages'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Wintertide Brand has 40% increased Chill Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1831757355%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wither has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1810898461%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wither has 36% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_447560345%22,%22value%22:{%22min%22:36,%22max%22:36}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Withering Step has 30% increased Elusive Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_281958409%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Withering Step inflicts 2 additional Withered Debuffs'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2273926362%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wrath has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1761642973%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Zealotry has 20% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4216444167%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Caustic Arrow Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3854556792%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chain Hook deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_289027663%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Splitting Steel deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_866725377%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Dual Strike Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1917107304%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Blade Trap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1502095380%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% reduced Lightning Warp Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_609478942%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cobra Lash has 20% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_732631533%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Shield has +1 Cooldown Use'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Ice Nova has +30% chance to Freeze'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3269321994%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Kinetic Blast Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1660758870%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Flammability Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2166622264%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Holy Relics have 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3026568825%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Trap Damage Penetrates 6% Cold Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3698446010%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% of Burning Arrow Physical Damage gained as Extra Fire Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3229580299%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Orb of Storms Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2875508213%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Orb of Storms Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_168538372%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Blade Flurry Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2746213081%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap has 20% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2207890291%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Rain has 25% increased Beam frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1799087078%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Wall deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2189364976%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Holy Relics have 40% increased Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3080391193%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% Chance to gain an additional Power Charge on Kill with Power Siphon'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3609207587%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Fireball has +30% chance to Ignite'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2098790581%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Icicle Mine has +20% to Critical Strike Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '16% increased Bladefall Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2413715772%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Lightning Tendrils Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1230050013%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Poisonous Concoction Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3892584986%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chain Hook has +1 Radius per 12 Rage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Rain of Arrows has 10% chance to fire an additional sequence of arrows'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3505939359%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tornado has 20% increased Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3713499406%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Fire Trap Burning Ground Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3279786746%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Vortex Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4074562940%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Flameblast Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1532964880%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Frostbite Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1783696476%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1041365824%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Plague Bearer Buff grants +12% to Poison Damage over Time Multiplier while Infecting'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Smite deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3901016205%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Creeping Frost Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3804575865%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Destructive Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_728213819%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 20% reduced Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3590425794%22,%22value%22:{%22min%22:-20,%22max%22:-20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lancing Steel has 20% chance to count as consuming Steel Shards without Consuming them'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2891251105%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Perforate has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3536566359%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '+24% to Stone Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+36% increased Flame Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '10% increased Attack Speed with Snipe'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2513745555%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Barrage Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2523298357%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "10% increased Battlemage's Cry Buff Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2426838124%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Conductivity Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3395908304%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Double Strike Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2779309910%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Elemental Hit Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1151217691%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Leap Slam Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3730999759%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Punishment Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2844206732%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Rallying Cry Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4147277532%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Shield Crush Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1948292587%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Whirling Blades Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1902197291%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% of Galvanic Arrow Physical Damage gained as extra Lightning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1943147282%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% of Glacial Hammer Physical Damage gained as Extra Cold Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2555366825%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% of Infernal Blow Physical Damage gained as Extra Fire Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2484188706%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '100% increased Effect of the Buff granted by your Flame Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_269930125%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '100% increased Effect of the Buff granted by your Ice Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2250111474%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '100% increased Effect of the Buff granted by your Lightning Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2527931375%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '100% increased Effect of the Buff granted by your Stone Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2284801675%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% chance to create an additional Animate Weapon copy'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3711386843%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Cold Snap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3371538704%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Creeping Frost Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3816022821%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Earthquake Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_684174846%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Explosive Concoction Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4100281103%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Firestorm explosion Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3931013900%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ice Shot Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1962401751%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Leap Slam Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3367800526%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Lightning Arrow Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4129421630%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Rage Vortex Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3988628118%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Reave Radius'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1486490067%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% Chance for Puncture to Maim on hit'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_244125450%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% chance for Discharge to deal Damage without removing Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1833626118%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% chance to Summon an additional Skeleton with Summon Skeletons'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1040958896%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Corrupting Fever Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3529090048%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Essence Drain Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3698833303%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Exsanguinate Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_292721070%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Freezing Pulse Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2003026405%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Protective Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3917923501%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Spectral Shield Throw Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1561141582%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Spectral Throw Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1062615953%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Summon Reaper Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_82475304%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Convocation Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2054059315%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Devouring Totem Leech per second'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3317752680%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Wild Strike Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_524936200%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ancestral Warchief Totem Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_78239163%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Blade Vortex Spell Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4221797807%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Burning Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_696995312%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Charged Dash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1265055278%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Cremation Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4175469673%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Earthquake Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1697080607%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Frost Blades Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3449510470%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Frostbolt Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2078274993%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Glacial Hammer Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2732675053%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Herald of Thunder Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_558298545%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ice Crash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1794090421%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ice Nova Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1086309398%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ice Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4224384031%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lightning Tendrils Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_39356080%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Manabond Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1609869231%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Rage Vortex Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3153431030%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Rain of Arrows Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3432170876%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Shield Crush Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1451671945%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Shockwave Totem Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2440551805%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Spectral Throw Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3755794090%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Static Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_551375258%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Sweep Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_253870897%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Tornado Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2681941384%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Volatile Dead Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1212590278%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Voltaxic Burst Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2913890852%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Ambush Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2977107166%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Bone Offering Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1607493537%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Elemental Weakness Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2690620076%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '35% chance to Avoid being Stunned while Channelling Snipe'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3024408350%22,%22value%22:{%22min%22:35,%22max%22:35}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Bear Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1877863115%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Flame Surge Damage with Hits and Ailments against Burning Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_430890565%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Leap Slam Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3850775143%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lightning Tendrils Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_12756171%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Searing Bond Totem Placement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_708179348%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Vengeance Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1972101281%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Dual Strike Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2729530556%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Flame Surge Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1030003515%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Flameblast Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3053448465%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Split Arrow Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1028884162%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '75% increased Effect of the Buff granted by your Chaos Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1648511635%22,%22value%22:{%22min%22:75,%22max%22:75}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Cremation Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2938856716%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Freezing Pulse Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1894493605%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Lightning Spire Trap Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1978232370%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Volatile Dead Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3179781611%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '90% increased Double Strike Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1201942540%22,%22value%22:{%22min%22:90,%22max%22:90}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Protector Totem grants 12% increased Attack Speed while Active'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1303996723%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Animated Guardians deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4157143640%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arc deals 8% increased Damage for each time it has Chained'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3998182656%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arcane Cloak Spends an additional 10% of current Mana'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_122106412%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arctic Armour has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2605040931%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Artillery Ballista Damage Penetrates 6% Fire Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1734517294%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Attacks Exerted by Ambush have +25% to Critical Strike Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Attacks with Energy Blades Penetrate 8% Lightning Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1501151168%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Vortex has +2% to Critical Strike Multiplier for each blade'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Bladestorm deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_599289531%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blink Arrow and Blink Arrow Clones have 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1967878868%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blink Arrow has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2983274404%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blood and Sand has 25% increased Buff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2471636515%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bone Offering grants an additional +6% Chance to Block Attack Damage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Burning Arrow has +20% chance to Ignite'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2226973351%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Charged Dash has 15% more Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_797408710%22,%22value%22:{%22min%22:15,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chills from Ice Nova Hits always reduce Action Speed by at least 6%'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_644285691%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cobra Lash deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2224580362%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Ground from Holy Flame Totem applies 6% increased Damage taken to Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2807947%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Crackling Lance deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_435519320%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Discharge has +3 to Radius'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Divine Ire Damages an additional nearby Enemy when gaining Stages'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1477213724%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Divine Ire deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2584129062%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dominating Blow can summon 2 additional Magic Sentinels of Dominance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1095160683%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Earthshatter deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_335520087%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Elemental Hit has +20% chance to Freeze, Shock and Ignite'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3205997967%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Enduring Cry has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3617955571%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Enemies in Void Sphere's range take up to 6% increased Damage, based on distance from the Void Sphere"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4271709087%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Energy Blades have 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1217516474%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Arrow has 25% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3590425794%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Trap deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4207255685%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Trap has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1694915226%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Wall grants 19 to 28 Added Fire Damage to Projectiles'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3881327877%22,%22value%22:{%22min%22:19,%22max%22:28}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flesh Offering grants an additional 14% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_513715594%22,%22value%22:{%22min%22:14,%22max%22:14}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flicker Strike has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1398394628%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Wall has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2479762395%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frostblink has 50% increased maximum travel distance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3070497632%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Field deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3821213705%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ground Slam has a 16% increased angle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_648647905%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Hydrosphere deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1040582501%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Icicle Mine deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2363866815%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Intimidating Cry has 24% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1088946611%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Kinetic Bolt has 20% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2482018205%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Conduit has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2252888886%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Trap pierces 2 additional Targets'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3764410821%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Mirror Arrow and Mirror Arrow Clones deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4136186767%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Mirror Arrow and Mirror Arrow Clones have 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3653459847%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Molten Shell has 25% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4255043252%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Orb of Storms has 20% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2778301298%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Penance Brand deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_610562666%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Penance Brand has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1486948114%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Poisonous Concoction uses 8% reduced Flask Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1474722052%22,%22value%22:{%22min%22:-8,%22max%22:-8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pyroclast Mine has 10% increased Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2005440071%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rejuvenation Totem also grants Mana Regeneration equal to 10% of its Life Regeneration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1803063132%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Scourge Arrow has 6% chance to Poison per Stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2257652056%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1175282728%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Seismic Trap has 10% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3618430531%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shield Crush central wave has 16% more Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_734712401%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shock Nova ring deals 40% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3652051346%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shrapnel Ballista Pierces 4 additional Targets'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1494168614%22,%22value%22:{%22min%22:4,%22max%22:4}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siege Ballista deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_840189382%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siege Ballista has 30% increased Totem Placement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2896357741%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sigil of Power requires 10% reduced Mana Spent to gain a Stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1582465837%22,%22value%22:{%22min%22:-10,%22max%22:-10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Skills Supported by Spellslinger have 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_465162370%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smite has 20% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2294732229%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smite has a 10% chance for lightning to strike another target'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3946561324%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Sniper's Mark has 10% increased Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2789561878%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spectres have 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3645693773%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spectres have 8% increased Attack and Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4137556603%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Spirit Offering grants +8% to Critical Strike Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Splitting Steel has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1977935782%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Static Strike has +1 maximum Beam Targets'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Steelskin grants 8% additional Physical Damage Reduction'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_680880155%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Storm Brand Damage Penetrates 8% of Branded Enemy's Lightning Resistance"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3318254108%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Brand has a 12% chance to Chain an additional time'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1510381560%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Reaper has +12% to Physical Damage over Time Multiplier'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Summoned Skitterbots have 60% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2844839137%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sunder has 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4033078288%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sweep has a 20% chance to grant an Endurance Charge on Hit'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_609916976%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tectonic Slam deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3999206457%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vengeance has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1447427508%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vigilant Strike has 45% increased Fortification Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2275055843%22,%22value%22:{%22min%22:45,%22max%22:45}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Vortex has 30% increased Area of Effect when Cast on Frostbolt'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2295263113%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'War Banner has 25% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2592211591%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Wave of Conviction's Exposure applies an extra -4% to Elemental Resistance"
	},
	{ href: '', text: '' },
	{
		href: '',
		text: "Wild Strike's Beam Chains an additional 4 times"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2447447843%22,%22value%22:{%22min%22:4,%22max%22:4}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Winter Orb has 2% increased Area of Effect per Stage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1017161280%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wintertide Brand deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_770334536%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wither has 24% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_447560345%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Reap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_647221668%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Contagion Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2565809961%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Flame Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3996051430%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Armageddon Brand has 8% increased Activation Frequency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2512194486%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ground Slam Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3061969105%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Smoke Mine grants additional 20% increased Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3564777492%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormbind deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1235531589%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormblast Mine has 10% increased Throwing Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_321894708%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blast Rain has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_574378310%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap has 10% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2962501808%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Incinerate has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2562208244%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sunder has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3316767657%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bear Trap has 10% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_918308703%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% reduced Storm Call Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1843506018%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Flameblast Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_169405468%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Enfeeble Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_516587640%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap has 10% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1570047087%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Venom Gyre deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1404787106%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purifying Flame has 20% increased Area of Effect if targeting Consecrated Ground'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1954529734%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wither has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1810898461%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Leap Slam Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3850775143%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Firestorm Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1691710359%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Flame Dash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3013068851%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siphoning Trap deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3686368306%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormblast Mine deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_494231298%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ice Trap Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3367298564%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Unearth Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2387717928%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Blast has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3569393676%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Holy Flame Totem deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2801853811%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Voltaxic Burst Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2982851186%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Barrage Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3685345485%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Bear Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1877863115%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Forbidden Rite Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3383175526%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Riposte Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4071708873%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tempest Shield chains an additional 2 times'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3096183736%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ensnaring Arrow has 20% increased Debuff Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1405738574%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ice Nova Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_68809719%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Cold Snap has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2289367813%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wintertide Brand has 25% increased Chill Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1831757355%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Forbidden Rite Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3316480899%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arc has +20% chance to Shock'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Riposte has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2287986752%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Double Strike Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1201942540%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '+24% to Ancestral Protector Totem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+24% to Animated Guardian Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+24% to Chaos Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+24% to Ice Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+24% to Lightning Golem Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '+24% to Raised Spectre Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: '10% increased Cleave Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3106577499%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Flammability Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_282417259%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Frostbolt Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4231484190%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Heavy Strike Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_343849491%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Scorching Ray beam length'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_702909553%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Shield Charge Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_648343221%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% increased Vulnerability Curse Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1065909420%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '10% of Ice Crash Physical Damage gained as Extra Cold Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3465202861%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '100% increased Effect of the Buff granted by your Carrion Golems'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2420972973%22,%22value%22:{%22min%22:100,%22max%22:100}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '12% increased Ancestral Protector Totem Placement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_592861938%22,%22value%22:{%22min%22:12,%22max%22:12}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ancestral Warchief Totem Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3320271130%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ball Lightning Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_788307702%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Blade Flurry Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2746213081%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Cleave Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3172519570%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Contagion Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1056396846%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Decoy Totem Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1686675991%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Detonate Dead Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_482660590%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Flameblast Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1532964880%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Frost Bomb Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1451372148%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Ice Crash Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3930497977%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Infernal Blow Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4031295671%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Lacerate Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3854723321%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Molten Strike Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2524620107%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Rain of Arrows Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2205814812%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Rolling Magma Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1646093658%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Shockwave Totem Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1153159301%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Static Strike Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2685860927%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Storm Call Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2070247068%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Sweep Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4202548383%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Tornado Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1866415366%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% chance for Phase Run to increase Duration without removing Frenzy Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4259029320%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "20% increased Alchemist's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3583185303%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Ambush Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2977107166%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Caustic Arrow Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_387490713%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Intuitive Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3545503197%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "20% increased Poacher's Mark Curse Effect"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3278819254%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Sentinel of Absolution Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1778800422%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Sentinel of Dominance Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3772643988%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Smoke Mine Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3719728947%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Soul Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3975033889%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Spectral Helix Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1952647315%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Viper Strike Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3869217625%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Frost Wall Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_775034903%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Immortal Call Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1336543283%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Phase Run Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2556095677%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '24% increased Searing Bond Totem Elemental Resistances'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2519689029%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Arc Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2740567252%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ball Lightning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3152812191%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Blade Flurry Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_754797886%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Blade Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3676486210%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Bladefall Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3069740560%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Caustic Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1496334795%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Cold Snap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3729006707%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Contagion Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_277116504%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Creeping Frost Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2846773529%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Discharge Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1935930829%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Double Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1809965314%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Essence Drain Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3469967347%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ethereal Knives Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3514973342%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Explosive Concoction Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_383710904%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Fireball Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2600498881%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Firestorm Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2201904285%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Flame Surge Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1491182794%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Freezing Pulse Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_819852672%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Frenzy Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_522780692%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Frost Bomb Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2380598805%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Galvanic Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2634945088%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Ground Slam Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_108883700%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Heavy Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_954135826%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Herald of Ash Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_767884542%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Herald of Ice Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3910961021%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Incinerate Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2246425134%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Infernal Blow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_242838571%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lacerate Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1844721010%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lightning Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3630274354%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lightning Trap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3131492956%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lightning Trap Lightning Ailment Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4210927948%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Lightning Warp Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_209345940%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Molten Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2038865857%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Power Siphon Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_78767457%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Puncture Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3496292484%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Reave Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_862824495%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Reckoning Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_308326229%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Rolling Magma Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_600891507%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Scorching Ray Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3395096718%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Searing Bond Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2298223148%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Shield Charge Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3490662882%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Shock Nova Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3948894096%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Spectral Helix Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_183131376%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Split Arrow Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2555469486%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Storm Burst Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2948719994%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Storm Call Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3359777583%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Storm Rain Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1463790510%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Tempest Shield Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2121581717%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Unearth Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3953599026%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Vigilant Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2287764959%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Viper Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2585271359%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Vortex Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_200942664%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Whirling Blades Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3723124286%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Wild Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1666713639%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Conductivity Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_819890745%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Despair Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_683073695%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Puncture Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3186938438%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Punishment Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1924239636%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Rejuvenation Totem Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1588572574%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Spirit Offering Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1063173946%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Temporal Chains Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_888039248%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '30% increased Vulnerability Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3229878341%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Decoy Totem Life'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1631824124%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Flame Surge Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1491182794%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '40% increased Lacerate Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_578067404%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '60% increased Viper Strike Critical Strike Chance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3734756042%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Absolution Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2558170600%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Fireball Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2231403318%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Protector Totem deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2596239449%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ancestral Warchief Totem grants 20% increased Melee Damage while Active'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3543257184%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Armageddon Brand Damage Penetrates 8% of Branded Enemy's Fire Resistance"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1715805151%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Armageddon Brand deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1699139870%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Attacks Exerted by Ancestral Cry deal 35% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2146663823%22,%22value%22:{%22min%22:35,%22max%22:35}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bane deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2206071316%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Bane has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4224588066%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blast Rain deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4014289250%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blazing Salvo deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4102281803%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blight has 20% increased Hinder Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4170725899%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blink Arrow and Blink Arrow Clones have 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1554597333%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blood Rage grants additional 20% chance to gain a Frenzy Charge on Kill'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3152806535%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chain Hook has a 25% chance to grant +1 Rage if it Hits Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2588242810%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chaos Golems deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2505115650%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Charged Dash has 10% more Movement Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_797408710%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Ground from Purifying Flame applies 6% increased Damage taken to Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3100629498%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Path deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4047323043%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Path has 10% increased teleport range'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2048678824%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Consecrated Path has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3285061858%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Conversion Trap 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2143519574%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Converted Enemies have 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_131320052%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Convocation has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2680060124%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Crackling Lance has 24% increased branching angle'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2896346908%22,%22value%22:{%22min%22:24,%22max%22:24}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Crackling Lance has 8% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_617228927%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Dash has +1 Cooldown Use'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Dash travels 65% increased distance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4147746721%22,%22value%22:{%22min%22:65,%22max%22:65}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Devouring Totem has 40% Chance to Consume an additional corpse'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4189505564%22,%22value%22:{%22min%22:40,%22max%22:40}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Divine Ire's beam has 10% increased width"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2212298325%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Earthquake deals 5% increased Damage per 0.1 seconds Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2068943099%22,%22value%22:{%22min%22:5,%22max%22:5}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Earthshatter has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3469056056%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Elemental Hit deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4109038270%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Enemies Drenched by Hydrosphere have Cold and Lightning Exposure, applying -4% to Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Enemies affected by Bear Trap take 5% increased Damage from Trap or Mine Hits'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1678345858%22,%22value%22:{%22min%22:5,%22max%22:5}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ensnaring Arrow has 60% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2791271819%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Explosive Concoction uses 8% reduced Flask Charges'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1907051864%22,%22value%22:{%22min%22:-8,%22max%22:-8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Dash has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1440798870%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Golems have 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1575282859%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flame Wall deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2189364976%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4162139595%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flamethrower Trap has 20% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_525771896%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Flesh and Stone has 50% increased Mana Reservation Efficiency'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3563089138%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Bomb has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3524326896%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Bomb has 20% increased Debuff Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2109176627%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Bomb has 30% increased Debuff Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2109176627%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frost Shield has +125 to maximum Life per Stage'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Frostblink has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_815588902%22,%22value%22:{%22min%22:-20,%22max%22:-20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frostbolt has +10% chance to Freeze'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Frozen Legion has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3809563078%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Galvanic Field has 8% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2364563825%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Glacial Cascade gains 6% of Physical Damage as Extra Cold Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3492427828%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Glacial Hammer has +20% chance to Freeze'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Heavy Strike has a 8% chance to deal Double Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3760588941%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Holy Flame Totem has 20% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4082863126%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Ice Golems deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3816405721%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Incinerate has +1 to maximum stages'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Infernal Cry has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2702698464%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Intimidating Cry has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1088946611%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Intimidating Cry has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1134560807%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lacerate deals 4 to 15 added Physical Damage against Bleeding Enemies'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_732320584%22,%22value%22:{%22min%22:4,%22max%22:15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lancing Steel deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2159486200%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Golems deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3280107027%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Spire Trap deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_982975385%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Lightning Trap Damage Penetrates 6% Lightning Resistance'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1557531966%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Mirror Arrow has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1781106044%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Perforate creates +1 Spike'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Pestilent Strike deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_856157011%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pestilent Strike has 25% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_64670441%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Plague Bearer deals Damage based on an additional 3% of Plague Value'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3672666316%22,%22value%22:{%22min%22:3,%22max%22:3}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Purifying Flame deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_944311193%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pyroclast Mine deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4048820315%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Raised Zombies deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2228518621%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Raised Zombies have +24% to Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Reckoning has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_804983774%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Rune Blast teleports you to the detonated Rune if you have not detonated Runes in the past 1 second'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4059221381%22,%22value%22:{%22min%22:1,%22max%22:1}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sand Bladestorms move with 50% increased speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1556508042%22,%22value%22:{%22min%22:50,%22max%22:50}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Scourge Arrow deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_192534517%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shattering Steel deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2313072099%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Shrapnel Ballista has 20% increased Projectile Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1213017413%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Sigil of Power's Buff also grants 20% increased Critical Strike Chance per Stage"
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_479197076%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Siphoning Trap has 30% increased Skill Effect Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4166695945%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Soulrend deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4117042530%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Splitting Steel has 20% chance to not consume Steel Shards'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3367825241%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Steelskin Buff can take 30% increased amount of Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_4102483123%22,%22value%22:{%22min%22:30,%22max%22:30}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stone Golems deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1171483499%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Storm Brand deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_531461618%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormbind has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3823033989%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Stormblast Mine has 20% increased Aura Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2718657160%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Carrion Golems have +24% to all Elemental Resistances'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Summoned Holy Relics deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1152784934%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Reaper deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2516903912%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Summoned Sentinels of Absolution have 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_771292654%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Sunder has 15% reduced delay between Areas in the Wave'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_40032620%22,%22value%22:{%22min%22:-15,%22max%22:-15}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Tectonic Slam has +12% fissure branching chance'
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Tectonic Slam has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_340193547%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Temporal Rift has 20% increased Cooldown Recovery Rate'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3614009195%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Toxic Rain gains 6% of Physical Damage as Extra Chaos Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1798919988%22,%22value%22:{%22min%22:6,%22max%22:6}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volcanic Fissure travels 60% faster'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_373677479%22,%22value%22:{%22min%22:60,%22max%22:60}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Voltaxic Burst deals 2% increased Damage per 0.1 seconds of Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3472104870%22,%22value%22:{%22min%22:2,%22max%22:2}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Wave of Conviction has 20% increased Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2412561418%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Withering Step has 20% increased Elusive Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_281958409%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Bodyswap Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_397438226%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Dual Strike Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2094069860%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '8% increased Dark Pact Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1549594869%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '16% increased Storm Burst Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3961497709%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Blade Blast deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2276547155%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Destructive Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_728213819%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '20% increased Vampiric Link Duration'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1238426677%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Bodyswap Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_341054435%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Dark Pact Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1573799461%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: '25% increased Glacial Cascade Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_451037529%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Animated Weapons deal 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1819674879%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Arcanist Brand has 8% increased Cast Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1147445274%22,%22value%22:{%22min%22:8,%22max%22:8}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Chain Hook deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_289027663%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: "Charged Dash has +4 to Radius of each Wave's last damage Area"
	},
	{ href: '', text: '' },
	{
		href: '',
		text: 'Fireball has +20% chance to Ignite'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2098790581%22,%22value%22:{%22min%22:20,%22max%22:20}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Frozen Sweep deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1048825825%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Perforate deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2731606134%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Pestilent Strike has 16% increased Area of Effect'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_3787328468%22,%22value%22:{%22min%22:16,%22max%22:16}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Raised Zombies have 10% increased Attack Speed'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_2499559911%22,%22value%22:{%22min%22:10,%22max%22:10}}]}]}}',
		text: ''
	},
	{
		href: '',
		text: 'Volcanic Fissure deals 25% increased Damage'
	},
	{
		href: 'https://www.pathofexile.com/trade/search/Ancestor?q={%22query%22:{%22filters%22:{},%22stats%22:[{%22type%22:%22and%22,%22filters%22:[{%22id%22:%22enchant.stat_1124690737%22,%22value%22:{%22min%22:25,%22max%22:25}}]}]}}',
		text: ''
	}
];

const tempEnchants: {
	enchantText: string;
	poeTradeUrl: string;
}[] = [];

let tempEnchantText = '';
for (let i = 0; i < rawEnchants.length; i++) {
	if (rawEnchants[i].href.startsWith('https://www.pathofexile.com/trade')) {
		tempEnchants.push({
			enchantText: tempEnchantText,
			poeTradeUrl: rawEnchants[i].href
		});
	} else {
		tempEnchantText = rawEnchants[i].text;
	}
}

export const enchants = tempEnchants;
