(function() {

  const charButton = document.getElementById('createCharButton');
  const charName = document.getElementById('charName');
  const charClass = document.getElementById('charClass');
  const charPower = document.getElementById('charPower');
  const charWeapon = document.getElementById('charWeapon');
  const charGender = document.getElementById('charGender');

  const charNames = [
    "Adrastos",
    "Am-Heh",
    "Atri",
    "Bebinn",
    "Bolverk",
    "Diancecht",
    "Discordia",
    "Draupathi",
    "Ebisu",
    "Epona",
    "Freyja",
    "Harmonia",
    "Hnoss",
    "Holda",
    "Iapetos",
    "Juno",
    "Jurojin",
    "Kausalya",
    "Libitina",
    "Macha",
    "Mefitas",
    "Mehet",
    "Musubi No Kami",
    "Neith",
    "Nemain",
    "Nephthys",
    "Oho Yama",
    "Orcus",
    "Osiris",
    "Parthenope",
    "Priam",
    "Pushan",
    "Tsuki Yumi",
    "Var",
    "Yama"
  ];

  const charClasses = [
    "Arachnoid",
    "Assassin",
    "Coward",
    "Demon",
    "Giant",
    "God",
    "Gunslinger",
    "Hunter",
    "Monk",
    "Mystic",
    "Noble",
    "Orc",
    "Paladin",
    "Prankster",
    "Priest",
    "Psycho",
    "ShapeShifter",
    "Troll",
    "Warlock"
  ];

  const charPowers = [
    "Earth",
    "Farting",
    "Fire",
    "Flight",
    "Healing",
    "Hypnosis",
    "Ice",
    "Immortality",
    "Insults",
    "Invisibility",
    "Laughter",
    "Levitation",
    "Lightning",
    "Love",
    "Mind Control",
    "Necromancy",
    "Possession",
    "Sexual Magnetism",
    "Strength",
    "Telekinesis",
    "Teleportation",
    "Time Manipulation",
    "Wind"
  ];

  const charWeapons = [
    "Axe",
    "Bionic Arm",
    "Bow",
    "Cannon",
    "Chainsaw",
    "Elephant",
    "Glaive",
    "Gun",
    "Hammer",
    "Harpoon",
    "Hairspray",
    "Laser",
    "Rhino",
    "Rodents of Unusual Size",
    "Sabertooth Tiger",
    "Spear",
    "Stake",
    "Stave",
    "Sword",
    "Trident",
    "Twin Daggers",
    "Whip"
  ];

  const charGenders = [
    "Aerogender",
    "Amaregender",
    "Female",
    "Neutral",
    "Hemigender",
    "Male",
    "Trigender"
  ];

  charButton.addEventListener('click', e => {
    const { target } = e;
    console.log(`Create Character Button Clicked [Target ID: #${ target.id }]`);

    charName.innerHTML = randomProperty(charNames);
    charClass.innerHTML = randomProperty(charClasses);
    charPower.innerHTML = randomProperty(charPowers);
    charWeapon.innerHTML = randomProperty(charWeapons);
    charGender.innerHTML = randomProperty(charGenders);
  });

  function randomProperty(propertyArray) {
    const property = Math.floor(Math.random() * propertyArray.length);
    return propertyArray[property];
  }

})();

