Crafty.c("LeftControls", {
          init: function() {
            this.requires('Multiway');
          },
          
          leftControls: function(speed) {
            this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
            return this;
          }
      });

Crafty.c('Ape', {
          Ape: function() {
            //setup animations
            this.requires("SpriteAnimation, Collision, Grid")
            .animate("walk_left", 0, 0, 3)
            .animate("walk_right", 4, 0, 7)
            //change direction when a direction change event is received
            .bind("NewDirection",
            function (direction) {
              if (direction.x < 0) {
              	this.stop().animate("walk_left", 4, -1);
              };
              if (direction.x > 0) {
                this.stop().animate("walk_right", 4, -1);
              };
              if(!direction.x && !direction.y) {
                this.stop();
              }
            })
            .onHit("solid", function () {
            //Move unit out of solid tile
            })
            .bind('Moved', function(from) {
              if(this.hit('solid')){
                this.attr({x: from.x, y:from.y});
              }
            })
            .onHit("fire", function() {
              this.destroy();
              // Subtract life and play scream sound :-)
            });
            return this;
          }
        });