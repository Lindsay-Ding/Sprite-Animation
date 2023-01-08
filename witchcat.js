class WitchCat {
    constructor(game) {
        this.game = game;
        
        this.move = new Animator(ASSET_MANAGER.getAsset("./move.png"), 0, 0, 98, 116, 6, 0.1, true);
        this.attack = new Animator(ASSET_MANAGER.getAsset("./attack.png"), 0, 0, 98, 116, 9, 0.1, true)

        this.x = 1024;
        this.y = 0;
        this.speed = 60;

        this.count = 0;

    };

    update() {

        this.x -= this.speed * this.game.clockTick;
        if (this.x < 0) this.x = 1024;

        this.y += this.speed * this.game.clockTick;
        if (this.y > 576) this.y = 0;

    };

    draw(ctx) {
        if (this.count < 360) {
            this.move.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            this.count++;
        } else {
            if (this.count === 720) this.count = 0;
            this.attack.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            this.count++;
        }

    };
}