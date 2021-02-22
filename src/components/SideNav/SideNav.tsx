import React, {useEffect, useState} from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

function style() {
    return css`
      display: flex;
      justify-content: flex-start;
      height: 100%;
      #sideNav {
          width: 20%;
          height: 100%;
          background-color: #5882FA;
          color: #ffffff;
          .sideNavMenu {
            cursor: pointer;
            margin-top: 20px;
            font-weight: bold;
            font-size: 16px;
          }
      }
      #content {
          width: 80%;
          height: 100%;
          .main-content {
           padding-top: 20px;
          }
      }
    `
}

export interface Menu {
    path: string,
    exact?: boolean,
    label: string,
    component: () => JSX.Element
}

export interface SideNavProps {
    menus: Menu[]
    children?: JSX.Element[] | JSX.Element
}

export const SideNav = (props: SideNavProps) => {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
    // let selectedMenuIndex = 0

    // useEffect(() => {
    // }, [selectedMenuIndex])

    const pubUrl = process.env.PUBLIC_URL;

    return (
        <Router>
            <div className="SideNav"
                 css={style()}>
                <div id={"sideNav"}>
                    jinhyeong_blog
                    {
                        props.menus.map((menu: Menu, idx: number) => {
                            return <div key={idx}
                                        className={"sideNavMenu"}>
                                <Link to={pubUrl + menu.path}>{menu.label}</Link>
                            </div>
                        })
                    }
                </div>
                <div id={"content"}>
                    {props.children}
                    <Switch>
                        <Route exact path={["/", pubUrl]}>
                            <Redirect to={pubUrl + props.menus[0].path} />
                        </Route>
                        <Route exact path="/andy-blog">
                            <Redirect to={pubUrl + props.menus[0].path} />
                        </Route>
                        {props.menus.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={pubUrl + route.path}
                                exact={route.exact}
                                children={<route.component />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

SideNav.defaultProps = {}