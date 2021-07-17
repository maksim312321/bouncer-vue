import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component); 
    //ф-я component позволяет зарегистрировать UI компонент (в данном случае 2 разных components)
});

console.log(components);
app.mount('#app');//занесение в дом дерево
