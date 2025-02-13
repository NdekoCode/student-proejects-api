import { should } from "chai";
import { describe, it } from "mocha";
import { BASE_API } from "../utils/constants.js";
import request from "./setup.test.js";

should();

describe("STUDENT api/v1/student", () => {
    it("should create student", (done) => {
        const user = {
            firstName: "Leader",
            lastName: "Mushio",
            email: "leader@gmail.com",
            status: "active",
        };
        request
            .post(BASE_API + "/students")
            .send(user)
            .end((err, res) => {
                res.body.should.to.be.a("object");
                res.status.should.to.be.equal(201);
                done();
            });
    });

    it("should return students data", (done) => {
        request.get(BASE_API + "/students").end((err, res) => {
            res.body.should.to.be.be.a("object");
            res.status.should.to.be.equal(200);
            done();
        });
    });
});
