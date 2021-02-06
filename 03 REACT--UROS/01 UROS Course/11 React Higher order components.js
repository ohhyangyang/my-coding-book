/*
- higher order component
   HOC: a component that takes another componetn as an argument
        and adds some values to that component and return it
        跳过父级组件，直接添加更多props data给一个component，创建增强版组件

  HOC的精髓在于，可以个性化创建很强大的函数插件，并跳过父级component，将它植入到当前的component中

 hoc/Higher.js

    function Higher(WrappedComponent){
        const color = "SkyBlue";

        cons getData=()=>{
            const pr = axios.get('xxx')
            return pr;
        }
        return function(props){
            return(<WrappedComponent {...props} color={color} getData={getData}/>)
        }

    }

    export default Higher

 ArticlePreview.js

    import Higher....

    class ArticlePreview extends Component(){
        ...
    }

    const EnhancedArticlePreview = Higher(ArticlePreview)

    export default EnhancedArticlePreview


*/