import { run } from './app/app';
import AlertService from './app/alert-service';
import ComponentService from './app/component-service';

const alertInstance = new AlertService();
const componentInstance = new ComponentService();


run(alertInstance, componentInstance)


alert("Hello From Webpack");