<template>
    <div class="nav-bar">
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/HelloWorld">详情</router-link></li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "NavModle",
        data(){
            return{
                home:true,
                helloworld:false,
            }
        },
        methods:{
            setHome(){
                // this.helloworld=false;
                this.home=true;
            },
            setHelloWorld(){
                this.home=false;
                // this.helloworld=true;
            }
        }
    }
</script>

<style scoped>
ul,li{
   list-style: none;
    padding: 0;
}
    .nav-bar{
        height: 40px;
        background-color: #333333;
        line-height: 40px;
        padding:0 5px;
    }
    .nav-bar li{
        float: left;
        margin-right: 10px;
    }
    .nav-bar a{
        color: white;
        text-decoration: none;
    }
</style>