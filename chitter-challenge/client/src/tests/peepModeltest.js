import PeepItemModel from '../Components/utils/PeepItem.model.js';

test(`It should create the expected object when the constructor is called`, () => {
    const [peepMessage, peepDateCreated, _id, name] = [`test peep text`, `2019-11-27T15:30:00.000Z`, 21, `Test name`];

    const testPeep = new PeepItemModel(peepMessage, peepDateCreated, _id, name);

    expect(testPeep.message).toBe(peepMessage);
    expect(testPeep.name).toBe('Test name');
    expect(testPeep._id).toBe(_id);
    expect(testPeep.dateCreated).toBe(peepDateCreated);

    expect(testPeep).toBeInstanceOf(PeepItemModel);

})