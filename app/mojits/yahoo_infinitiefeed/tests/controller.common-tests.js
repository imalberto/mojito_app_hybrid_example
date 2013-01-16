/**
 * Copyright (c) 2013 Yahoo! Inc. All rights reserved.
 */
/*jslint node:true*/
/*global YUI, YUITest*/

"use strict";

YUI.add('infinitiefeed-tests', function (Y, NAME) {
    var suite = new YUITest.TestSuite(NAME),
        controller,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({
        name: 'infinitiefeed tests',

        setUp: function () {
            controller = Y.mojito.controllers.infinitiefeed;
        },
        tearDown: function () {
        },
        'test index': function () {
            A.isFunction(controller.index);

            var ac;
            ac = {
                composite: {
                    execute: function (cfg, cb) {
                        A.areEqual('yahoo.hybrid.infinitiefeed', cfg.children.feed.type, 'wrong action');
                        A.areEqual('feed', cfg.children.feed.action, 'wrong action');
                        cb('DATA');
                    }
                },
                done: function (data, meta) {
                    A.areEqual('DATA', data, 'wrong data');
                }
            };
            controller.index(ac);
        },
        'test feed': function () {
            A.isFunction(controller.feed);
        }
    }));

    YUITest.TestRunner.add(suite);

}, '0.0.1', { requires: ['mojito-test', 'infinitiefeed'] });
