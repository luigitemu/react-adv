// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import {LazyExoticComponent} from 'react';
import { lazy } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';



type JSXComponent = ()=>JSX.Element

interface Route{
    path: string;
    Component:  LazyExoticComponent <JSXComponent>  | JSXComponent //JSXComponent;
    name: string;
    children?: Route[]
}

// const LazyPage1 = lazy(  ()=> import( /* webpackChunkName: "LazyPage1" */  '../01-lazyload/pages/LazyPage1') );




export const routes: Route[] = [
    {
        path:'/lazyload',
        Component: lazy(  ()=> import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')  ),
        name: 'Lazy Loading Nested'
    },
    {
        path:'/nolazy',
        Component: NoLazy,
        name:'No Lazy'
    }
];