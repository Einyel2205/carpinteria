"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRepository_1 = __importDefault(require("../repositories/User/userRepository"));
let auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield userRepository_1.default.auth(email);
        if (result[0].length > 0) {
            const isPasswordValid = yield bcryptjs_1.default.compare(password, result[0][0].contrasenia);
            if (isPasswordValid) {
                return res.status(200).json({
                    status: 'Successful authentication'
                });
            }
        }
        return res.status(401).json({
            status: 'Incorrect username or password'
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = auth;
