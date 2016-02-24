angular.module('directivePractice').controller('LessonController', function($scope){
  $scope.name = "David";
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = 'Content made possible by your friends at: Two-way data binding!';
  $scope.announceDay = function(lesson, day) {
    alert(lesson + ' is active on ' + day + '! Aren\'t you a lucky dog!');
  };
});
