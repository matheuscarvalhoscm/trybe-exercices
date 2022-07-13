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
const express_1 = require("express");
const functions_1 = require("../utils/functions");
const dictionary_1 = __importDefault(require("../utils/dictionary"));
const validationBook_1 = __importDefault(require("../middlewares/validationBook"));
const router = (0, express_1.Router)();
const NotFound = 'Livro não encontrado.';
router.get('/books', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, functions_1.read)();
    return res.status(dictionary_1.default.OK).json(books);
}));
router.get('/books/:isbn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isbn } = req.params;
    const books = yield (0, functions_1.read)();
    const book = books.find((book) => book.isbn === isbn);
    if (!book)
        return res.status(dictionary_1.default.NOT_FOUND).send(NotFound);
    return res.status(dictionary_1.default.OK).json(book);
}));
router.post('/books/', validationBook_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const books = yield (0, functions_1.read)();
    books.push(book);
    yield (0, functions_1.write)(books);
    return res.status(dictionary_1.default.CREATED).json(book);
}));
router.put('/books/:isbn', validationBook_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isbn } = req.params;
    const book = req.body;
    const books = yield (0, functions_1.read)();
    const index = books.findIndex(book => book.isbn === isbn);
    if (index === -1)
        return res
            .status(dictionary_1.default.NOT_FOUND)
            .send(NotFound);
    books.splice(index, 1, book);
    yield (0, functions_1.write)(books);
    return res.status(dictionary_1.default.OK).json(book);
}));
router.delete('/books/:isbn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isbn } = req.params;
    const books = yield (0, functions_1.read)();
    const index = books.findIndex(book => book.isbn === isbn);
    if (index === -1)
        return res
            .status(dictionary_1.default.NOT_FOUND)
            .send(NotFound);
    books.splice(index, 1);
    yield (0, functions_1.write)(books);
    return res.status(dictionary_1.default.NO_CONTENT).send();
}));
exports.default = router;
