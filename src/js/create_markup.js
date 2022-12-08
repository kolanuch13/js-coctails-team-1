import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, { 
    itemsPerPage: 6,
 });

instance.getCurrentPage();