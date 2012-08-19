Chicken = BaseEntity.extend({
    defaults: {
        'speed' : 4,
    },
    initialize: function(){
        var model = this;
        var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Keyboard, chicken, SpriteAnimation, Collision, Ape, LeftControls");

        entity
            .attr({x: 30, y: 30, x: 100, y: 300, z: 300})
            .collision(new Crafty.circle(0, 0, 10))
            .addComponent("Gravity")
            .gravity("Platform")
            .leftControls(5)
            .Ape()
            .setName('Chicken')

            entity.origin(entity.w/2, entity.h/2);

        model.set({'entity' : entity });
    }
});