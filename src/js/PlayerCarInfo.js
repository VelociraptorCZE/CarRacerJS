export default class PlayerCarInfo {
    constructor (_, defaultProps) {
        this.defaultProps = defaultProps;
        this.resetProps();
    }

    resetProps () {
        this.carProps = JSON.parse(JSON.stringify(this.defaultProps));
    }

    set isDestroyed (isDestroyed) {
        this.carProps.destroyed = !!isDestroyed;
    }

    get isDestroyed () {
        return this.carProps.destroyed;
    }

    get coords () {
        return this.carProps.coords;
    }

    get carSize () {
        return {
            width: this.carProps.width,
            height: this.carProps.height
        };
    }
}
