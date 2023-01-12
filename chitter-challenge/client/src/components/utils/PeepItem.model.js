export default class PeepItemModel {

    constructor(peepMessage, peepDateCreated, _id, name, userHandle) {
        this.peepMessage = peepMessage;
        this.peepDateCreated = peepDateCreated;
        this._id = _id;
        this.name = name;
        this.userHandle = userHandle
        // this.name = name;
        // this.userHandle = userHandle;

    }
}