import React from 'react';
import './TableCaption.scss';

export const TableCaption: React.FC = () => (
    <section className="table-caption">
        <div id="name">name</div>
        <div id="created">created</div>
        <div id="category">category</div>
        <div id="content">content</div>
        <div id="dates">dates</div>
        <div id="icons">icons</div>
    </section>
);

export default TableCaption;
