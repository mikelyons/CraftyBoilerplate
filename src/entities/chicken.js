Chicken = BaseEntity.extend({
    defaults: {
        'speed' : 4,
    },
    initialize: function(){
        var model = this;
        var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Keyboard, chicken, SpriteAnimation, Collision, Ape, LeftControls");

        entity
            .attr({x: 10, y: 0, z: 300})
            .collision(new Crafty.circle(0, 0, 10))
            .setName('Chicken')
            .leftControls(1)
            .Ape()

            entity.origin(entity.w/2, entity.h/2);

        model.set({'entity' : entity });
    }
});