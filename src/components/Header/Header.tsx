import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react'

function style() {
    return css `
         background-color: #5882FA;
         color: white;
         height: 50px;
         img {
          height: 100%;
         }
     `
}

export interface HeaderProps {
    imageUrl?: string
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="Header"
             css={style()}>
            jinhyeong_blog
        </div>
    );
}

Header.defaultProps = {}