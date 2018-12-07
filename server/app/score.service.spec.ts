import { assert } from "chai";
import {ScoreService} from "./score.service";
// tslint:disable:no-magic-numbers
const mockDiffImgBuffer: string = "1, 2\r\n3, 4";

describe("Should be detected as a difference", () => {
    it("isDiff should return true when recieving a pixel coordinate that is a difference", (done: Function) => {
        let testValidated: boolean;
        const validateDifferenceService: ScoreService = new ScoreService();
        testValidated = validateDifferenceService.isDiff(1, 2, mockDiffImgBuffer);
        testValidated = testValidated && validateDifferenceService.isDiff(3, 4, mockDiffImgBuffer);
        assert.isTrue(testValidated);
        done();
    });

    it("isDiff should return false when recieving a pixel coordinate that is not a difference", (done: Function) => {
        let testValidated: boolean;
        const validateDifferenceService: ScoreService = new ScoreService();
        testValidated = validateDifferenceService.isDiff(10, 20, mockDiffImgBuffer);
        assert.isFalse(testValidated);
        done();
    });
});
