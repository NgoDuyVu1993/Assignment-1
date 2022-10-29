import fs from 'fs';
import path from 'path';
import app from '../index';
import supertest from 'supertest';
import Resize from '../utilities/resize';
import { fileExist } from '../utilities/checkfileExist';
import { filePath } from '../utilities/checkfileExist';

const INVALID_FILES = ['image_1', 'image_2', 'abc123', 'BBC', 'testing']
const VALID_FILES = ['sunrise', 'war', 'sydney', 'city', 'greenfield']

const imgFolder: string = path.resolve('thumb');

// Get random image from the list
const randomImage: number = Math.floor(Math.random() * 5);

// Generate negative value Hight and Width
const negativeNumber: number = Math.floor(Math.random() * 200) * -1;

const request = supertest(app);
describe('Run test on Utilities Functions', () => {
    beforeEach(function() {
        jasmine.clock().install();
      });

    afterEach(function() {
        jasmine.clock().uninstall();
      });

    it('Test Resize Width < Hight', async() => {
        await Resize(VALID_FILES[randomImage], 400, 600);
        const imgPath = path.join(imgFolder,
            `${VALID_FILES[randomImage]}_400_600.jpg`);
        jasmine.clock().tick(10000);
        expect(fs.existsSync(imgPath)).toBe(true);
    });

    it('Test Resize Width > Hight', async() => {
        await Resize(VALID_FILES[randomImage], 800, 500);
        const imgPath = path.join(imgFolder,
            `${VALID_FILES[randomImage]}_800_500.jpg`);
        jasmine.clock().tick(10000);
        expect(fs.existsSync(imgPath)).toBe(true);
    });

    it('Test Function Check File exist is True', async () => {
        const exist = await fileExist('full', VALID_FILES[randomImage]);
        jasmine.clock().tick(10000);
        expect(exist).toBe(true);
      });
      
    it('Test Function Check File exist is False', async () => {
        const exist = await fileExist('full', INVALID_FILES[randomImage]);
        jasmine.clock().tick(10000);
        expect(exist).toBe(false);
    });
});

describe('Run test on API Endpoint Response', () => {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('Test the API Endpoint', async () => {
        const response = await request.get('/api');
        jasmine.clock().tick(10000);
        expect(response.status).toBe(200);
    });
    
    it('Test the Valid API Process Image Endpoint', async () => {
        const response = await request.get(`/api/image?filename=${VALID_FILES[randomImage]}&height=200&width=200`);
        jasmine.clock().tick(10000);
        expect(response.status).toBe(200);
    });

    it('Test the Invalid API Process Image Endpoint', async () => {
        const response = await request.get(`/api/image?filename=${INVALID_FILES[randomImage]}&height=200&width=200`);
        jasmine.clock().tick(10000);
        expect(response.status).toBe(400);
    });

    it('Test Zero Hight', async () => {
        const response = await request.get(`/api/image?filename=${VALID_FILES[randomImage]}&height=0&width=200`);
        jasmine.clock().tick(10000);
        expect(response.status).toBe(400);
    });

    it('Test Zero Width', async () => {
        const response = await request.get(`/api/image?filename=${VALID_FILES[randomImage]}&height=200&width=0`);
        jasmine.clock().tick(10000);
        expect(response.status).toBe(400);
    });

    it('Test Zero Width and Zero Hight', async () => {
        const response = await request.get(`/api/image?filename=${VALID_FILES[randomImage]}&height=0&width=0`);
        jasmine.clock().tick(10000);
        expect(response.status).toBe(400);
    });

    it('Test Zero Width and Zero Hight', async () => {

        await request.get(`/api/image?filename=${VALID_FILES[randomImage]}&height=400&width=400`);
        const imgPath = path.join(imgFolder,`${VALID_FILES[randomImage]}_400_400.jpg`);
        jasmine.clock().tick(10000);
        expect(fs.existsSync(imgPath)).toBe(true);
    });


});