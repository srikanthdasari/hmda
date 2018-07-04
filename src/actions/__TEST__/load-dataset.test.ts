import { getLoadDataSet } from "../load-dataset";

test('basic test',async ()=>{
    expect(getLoadDataSet()).toBeDefined();
})