import { fetchDataSet } from "../dataset-api";

describe("simple fetch dataset tests",()=> {

    test("simple null check",async () => {
        expect(fetchDataSet()).toBeInstanceOf(Promise);
    });
    

});