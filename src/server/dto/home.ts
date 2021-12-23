import { Rule, RuleType } from '@midwayjs/decorator';
const requiredString = RuleType.string().required(); // 自己在一个文件中定义一下你们部门的规范或常用的。
const maxString = (length) => RuleType.string().max(length); // 自己在一个文件中定义一下你们部门的规范或常用的。

export class SchoolDTO {
    @Rule(RuleType.string().required())
    name: string;
    @Rule(RuleType.string())
    address: string;
}

export class UserDTO {
    @Rule(RuleType.number().required())
    id: number;

    // @Rule(requiredString)
    @Rule(RuleType.string().required())
    firstName: string;

    // @Rule(maxString(10))
    @Rule(RuleType.string().max(10))
    lastName: string;

    @Rule(RuleType.number().max(60))
    age: number;

    @Rule(SchoolDTO)
    school: SchoolDTO;

    // @Rule(SchoolDTO)
    // xxxx: SchoolDTO[];

    // getName() {
    //     return this.firstName + ' ' + this.lastName;
    // }
    //
    // isAdult() {
    //     return this.age > 36 && this.age < 60;
    // }
}
