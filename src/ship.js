export default class Ship {
    constructor(length, hits=0, sunk=false){
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
    }

    hit(){
        this.hits++
    }

    getHits(){
        return this.hits
    }

    changeSunkStatus(){
        this.sunk = true;
    }

    isSunk() {
        const hits = this.getHits();

        if(hits == this.length){
            return true;
        }
        return false;
    }
}