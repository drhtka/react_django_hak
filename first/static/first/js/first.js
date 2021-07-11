
class App extends React.Component {
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            name: 'Ivan',
            years: 25,
            userNameWorks: [],
            userNameWorks_edit: [],
        }
    }

    buttonTwo(usernames, datausers) {
        // сортируем по стоимости используем this.state.products;
        // alert(name_click)
        let works_name = this.state.userNameWorks
        //this.setState({down_up:name_click}) // отловили что было нажато и записано в стейте
        console.log(works_name)
    }


    worksApi(json) { // в одной функции делаем 2 задания во время фетча, т.е одну и ту же выборку назначаем двум переменным
        this.setState({userNameWorks: json}) //
        this.setState({userNameWorks_edit: json})

        console.log('userNameWorks')
        console.log(this.state.userNameWorks, this.state.userNameWorks_edit)

    }

    componentDidMount() {
        console.log('hello_comp-2')

        // GET Request.
        fetch('http://127.0.0.1:8400/api')
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => this.worksApi(json))    //print data to console

        //.then(json => this.setState({products:json}))    //print data to console

        // .then(my_categ_state => console.log(this.state.category))
        // console.log('2')
        // console.log(this.state)
    }

    /*<!-- выведем даные из сайта: -->*/
    render() {
        const list = this.state.userNameWorks.map((item, index) => {

            let usernames = item.username
            let datausers = item.datauser

            return <li key={index}>usernames: {usernames}
                <div>datausers: {datausers}</div>
            </li>
        });


        //  render зарезервированное имя в реакте выводит даные
            return <div>
                <div>имя: {this.state.name}</div>
                возраст: {this.state.years}
                <ul>{list}</ul>
            </div>;


    }
}
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
