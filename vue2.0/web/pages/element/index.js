import Vue from 'vue';
import { Dropdown,
    MenuItem,
    DropdownItem,
    DropdownMenu,
    Menu,
    Submenu,
    MenuItemGroup,
    Row,
    Col,
    Container,
    Aside,
    Main,
    Button,
    Table,
    TableColumn,
    Header } from 'element-ui';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// Vue.use(ElementUI);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);

export default {
    App,
};
