var FranceRegionsToolApp = angular.module('FranceRegionsToolApp', ['FranceRegionsToolFactories']);

FranceRegionsToolApp.controller('MainCtrl', function ($scope, dpts, regions, newRegions) {

  $scope.zipcode = "";

  $scope.zipInfo = false;
  $scope.dpt = null;

  $scope.getRegion = function(dpt) {
    if (dpt) {
      for (var i = 0 ; i < regions.length ; i++)
        if (regions[i].id == dpt.region)
          return regions[i];
    }
    return { id: 1, name: "", newRegion: 1 };
  };
  $scope.dpt = null;

  $scope.getNewRegion = function(dpt) {
    var region = $scope.getRegion(dpt);
    for (var i = 0 ; i < newRegions.length ; i++)
      if (newRegions[i].id == region.newRegion)
        return newRegions[i];
    return { id: 1, name: "" }
  };

  $scope.submit = function() {
    if ($scope.zipcode.length != 5)
      alert("Un code postal contient 5 chiffres");
    else {
      var dpt = $scope.zipcode.substring(0, 2);
      var found = false;
      for (var i = 0 ; i < dpts.length ; i++)
        if (dpts[i].zip == dpt) {
          $scope.dpt = dpts[i];
          found = true;
          break;
        }

      if (!found)
        alert("Aucun département trouvé avec ce code postal");
      else
        $scope.zipinfo = true;
    }

  };

});
