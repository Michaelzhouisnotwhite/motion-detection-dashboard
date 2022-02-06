import { Table, TableColumn } from "element-ui";
import { Dialog } from "element-ui";
import { Button } from "element-ui";
import { Form, FormItem } from "element-ui";
import { Input, InputNumber } from "element-ui";
import { Message, MessageBox } from "element-ui";
import { Card } from "element-ui";
import { Menu, Col, Row, Submenu, MenuItem, MenuItemGroup, RadioGroup, Radio, RadioButton } from "element-ui"
import { Header, Container, Aside, Main } from 'element-ui';
import { Avatar } from 'element-ui';

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import Vue from 'vue'

// Vue.use(Message)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Card)
Vue.use(Menu)
Vue.use(Col)
Vue.use(Row)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Radio)

Vue.use(Header)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)

Vue.use(Avatar)

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm