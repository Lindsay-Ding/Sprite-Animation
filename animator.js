class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, loop) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration, loop});
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;

        if (this.isDone()) {
            if (this.loop) {
                this.elapsedTime -= this.totalTime;
            } else {
                return;
            }
        }

        let frame = this.currentFrame();

        ctx.drawImage(this.spritesheet, 
            this.xStart + this.width*frame, this.yStart, this.width, this.height,
            x, y, this.width, this.height);


    };

    currentFrame() {

        return Math.floor(this.elapsedTime/this.frameDuration);
    };

    isDone() {

        return (this.elapsedTime >= this.totalTime);
    };

}