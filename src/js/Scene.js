export default class Scene {
    onInit ({ Enemies, PlayerPosition, Game }) {
        this.enemies = Enemies;
        this.playerPosition = PlayerPosition;
        this.game = Game;
        this.renderScene();
    }

    renderScene () {
        const { enemies } = this;

        requestAnimationFrame(() => {
            enemies.setEnemies();
            enemies.checkCollisionWithPlayer();
            this.renderScene();

            if (this.playerPosition.isPlayerOutsideRoad()) {
                this.game.restartGame();
            }
        });
    }
}
