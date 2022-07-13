"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = __importDefault(require("../utils/dictionary"));
const properties = [
    'type',
    'name',
    'price',
    'image',
    'author',
    'publishingCompany',
    'isbn'
];
const validateProperties = (book) => {
    let response = [true, null];
    properties.forEach((property) => {
        if (!Object.prototype.hasOwnProperty.call(book, property))
            response = [false, property];
    });
    return response;
};
const validateValues = (book) => {
    const entries = Object.entries(book);
    let response = [true, null];
    entries.forEach((entry) => {
        const [property, value] = entry;
        if (!value)
            response = [false, property];
    });
    return response;
};
const validateBook = (req, res, next) => {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res
            .status(dictionary_1.default.BAD_REQUEST)
            .send(`O campo ${property} é obrigatório`);
    }
    [valid, property] = validateValues(book);
    if (!valid) {
        return res
            .status(dictionary_1.default.BAD_REQUEST)
            .send(`O campo ${property} não pode ser nulo ou vazio`);
    }
    next();
};
exports.default = validateBook;
