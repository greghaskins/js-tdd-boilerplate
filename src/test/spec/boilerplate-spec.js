"use strict";

var boilerplate = require('../../main.js');

var expect = require('chai').expect;

describe('smoke test', function () {
    it('should pass', function () {
        expect(boilerplate()).to.equal('all systems GO');
    });
});
