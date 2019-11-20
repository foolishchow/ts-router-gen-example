/**
 * this file is auto generated
 * don't modify by hand
 */
import Vue from "vue";
import VueRouter,{RouteConfig} from "vue-router";
import {IndexPage} from "./views";
import {BasePage} from "./views/base";
import {BaseTestPage} from "./views/base/test";
import {TestPage} from "./views/test";
import {TestParentPage} from "./views/test/test-parent";

Vue.use(VueRouter);

enum AppRoutePath {
  /**
   * index-page
   * @file src/views/index.tsx
   */
  IndexPage = "/",
  /**
   * base-page
   * @file src/views/base/index.tsx
   */
  BasePage = "/base/",
  /**
   * base-test-page
   * @file src/views/base/test.tsx
   */
  BaseTestPage = "/base/test/",
  /**
   * test-page
   * @file src/views/test/index.tsx
   */
  TestPage = "/test/",
  /**
   * test-parent-page
   * @file src/views/test/test-parent.tsx
   */
  TestParentPage = "/test/test-parent/",
};

export const AppRoutes:RouteConfig[] =  [
    {
        "name": "index-page",
        "path": "/",
        "component": IndexPage
    },
    {
        "name": "test-page",
        "path": "/test/",
        "component": TestPage
    },
    {
        "name": "base-page",
        "path": "/base/",
        "component": BasePage,
        "children": [
            {
                "name": "base-test-page",
                "path": "/base/test/",
                "component": BaseTestPage
            },
            {
                "name": "test-parent-page",
                "path": "/test/test-parent/",
                "component": TestParentPage
            }
        ]
    }
];
export type RouterMenus = {
  sort: number|string;
  show: boolean;
  name: string;
  path: string;
  children?:RouterMenus[]
}
export const AppMenuRoutes:RouterMenus[] = [
    {
        "sort": "0",
        "show": true,
        "name": "index-page",
        "path": "/"
    },
    {
        "sort": "1",
        "show": true,
        "name": "test-page",
        "path": "/test/"
    },
    {
        "sort": 255,
        "show": true,
        "name": "base-page",
        "path": "/base/",
        "children": [
            {
                "sort": 255,
                "show": true,
                "name": "base-test-page",
                "path": "/base/test/"
            },
            {
                "sort": 255,
                "show": true,
                "name": "test-parent-page",
                "path": "/test/test-parent/"
            }
        ]
    }
];

Object.defineProperty(Vue.prototype, "$AppRoutes", {
  get() {
    return AppRoutePath;
  }
});

declare module "vue/types/vue" {
  interface Vue {
    $AppRoutes: typeof AppRoutePath;
  }
}
