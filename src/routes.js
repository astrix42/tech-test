
import About from './components/About.vue';
import Task from './components/Task.vue';
import HelloWorld from './components/HelloWorld.vue';

export default [
    {
        path: '/',
        component:HelloWorld
    },
    {
        path: '/Home',
        component:HelloWorld
    },
    {
        path: '/About',
        component:About
    } ,
    {
        path: '/Task',
        component:Task 
    },


]