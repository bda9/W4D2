angular.module('timeApp').directive('showTime', function(){
  return  {
      restrict: 'E',
      template: "<div>Current time is {{time | date: format}}</div><div>GMT time is {{getTime | date: format}}</div>",
      scope: {
        format: '=',
        update: '&'
      },
      link: function(scope, element, attrs){
        var currentTime = new Date();

        element.css({
          fontWeight: "bold",
          color: "red"
        });
//this is updating the time (local time) line when we click on it.
        element.on('mousedown', function(){
          scope.update();
          // scope.time = new Date();
          scope.$apply();

        });
        scope.time = currentTime;
        scope.getTime = new Date(currentTime.toGMTString());
      }
    };
});
