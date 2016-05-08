var FranceRegionsToolFactories = angular.module('FranceRegionsToolFactories', []);

FranceRegionsToolFactories.factory('dpts', function dpts() {
  return [
    { zip: "01", name: "Ain", region: 1 },
    { zip: "02", name: "Aisne", region: 2 },
    { zip: "03", name: "Allier", region: 3 },
    { zip: "04", name: "Alpes de Hautes-Provence", region: 4 },
    { zip: "05", name: "Hautes-Alpes", region: 4 },
    { zip: "06", name: "Alpes-Maritimes", region: 4 },
    { zip: "07", name: "Ardèche", region: 1 },
    { zip: "08", name: "Ardennes", region: 5 },
    { zip: "09", name: "Ariège", region: 6 },
    { zip: "10", name: "Aube", region: 5 },
    { zip: "11", name: "Aude", region: 7 },
    { zip: "12", name: "Aveyron", region: 6 },
    { zip: "13", name: "Bouches-du-Rhône", region: 4 },
    { zip: "14", name: "Calvados", region: 8 },
    { zip: "15", name: "Cantal", region: 3 },
    { zip: "16", name: "Charente", region: 10 },
    { zip: "17", name: "Charente-Maritime", region: 10 },
    { zip: "18", name: "Cher", region: 11 },
    { zip: "19", name: "Corrèze", region: 12 },
    { zip: "2A", name: "Corse-du-Sud", region: 13 },
    { zip: "2B", name: "Haute-Corse", region: 13 },
    { zip: "21", name: "Côte-d'Or", region: 14 },
    { zip: "22", name: "Côtes d'Armor", region: 15 },
    { zip: "23", name: "Creuse", region: 12 },
    { zip: "24", name: "Dordogne", region: 16 },
    { zip: "25", name: "Doubs", region: 17 },
    { zip: "26", name: "Drôme", region: 1 },
    { zip: "27", name: "Eure", region: 9 },
    { zip: "28", name: "Eure-et-Loir", region: 11 },
    { zip: "29", name: "Finistère", region: 15 },
    { zip: "30", name: "Gard", region: 7 },
    { zip: "31", name: "Haute-Garonne", region: 6 },
    { zip: "32", name: "Gers", region: 6 },
    { zip: "33", name: "Gironde", region: 16 },
    { zip: "34", name: "Hérault", region: 7 },
    { zip: "35", name: "Ille-et-Vilaine", region: 15 },
    { zip: "36", name: "Indre", region: 11 },
    { zip: "37", name: "Indre-et-Loire", region: 11 },
    { zip: "38", name: "Isère", region: 1 },
    { zip: "39", name: "Jura", region: 17 },
    { zip: "40", name: "Landes", region: 16 },
    { zip: "41", name: "Loir-et-Cher", region: 11 },
    { zip: "42", name: "Loire", region: 1 },
    { zip: "43", name: "Haute-Loire", region: 3 },
    { zip: "44", name: "Loire-Atlantique", region: 18 },
    { zip: "45", name: "Loiret", region: 11 },
    { zip: "46", name: "Lot", region: 6 },
    { zip: "47", name: "Lot-et-Garonne", region: 16 },
    { zip: "48", name: "Lozère", region: 7 },
    { zip: "49", name: "Maine-et-Loire", region: 18 },
    { zip: "50", name: "Manche", region: 8 },
    { zip: "51", name: "Marne", region: 5 },
    { zip: "52", name: "Haute-Marne", region: 5 },
    { zip: "53", name: "Mayenne", region: 18 },
    { zip: "54", name: "Meurthe-et-Moselle", region: 19 },
    { zip: "55", name: "Meuse", region: 19 },
    { zip: "56", name: "Morbihan", region: 15 },
    { zip: "57", name: "Moselle", region: 19 },
    { zip: "58", name: "Nièvre", region: 14 },
    { zip: "59", name: "Nord", region: 21 },
    { zip: "60", name: "Oise", region: 2 },
    { zip: "61", name: "Orne", region: 8 },
    { zip: "62", name: "Pas-de-Calais", region: 21 },
    { zip: "63", name: "Puy-de-Dôme", region: 3 },
    { zip: "64", name: "Pyrénées-Atlantiques", region: 16 },
    { zip: "65", name: "Hautes-Pyrénées", region: 6 },
    { zip: "66", name: "Pyrénées-Orientales", region: 7 },
    { zip: "67", name: "Bas-Rhin", region: 20 },
    { zip: "68", name: "Haut-Rhin", region: 20 },
    { zip: "69", name: "Rhône", region: 1 },
    { zip: "70", name: "Haute-Saône", region: 17 },
    { zip: "71", name: "Saône-et-Loire", region: 14 },
    { zip: "72", name: "Sarthe", region: 18 },
    { zip: "73", name: "Savoie", region: 1 },
    { zip: "74", name: "Haute-Savoie", region: 1 },
    { zip: "75", name: "Paris", region: 22 },
    { zip: "76", name: "Seine-Maritime", region: 9 },
    { zip: "77", name: "Seine-et-Marne", region: 22 },
    { zip: "78", name: "Yvelines", region: 22 },
    { zip: "79", name: "Deux-Sèvres", region: 10 },
    { zip: "80", name: "Somme", region: 2 },
    { zip: "81", name: "Tarn", region: 6 },
    { zip: "82", name: "Tarn-et-Garonne", region: 6 },
    { zip: "83", name: "Var", region: 4 },
    { zip: "84", name: "Vaucluse", region: 4 },
    { zip: "85", name: "Vendée", region: 18 },
    { zip: "86", name: "Vienne", region: 10 },
    { zip: "87", name: "Haute-Vienne", region: 12 },
    { zip: "88", name: "Vosges", region: 19 },
    { zip: "89", name: "Yonne", region: 14 },
    { zip: "90", name: "Territoire-de-Belfort", region: 17 },
    { zip: "91", name: "Essonne", region: 22 },
    { zip: "92", name: "Hauts-de-Seine", region: 22 },
    { zip: "93", name: "Seine-Saint-Denis", region: 22 },
    { zip: "94", name: "Val-de-Marne", region: 22 },
    { zip: "95", name: "Val-d'Oise", region: 22 }
  ];
});

FranceRegionsToolFactories.factory('regions', function regions() {
  return [
    { id: 1, name: "Rhône-Alpes", newRegion: 3 },
    { id: 2, name: "Picardie", newRegion: 10 },
    { id: 3, name: "Auvergne", newRegion: 3 },
    { id: 4, name: "Provence-Alpes-Côte d'Azur", newRegion: 13 },
    { id: 5, name: "Champagne-Ardenne", newRegion: 1 },
    { id: 6, name: "Midi-Pyrénées", newRegion: 9 },
    { id: 7, name: "Languedoc-Roussillon", newRegion: 9 },
    { id: 8, name: "Basse-Normandie", newRegion: 11 },
    { id: 9, name: "Haute-Normandie", newRegion: 11 },
    { id: 10, name: "Poitou-Charentes", newRegion: 2 },
    { id: 11, name: "Centre", newRegion: 6 },
    { id: 12, name: "Limousin", newRegion: 2 },
    { id: 13, name: "Corse", newRegion: 8 },
    { id: 14, name: "Bourgogne", newRegion: 4 },
    { id: 15, name: "Bretagne", newRegion: 5 },
    { id: 16, name: "Aquitaine", newRegion: 2 },
    { id: 17, name: "Franche-Comté", newRegion: 4 },
    { id: 18, name: "Pays de la Loire", newRegion: 12 },
    { id: 19, name: "Lorraine", newRegion: 1 },
    { id: 20, name: "Alsace", newRegion: 1 },
    { id: 21, name: "Nord-Pas-de-Calais", newRegion: 10 },
    { id: 22, name: "Île-de-France", newRegion: 7 },
  ];
});

FranceRegionsToolFactories.factory('newRegions', function newRegions() {
  return [
    { id: 1, name: "Grand-Est" },
    { id: 2, name: "Aquitaine - Limousin - Poitou-Charentes" },
    { id: 3, name: "Auvergne - Rhône-Alpes" },
    { id: 4, name: "Bourgogne - Franche-Comté" },
    { id: 5, name: "Bretagne" },
    { id: 6, name: "Centre Val de Loire" },
    { id: 7, name: "Île-de-France" },
    { id: 8, name: "Corse" },
    { id: 9, name: "Midi-Pyrénées - Languedoc-Roussillon" },
    { id: 10, name: "Hauts-de-France" },
    { id: 11, name: "Normandie" },
    { id: 12, name: "Pays de la Loire" },
    { id: 13, name: "Provence-Alpes-Côte d'Azur" }
  ];
});
