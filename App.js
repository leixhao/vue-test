export default {
    template:`
        <div style="background-color:red">
            <list :heros="appHeros"></list>
            <add :heros="appHeros"></add>
            <update :heros="appHeros"></update>
            <dell :heros="appHeros"></dell>
        </div>
    `,
    data(){
        return {
            appHeros:[{id:1,name:'VN'},{id:2,name:'瑞文'},{id:3,name:'剑姬'},{id:4,name:'牧魂人'}]
        }
    }
}