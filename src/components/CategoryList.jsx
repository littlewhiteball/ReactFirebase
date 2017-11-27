import React from 'react';

export default class CategoryList extends React.Component {
    render() {
        return (
            [
                <li>
                    <a href='#'>Category1</a>
                </li>,
                <li>
                    <a href='#'>Category2</a>
                </li>,
                <li>
                    <a href='#'>Category3</a>
                </li>
            ]
        );
    };
};
