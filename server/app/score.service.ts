import "reflect-metadata";
import {injectable} from "inversify";

@injectable()
export class ScoreService {
    public getScores(): Array<{money: number, time: number}> {
        let array: Array<{money: number, time: number}> = [];
        const fs = require("fs");

        fs.readFileSync("scores.txt", "utf8").toString().split("\n").forEach((line: string) =>{
            line.split(", ");
            array.push({money: Number(line[0]), time: Number(line[1])});
        });

        return array;
    }
}
