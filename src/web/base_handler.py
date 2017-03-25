#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import tornado.web
# from py_class import user


# TODO add user detection here
# @userapp.tornado.config(app_id=user.USER_APP_ID)
class BaseHandler(tornado.web.RequestHandler):
    _debug = None
    _manual = None
    _lore = None
    _db = None
    _global_arg = {}

    def initialize(self, **kwargs):
        self._debug = kwargs.get("debug")
        self._db = kwargs.get("db")
        self._manual = kwargs.get("manual")
        self._lore = kwargs.get("lore")
        self._global_arg = {
            "debug": kwargs.get("debug"),
            "use_internet_static": kwargs.get("use_internet_static"),
            "db": self._db,
            "disable_character": kwargs.get("disable_character"),
            "disable_admin": kwargs.get("disable_admin"),
            "disable_login": kwargs.get("disable_login")
        }

    def get_current_user(self):
        # TODO not work
        return self._db.get_user(_uuid=self.get_secure_cookie("user"))
