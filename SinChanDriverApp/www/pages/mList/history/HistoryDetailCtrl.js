app.controller('HistoryDetailCtrl', ['$state', '$scope', '$ionicModal', function ($state, $scope, $ionicModal) {
    $scope.vm = {};

    //地圖
    $ionicModal.fromTemplateUrl('map/model.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.vm.modal = modal;
    });
    $scope.vm.openModel = function () {
        $scope.vm.modal.show();
        setmap("22.626257", "120.281939", 'addressgmapid');
    };
    $scope.vm.closeModel = function () {
        $scope.vm.modal.hide();
    };
    $scope.$on('$destroy', function () {
        $scope.vm.modal.remove();
    });

    //拒絕
    $scope.refuse = function () {
        $state.go("m.listhistory");
    };
    //接受
    $scope.save = function () {
        $state.go("m.listhistory");
    };
}]);

//Google地圖
function setmap(lat, lng, eleid) {
    var test = initialize(lat, lng, eleid);
    google.maps.event.addDomListener(window, 'load', test);
}

function initialize(lat, lng, eleid) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(eleid),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
}