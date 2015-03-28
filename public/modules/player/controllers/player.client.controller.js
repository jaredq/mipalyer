'use strict';
/*global videojs*/

angular.module('player').controller('PlayerController', ['$scope',
	function($scope) {
		$scope.mediaUrl = 'http://wms1.iviplanet.com/originalstereo';
		$scope.mediaType = 'audio/x-ms-wma';
	
		$scope.playNow = function(url, codec) {
			var vjsPlayer = videojs('videojs-player');
			vjsPlayer.src({type: 'audio/mp3', src: '/res/blank.mp3'});
			vjsPlayer.load();
			vjsPlayer.src({type: codec, src: url});
			vjsPlayer.load();
			vjsPlayer.play();
		};
		
		$scope.stopIt = function(url, codec) {
			var vjsPlayer = videojs('videojs-player');
			vjsPlayer.src({type: 'audio/mp3', src: '/res/blank.mp3'});
			vjsPlayer.load();
			vjsPlayer.pause();
		};
		
		$scope.playIt = function() {
		//alert($scope.mediaUrl);
		//alert($scope.mediaType);
			$scope.playNow($scope.mediaUrl, $scope.mediaType);
		};
	}
]);